import React, { useState } from "react";
import {
  Upload,
  Button,
  Divider,
  Space,
  Popconfirm,
  Card,
  Breadcrumb,
  Menu,
  BackTop
} from "antd";
import { UploadOutlined, MessageOutlined } from "@ant-design/icons";

const fileList = [
  {
    uid: "-1",
    name: "xxx.png",
    status: "done",
    url:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    thumbUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  },
  {
    uid: "-2",
    name: "yyy.png",
    status: "error"
  }
];
//back to
const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14
};

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        General
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Layout
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank "
        rel="noopener noreferrer"
        href="http://www.tmall.com/"
      >
        Navigation
      </a>
    </Menu.Item>
  </Menu>
);

const SeedsBoomb = () => {
  const [state, setState] = useState({ loadings: [] });

  const enterLoading = index => {
    setState(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;
      return {
        loadings: newLoadings
      };
    });
    setTimeout(() => {
      setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        console.log((newLoadings[index] = false));

        return {
          loadings: newLoadings
        };
      });
    }, 6000);
  };

  return (
    <React.Fragment>
      <div className="backgroundEcoturism">
        <div className="ui container">
          <div className="banner-content-eco">
            <h1>Our Ecoturism</h1>
            <p>
              Koompi mission is build and provide tools for the next generation
              of engineers,
              <br /> problem solvers and discoverers.
            </p>
            <h1>Natural</h1>
            <p>
              KOOMPI is a practical, affordable and effective entry-level
              notebook computer
              <br /> specifically designed for performing all daily tasks
              required for work and school.
              <br />
              <br />
              We&apos;ve created a customized operating system of our own called
              PionuxOS based on
              <br />
              the well-known open-source Linux software.
              <br />
            </p>
          </div>
          <div className="column six wide">
            <img
              className="ui fluid image koompi-about-image"
              src="pic/teamwork.svg"
              alt="teamwork-about"
            />
          </div>
        </div>
      </div>
      <div className="upload_image">
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          className="upload-list-inline"
          defaultFileList={[...fileList]}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
        <br />
        <br />
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          defaultFileList={[...fileList]}
          className="upload-list-inline"
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </div>
      <div className="click_me_button">
        <Button
          type="primary"
          loading={state.loadings[0]}
          onClick={() => enterLoading(0)}
          size="large"
          href="https://web.facebook.com/?_rdc=1&_rdr"
          ghost="false"
        >
          Click Submit
        </Button>
      </div>
      <MessageOutlined
        style={{ fontSize: "40px", color: "#08c" }}
        theme="outlined"
      />

      <div className="text-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </p>
        <Divider orientation="left" dashed="true">
          Text
        </Divider>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </p>
        <Divider orientation="left">Left Text</Divider>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </p>
        <Divider orientation="left" dashed="true">
          Right Text
        </Divider>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </p>
        <Space direction="horizontal" size="large">
          Space
          <Button type="primary">Button</Button>
          <Upload>
            <Button>
              <UploadOutlined /> Click to Upload
            </Button>
          </Upload>
          <Popconfirm
            title="Are you sure delete this task?"
            okText="Yes"
            cancelText="No"
          >
            <Button>Confirm</Button>
          </Popconfirm>
        </Space>
        <Space direction="vertical">
          <Card title="Card" style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card title="Card" style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Space>
        <br />
        <br />
        <div className="breadcrum_lign">
          <Breadcrumb>
            <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Component</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item overlay={menu}>
              <a href="">General</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Button</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div></div>
      </div>
      <div>
        <div style={{ height: "40vh", padding: 8 }} className="back_to_content">
          <p>
            Ant Design, a design language for background applications, is
            refined by Ant UED Team. Ant Design, a design language for
            background applications , is refined by Ant UED Team. Ant Design, a
            design language for background applications, is refined by Ant UED
            Team. Ant Design, a design language for background applications,
            refined by Ant UED Team. Ant Design, a design language for
            background applications, is refined by Ant UED Team. Ant Design , a
            design language for background applications, is refined by Ant UED
            Team. Ant Design, a design language for background applications, is
            refined by Ant UED Team. Ant Design, a design language for
            background applications, is refined by Ant UED Team. Ant Design, a
            design language for background applications, is refined by Ant UED
            Team. Ant Design, a design language for background applications, is
            refined by Ant UED Team. Ant Design, a design language for
            background applications, is refined by Ant UED Team. Ant Design, a
            design language for background applications, is refined by Ant UED
            Team.
          </p>
        </div>
      </div>
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
    </React.Fragment>
  );
};

export default SeedsBoomb;
