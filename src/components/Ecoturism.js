import React, { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";
import {
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Upload,
  Typography
} from "antd";

import ImgCrop from "antd-img-crop";
import advertised from "../data/advertised.json";
import Footer from "./Footer";

const { Paragraph } = Typography;

const displayLoading = () => {
  const loading = [];
  for (let index = 0; index < 4; index++) {
    loading.push(
      <div className="column blur" key={index}>
        <div className="image-card">
          <ContentLoader
            height={150}
            width={160}
            speed={2}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
          >
            <rect x="0" y="-7" rx="0" ry="0" width="500" height="100" />
            <rect x="0" y="105" rx="0" ry="0" width="118" height="12" />
            <rect x="0" y="126" rx="0" ry="0" width="118" height="14" />
          </ContentLoader>
        </div>
      </div>
    );
  }
  return loading;
};

/*Login button */
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 5 }
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!"
  },
  number: {
    range: "${label} must be between ${min} and ${max}"
  }
};

const Ecoturism = () => {
  //content loader
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.setTimeout(() => setIsLoading(true), 1000);
  }, []);

  //button pop-up
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("Content of the modal");

  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  // button login
  const onFinish = values => {
    console.log(values);
  };

  //upload picture in eco
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    }
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  // const [fileList, setFileList] = React.useState({ fileList: [] });
  // const [uploading, setUploading] = React.useState(false);

  // const handleUpload = () => {
  //   setFileList(({ fileList }) => {
  //     const newFileList = [...fileList];
  //     newFileList[index] = true;
  //     return {
  //       fileList: newFileList
  //     };
  //   });
  // };
  //   const formData = new FormData();
  //   fileList.forEach(file => {
  //     formData.append("files[]", file);
  //   });

  //   setUploading({
  //     uploading: true
  //   });

  //   // You can use any AJAX library you like
  //   reqwest({
  //     url: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  //     method: "post",
  //     processData: false,
  //     data: formData,
  //     success: () => {
  //       setFileList({
  //         fileList: [],
  //         uploading: false
  //       });
  //       message.success("upload successfully.");
  //     },
  //     error: () => {
  //       setUploading({
  //         uploading: false
  //       });
  //       message.error("upload failed.");
  //     }
  //   });
  // const props = {
  //   onRemove: file => {
  //     this.setState(state => {
  //       const index = state.fileList.indexOf(file);
  //       const newFileList = state.fileList.slice();
  //       newFileList.splice(index, 1);
  //       return {
  //         fileList: newFileList
  //       };
  //     });
  //   },
  //   beforeUpload: file => {
  //     uploading(state => ({
  //       fileList: [...state.fileList, file]
  //     }));
  //     return false;
  //   },
  //   fileList
  // };

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
      <div className="ui container">
        <center>
          <h1 className="ecoturism">Our Detail</h1>
          <div className="ui stackable four column grid">
            {isLoading
              ? advertised.map(res => (
                  <div className="column" key={res.id}>
                    <div className="image-card">
                      <img
                        src={res.logo}
                        className="ui fluid image"
                        alt={res.name}
                      />
                      <h2>{res.name}</h2>
                      <div className="shopHere">
                        <a
                          href={res.location}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p>Click here</p>
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              : displayLoading()}
          </div>
        </center>
        <br />
        <div className="paragraph_koompi_eco1">
          <p>
            Koompi mission is build and provide tools for the next generation of
            engineers,
            <br /> problem solvers and discoverers.
          </p>
          <h2>Natural</h2>
          <p>
            KOOMPI is a practical, affordable and effective entry-level notebook
            computer
            <br /> specifically designed for performing all daily tasks required
            for work and school.
            <br />
            <br />
            We&apos;ve created a customized operating system of our own called
            PionuxOS based on
            <br />
            the well-known open-source Linux software.
            <br />
          </p>
        </div>
      </div>
      <Button className="buttton_click" type="primary" onClick={showModal}>
        clicked this button
      </Button>
      <Modal
        width={700}
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
      <div className="paragraph_koompi_eco2">
        <p>
          Koompi mission is build and provide tools for the next generation of
          engineers,
          <br /> problem solvers and discoverers.
        </p>
        <h2>Natural</h2>
        <p>
          KOOMPI is a practical, affordable and effective entry-level notebook
          computer
          <br /> specifically designed for performing all daily tasks required
          for work and school.
          <br />
          <br />
          We&apos;ve created a customized operating system of our own called
          PionuxOS based on
          <br />
          the well-known open-source Linux software.
          <br />
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="form_login">
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          layout="horizontal"
          size="large"
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[{ type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "age"]}
            label="Age"
            rules={[{ type: "number", min: 0, max: 99 }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name={["user", "website"]} label="Website">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "introduction"]} label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="upload_pic_rotate">
        <ImgCrop rotate>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 5 && "+ Upload"}
          </Upload>
        </ImgCrop>
      </div>
      <div className="paragraph-typography">
        {/* <Paragraph ellipsis>
          Ant Design, a design language for background applications, is refined
          by Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by
          Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by
          Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by
          Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team.
        </Paragraph> */}

        <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: "more" }}>
          Ant Design, a design language for background applications, is refined
          by Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by
          Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by
          Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by
          Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team.
        </Paragraph>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Ecoturism;
