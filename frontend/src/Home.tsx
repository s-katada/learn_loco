import { Col, Image, Layout, Menu, Row } from "antd";
import donguri from "./assets/donguri.png";
import React from "react";

const { Header, Content, Footer } = Layout;

export const Home = () => {
  return (
    <Layout>
      <Header className='header'>
        <Row>
          <Col span={8}>
            <Image src={donguri} className="logo-image" />
          </Col>
          <Col span={16}>
            <Menu mode="horizontal" className="menu">
              <Menu.Item className="menu-item">
                TOP
              </Menu.Item>
              <Menu.Item className='menu-item'>
                ABOUT
              </Menu.Item>
              <Menu.Item className='menu-item'>
                PLACE
              </Menu.Item>
              <Menu.Item className='menu-item'>
                CONTACT
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
      <Content className="content">
        <div className="content-description">
          <h1>楽しく奏でるピアノ教室</h1>
        </div>
      </Content>
      <Footer className="footer">
        <div>
          <h2>Contact</h2>
          © 2024 by Donguri
        </div>
      </Footer>
    </Layout>
  );
};
