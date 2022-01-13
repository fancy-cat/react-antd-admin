import React from 'react';
import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SkinOutlined,
  SmileOutlined,
  AimOutlined
} from '@ant-design/icons';
import menus from '../routes/config';
const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;
console.log(menus)

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
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed)
  }
  return (
    <div className="main-sider">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="title">ADMIN-DEMO</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home']}>
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
