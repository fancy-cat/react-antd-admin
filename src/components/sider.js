import React from 'react';
import { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import menus from '../routes/config';
const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

const renderMenuItem = (item) => {
  return <Menu.Item key={item.key}>
    <Link to={item.key}>{item.title}</Link>
  </Menu.Item> 
}
const renderSubMenu = (item) => {
  return (
    <SubMenu key={item.key} title={item.title}>
      {
        item.subs.map(mSub => mSub.subs ? renderSubMenu(mSub) : renderMenuItem(mSub))
      }
    </SubMenu>
  )
}
export default function MainSider(props) {
  let location = useLocation()
  const [selectedKey, setSelectedKey] = useState([])
  const [openKeys, setOpenKeys] = useState([]);
  const [defaultOpenKeys, setDefaultOpenKeys] = useState([]);
  const openMenu = (v) => {
    // 情景1: 只打开一个subMenu
    // let temp = v.slice(v.length-1)
    // setOpenKeys(temp)
    // 情景2: 同时打开多个subMenu
    setOpenKeys(v)
  }
  useEffect(() => {
    const formatOpenKeys = (pathname) => {
      console.log(1)
      // setOpenKeys('/waiting')
      // 格式一般从属于一级path eg：/news/1 --> return /news
      let list = pathname.split('/')
      if(list.length > 2) {
        let currentPath = `/${list[1]}`
        console.log(currentPath)
        setDefaultOpenKeys([currentPath])
        // 都没有打开时 默认改为打开状态
        if(!openKeys.includes(currentPath)) {
          openKeys.push(currentPath)
          setOpenKeys(openKeys)
        }
      } else {
        setDefaultOpenKeys(undefined)
      }
    }
    setSelectedKey([location.pathname])
    formatOpenKeys(location.pathname)
  }, [location.pathname]);

  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed)
  }
  return (
    <div className="main-sider">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="title">ADMIN-DEMO</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home']} selectedKeys={selectedKey} defaultOpenKeys={defaultOpenKeys} openKeys={openKeys} onOpenChange={openMenu}>
            { 
              menus.menu.map(m => !m.subs ? renderMenuItem(m) : renderSubMenu(m))
            }
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>解释权归宝儿姐所有</Footer>
        </Layout>
      </Layout>
    </div>
  )
}