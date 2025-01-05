import { Button, Col, Form, Image, Input, Layout, Menu, Row } from "antd";
import line_icon from "./assets/line_icon.png";
const { Header, Content, Footer } = Layout;

export const Home = () => {
  return (
    <Layout>
      <Header className='header'>
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
      </Header>
      <Content>
        <div className="home-image">
          <h1>ゆるやかなメロディに包まれて、ピアノを楽しもう</h1>
        </div>
        <div className="about">
          <h2>About</h2>
          <span className="span">- どんぐりピアノ教室について -</span>
          <p>岐阜県中津川市にあるちいさなピアノ教室です。</p>
          <p>本教室では楽しくピアノを弾くことを目指しています。</p>
          <p>初心者の方から経験者まで、どなたでもお気軽にお越しください。</p>
        </div>
        <div className="place">
          <h2>Place</h2>
          <span className="span">- どんぐりピアノ教室の場所 -</span>
          <p>岐阜県中津川市の自宅にてレッスンを行っています。</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.787927117274!2d137.45467337577864!3d35.55893943668214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ccb2824e096bf%3A0xebd92488ae3daaf5!2z44CSNTA4LTAyMDMg5bKQ6Zic55yM5Lit5rSl5bed5biC56aP5bKh77yV77yR77yQ4oiS77yT77yS!5e0!3m2!1sja!2sjp!4v1735923187440!5m2!1sja!2sjp"
            loading="lazy" />
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <span className="span">- お問い合わせ -</span>
          <div className="form">
            <Form
              layout="vertical"
            >
              <Form.Item name="email" label="メールアドレス" >
                <Input />
              </Form.Item>
              <Form.Item name="name" label="お名前">
                <Input />
              </Form.Item>
              <Form.Item name="contact_content" label="お問い合わせ内容">
                <Input.TextArea rows={8} maxLength={300} />
              </Form.Item>
              <Form.Item>
                <Row justify="center">
                  <Col>
                    <Button>送信</Button>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
            <div className="line">
              <p>公式LINEもお気軽にご利用ください</p>
              <a href="https://lin.ee/mRHyhXO">
                <Image
                  src={line_icon}
                  alt='公式LINE'
                />
              </a>
            </div>
          </div>
        </div>
      </Content>
      <Footer className="footer">
        <div className="copyright">
          <p>© 2025 by どんぐりピアノ教室</p>
        </div>
      </Footer>
    </Layout>
  );
};
