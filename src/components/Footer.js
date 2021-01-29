// import React from "react";
// import { Link } from "react-router-dom";
// import { Layout } from "antd";
// import socialLinks from "../data/socialLinks.json";

// const { Footer } = Layout;

// const footer = () => {
// return (
//     <>
//       <React.Fragment>
//         <center>
//           <Layout>
//             <Footer>
//               <div className="f-size">
//                 <p>Copyright 2020 &copy;Koompi.All rights reserved</p>
//                 <p className="koompi">Koompi Computer in Cambodia &reg;</p>
//                 <p className="privacy">
//                   <Link to="/privacy">Privacy</Link>
//                   <Link to="/feature">Feature</Link>
//                   <Link to="/about-us">About Us</Link>
//                   <Link to="/retailers">Description</Link>
//                   <Link to="/news">News</Link>
//                 </p>
//                 <br />
//                 <div className="footer_socail_media">
//                   {socialLinks.map(res => {
//                     return (
//                       <a
//                         href={res.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         key={res.id}
//                       >
//                         <img src={res.srcImage} alt={res.altImage} />
//                         &emsp;
//                       </a>
//                     );
//                   })}
//                 </div>
//               </div>
//             </Footer>
//           </Layout>
//         </center>
//       </React.Fragment>
//     </>
//   );
// };
// export default footer;


import React from "react";
import { Row, Col } from "antd";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <Row gutter={[100, 0]} className="footer-container">
          <Col xs={24} sm={24} md={12} lg={6}>
            <img
              alt="img"
              style={{ height: "40px" }}
              src="/icons/smallworld-logo.png"
            />
            <p style={{ marginTop: "20px", color: "rgb(179, 174, 174)" }}>
              We make this website for help people to know about new knowledge
              and find jobs
            </p>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6}>
            <h2 style={{ color: "#fff" }}>Information</h2>
            <div style={{ lineHeight: "30px" }}>
              <Link
                to="/about"
                style={{ color: "rgb(179, 174, 174)", fontWeight: "600" }}
              >
                About us
              </Link>
              <br></br>
              <Link
                to="/event"
                style={{ color: "rgb(179, 174, 174)", fontWeight: "600" }}
              >
                {" "}
                Event
              </Link>
              <br></br>
              <Link
                to="/knowledge"
                style={{ color: "rgb(179, 174, 174)", fontWeight: "600" }}
              >
                knowledge
              </Link>
              <br></br>
              <span style={{ color: "rgb(179, 174, 174)", fontWeight: "600" }}>
                Advertice
              </span>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6}>
            <h2 style={{ color: "#fff" }}>Help</h2>
            <div style={{ lineHeight: "30px" }}>
              <span style={{ color: "rgb(179, 174, 174)", fontWeight: "600" }}>
                Support
              </span>
              <br></br>
              <span style={{ color: "rgb(179, 174, 174)", fontWeight: "600" }}>
                {" "}
                Service
              </span>
              <br></br>
              <span style={{ color: "rgb(179, 174, 174)", fontWeight: "600" }}>
                Term & Condition
              </span>
              <br></br>
              <span style={{ color: "rgb(179, 174, 174)", fontWeight: "600" }}>
                Privercy Polocy
              </span>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6}>
            <h2 style={{ color: "#fff" }}>Contact Us</h2>
            <div style={{ display: "flex" }}>
              <img alt="img" style={{ width: "22px" }} src="/icons/phone.svg" />
              <span
                style={{
                  color: "rgb(179, 174, 174)",
                  fontWeight: "600",
                  paddingLeft: "12px"
                }}
              >
                (+855)15 436 404
              </span>
            </div>
            <br></br>
            <div style={{ display: "flex" }}>
              <img alt="img" style={{ width: "22px" }} src="/icons/mail.svg" />
              <span
                style={{
                  color: "rgb(179, 174, 174)",
                  fontWeight: "600",
                  paddingLeft: "12px"
                }}
              >
                radachroun@gmail.com
              </span>{" "}
            </div>
          </Col>
        </Row>
        <center style={{ marginTop: "20px" }}>
          {" "}
          <img
            alt="img"
            style={{ color: "red", height: "40px", paddingRight: "16px" }}
            src="/icons/facebook2.png"
          />
          <img
            alt="img"
            style={{ height: "40px", paddingRight: "16px" }}
            src="/icons/instagram.svg"
          />
          <img
            alt="img"
            style={{ height: "40px", paddingRight: "16px" }}
            src="/icons/twitter1.svg"
          />
          <img
            alt="img"
            src="https://img.icons8.com/fluent/48/000000/telegram-app.png"
          />
          <div style={{ marginTop: "20px" }}>
            <h3 style={{ color: "rgba(211, 203, 203, 0.85)" }}>
              Smallworld &reg; 2020 All Rights Reserved
            </h3>
            <br /> <br /> <br />
          </div>
        </center>
      </div>
    </React.Fragment>
  );
};

export default Footer;
