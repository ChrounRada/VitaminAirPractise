import React from "react";
import Nav from "./State/Nav";
import { NavLink, useParams } from "react-router-dom";
import { Layout, Menu, Switch, Divider } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  SettingOutlined,
  CalendarOutlined,
  MailOutlined,
  LinkOutlined
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AirWater = () => {
  let { id } = useParams();

  const [mode, setMode] = React.useState("inline");
  const [theme, setTheme] = React.useState("light");

  const changeMode = value => {
    setMode(value ? "vertical" : "inline");
  };

  const changeTheme = value => {
    setTheme(value ? "dark" : "light");
  };

  return (
    <React.Fragment>
      <Nav />
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "64.5vh",
            position: "absolute",
            left: 3
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <NavLink to="/home">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <NavLink to="/trending">Trending</NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <NavLink to="/subscription">Subscription</NavLink>
            </Menu.Item>
            <Menu.Item key="4" icon={<BarChartOutlined />}>
              <NavLink to="/library">Library</NavLink>
            </Menu.Item>
            <Menu.Item key="5" icon={<CloudOutlined />}>
              <NavLink to="/history">History</NavLink>
            </Menu.Item>
            <Menu.Item key="6" icon={<AppstoreOutlined />}>
              <NavLink to="/setting">Setting</NavLink>
            </Menu.Item>
            <Menu.Item key="7" icon={<TeamOutlined />}>
              <NavLink to="/report_History">Report History</NavLink>
            </Menu.Item>
            <Menu.Item key="8" icon={<ShopOutlined />}>
              <NavLink to="/send_Feedback">Send Feedback</NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 10 }} />
          <Content style={{ margin: "24px 20px 0", overflow: "initial" }}>
            <div
              className="site-layout-background"
              style={{ padding: 200, textAlign: "left" }}
            >
              <div>
                <h3>{id}</h3>
              </div>
            </div>
          </Content>
          <Footer
            style={{ textAlign: "center" }}
            color={{ styleMedia: "black" }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
      <Switch onChange={changeMode} /> Change Mode
      <Divider type="horizontal" />
      <Switch onChange={changeTheme} /> Change Style
      <br />
      <br />
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode={mode}
        theme={theme}
      >
        <Menu.Item key="1" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="2" icon={<CalendarOutlined />}>
          Navigation Two
        </Menu.Item>
        <SubMenu
          key="sub1"
          icon={<AppstoreOutlined />}
          title="Navigation Three"
          title="Navigation Three"
        >
          <Menu.Item key="3" icon={<CalendarOutlined />}>
            Option 3
          </Menu.Item>
          <Menu.Item key="4" icon={<CalendarOutlined />}>
            Option 4
          </Menu.Item>
          <SubMenu key="sub1-2" title="Submenu" icon={<CalendarOutlined />}>
            <Menu.Item key="5" icon={<CalendarOutlined />}>
              Option 5
            </Menu.Item>
            <Menu.Item key="6" icon={<CalendarOutlined />}>
              Option 6
            </Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub2" icon={<SettingOutlined />} title="Navigation Four">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
        </SubMenu>
        <Menu.Item key="link" icon={<LinkOutlined />}>
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ant Design
          </a>
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
};

export default AirWater;
