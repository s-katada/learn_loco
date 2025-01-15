import { Button, Form, FormProps, Image, Input, Layout, Menu, MenuProps, Spin } from "antd";
import line_icon from "./assets/line_icon.png";
import { useState } from "react";
import { api } from "./api";
import { RuleObject } from "antd/lib/form";
const { Header, Content, Footer } = Layout;

interface FieldType {
  name: string;
  email: string;
  contact_content: string;
}
type MenuItem = Required<MenuProps>['items'][number];
const menuItems: MenuItem[] = [
  { label: (<a href="#top">TOP</a>), key: "top" },
  { label: (<a href="#about">ABOUT</a>), key: "about" },
  { label: (<a href="#place">PLACE</a>), key: "place" },
  { label: (<a href="#contact">CONTACT</a>), key: "contact" },
];
const mailInputRule: RuleObject[] = [
  {
    type: 'email',
    message: '適切なメールアドレスを入力してください',
  },
  generateInputRule("メールアドレス"),
];
const nameInputRule = generateInputRule("お名前");
const contentInputRule = generateInputRule("お問い合わせ内容");
function generateInputRule(message: string) {
  return {
    required: true,
    message: `${message}を入力してください`,
  } as RuleObject;
}

export const Home = () => {
  const [current, setCurrent] = useState("top");
  const [isSpin, setIsSpin] = useState(false);
  const handleMenuItemClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  const submit: FormProps<FieldType>['onFinish'] = async (values) => {
    setIsSpin(true);
    const payload = {"name": values.name, "email": values.email, "content": values.contact_content};
    await fetch(api.send_discord(), {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then(() => {
      alert("送信しました！お返事をお待ちください!")
    }).catch(() => {
      alert("送信に失敗しました...入力内容をご確認の上もう一度送信してください");
    }).finally(() => {
      setIsSpin(false);
    });
  };
  return (
      <Layout>
        <Header className='header'>
          <Menu mode="horizontal" onClick={handleMenuItemClick} selectedKeys={[current]} className="menu" items={menuItems} />
        </Header>
        <Content>
          <div className="home-image">
            <h1>ゆるやかなメロディに包まれて、ピアノを楽しもう</h1>
          </div>
          <div className="about">
            <h2 id="about">About</h2>
            <span className="span">- どんぐりピアノ教室について -</span>
            <p>岐阜県中津川市にあるちいさなピアノ教室です。</p>
            <p>本教室では楽しくピアノを弾くことを目指しています。</p>
            <p>初心者の方から経験者まで、どなたでもお気軽にお越しください。</p>
          </div>
          <div className="place">
            <h2 id="place">Place</h2>
            <span className="span">- どんぐりピアノ教室の場所 -</span>
            <p>岐阜県中津川市の自宅にてレッスンを行っています。</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.787927117274!2d137.45467337577864!3d35.55893943668214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ccb2824e096bf%3A0xebd92488ae3daaf5!2z44CSNTA4LTAyMDMg5bKQ6Zic55yM5Lit5rSl5bed5biC56aP5bKh77yV77yR77yQ4oiS77yT77yS!5e0!3m2!1sja!2sjp!4v1735923187440!5m2!1sja!2sjp"
              loading="lazy" />
          </div>
          <Spin spinning={isSpin} tip="送信中...">
            <div className="contact">
              <h2 id="contact">Contact</h2>
              <span className="span">- お問い合わせ -</span>
              <div className="form">
                <Form
                  layout="vertical"
                  onFinish={submit}
                >
                  <Form.Item name="email" label="メールアドレス" rules={mailInputRule}>
                    <Input />
                  </Form.Item>
                  <Form.Item name="name" label="お名前" required rules={[nameInputRule]}>
                    <Input />
                  </Form.Item>
                  <Form.Item name="contact_content" label="お問い合わせ内容" required rules={[contentInputRule]}>
                    <Input.TextArea rows={8} maxLength={300} />
                  </Form.Item>
                  <Form.Item>
                    <Button htmlType="submit">送信</Button>
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
          </Spin>
        </Content>
        <Footer className="footer">
          <div className="copyright">
            <p>© 2025 by どんぐりピアノ教室</p>
          </div>
        </Footer>
      </Layout>
  );
};
