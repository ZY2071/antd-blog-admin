import style from './index.less';
import Link from 'umi/link';
import { menu } from './menu.js';

import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

class MainLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{ background: '#fff' }}
        >
          <div className={style.logo}>LOGO</div>
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            {menu.map((item, index) => {
              return (
                <Menu.Item key={index + 1}>
                  <Link to={item.path}>
                    <Icon type={item.ico} />
                    <span>{item.name}</span>
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={style.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              padding: 20,
              height: '100%',
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
