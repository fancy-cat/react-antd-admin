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
  return <Menu.Item key={item.key} icon={item.icon && <item.icon />}>
    <Link to={item.key}>{item.title}</Link>
  </Menu.Item> 
}
const renderSubMenu = (item) => {
  return (
    <SubMenu key={item.key} title={item.title} icon={item.icon && <item.icon />}>
      {
        item.subs.map(mSub => mSub.subs ? renderSubMenu(mSub) : renderMenuItem(mSub))
      }
    </SubMenu>
  )
}
export default function MainSider(props) {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = (v) => {
    setCollapsed(!collapsed)
  }
  let location = useLocation()
  const [openKeys, setOpenKeys] = useState([]);
  const openMenu = (v) => {
    setOpenKeys(v)
  }
  useEffect(() => {
    let list = location.pathname.split('/')
    if(list.length > 2) {
      let currentPath = `/${list[1]}`
      setOpenKeys([currentPath])
    }
  }, [collapsed]) // 只打开一个subMenu的话，同时监听location.pathname
  return (
    <div className="main-sider">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="title">
            {
              !collapsed && <div style={{width: '200px'}}>ADMIN-DEMO</div>
            }
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home']} selectedKeys={[location.pathname]} openKeys={openKeys} onOpenChange={openMenu}>
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