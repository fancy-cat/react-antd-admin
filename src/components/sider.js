import React from 'react';
import { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SkinOutlined,
  SmileOutlined,
  AimOutlined
} from '@ant-design/icons';
const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<AimOutlined />}>
              首页
            </Menu.Item>
            <SubMenu key="sub1" icon={<SkinOutlined />} title="UI组件">
              <Menu.Item key="2">组件1</Menu.Item>
              <Menu.Item key="3">组件2</Menu.Item>
            </SubMenu>
            <Menu.Item key="4" icon={<SmileOutlined />}>
              待开发
            </Menu.Item>
            <Menu.Item key="5" icon={<SmileOutlined />}>
              待开发
            </Menu.Item>
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
