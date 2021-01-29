import React from "react";
import { Row, Col } from "antd";
import MemberState from "./State/member";
import members from "../data/members.json";
import Footer from "./Footer";
import SubNavbar from "./State/SubNavbar";

const sideTitle = (title, desc) => {
  return (
    <div className="two-column-as-row">
      <div className="feature-padding-text">
        <p className="contentTitle">{title}</p>
        <p className="contentDesc">{desc}</p>
      </div>
    </div>
  );
};

const sideImage = image => {
  return (
    <div className="feature-padding-image">
      <img src={image} alt={image} />
    </div>
  );
};

const NaturalFarming = () => {
  return (
    <div className="sideDesc-body">
      <SubNavbar />
      <Row>
        <Col span={2} push={14}>
          {sideImage("/pic/screen.png")}
        </Col>
        <Col span={12}>
          {sideTitle(
            "Koompi Computer",
            `This is the computer of koompi and the powerful of this  computer are confortale than before.With A14 Bionic, you have the power to bring your ideas to life. Shoot a 4K video, then edit it right on iPad Air. Use the second‑generation Apple Pencil to paint and illustrate with dynamic brushes and subtle shading.1 And with the enhanced graphics and machine learning performance of A14 Bionic, you can unlock new creative possibilities with photo editing, music creation, and more.With A14 Bionic, you have the power to bring your ideas to life. Shoot a 4K video, then edit it right on iPad Air. Use the second‑generation Apple Pencil to paint and illustrate with dynamic brushes and subtle shading.1 And with the enhanced graphics and machine learning performance of A14 Bionic, you can unlock new creative possibilities with photo editing, music creation, and more.`
          )}
        </Col>
      </Row>
      <Row>
        <Col span={2} push={14}>
          {sideImage("/pic/screen.png")}
        </Col>
        <Col span={12}>
          {sideTitle(
            "Koompi Computer",
            `This is the computer of koompi and the powerful of this  computer are confortale than before.With A14 Bionic, you have the power to bring your ideas to life. Shoot a 4K video, then edit it right on iPad Air. Use the second‑generation Apple Pencil to paint and illustrate with dynamic brushes and subtle shading.1 And with the enhanced graphics and machine learning performance of A14 Bionic, you can unlock new creative possibilities with photo editing, music creation, and more.With A14 Bionic, you have the power to bring your ideas to life. Shoot a 4K video, then edit it right on iPad Air. Use the second‑generation Apple Pencil to paint and illustrate with dynamic brushes and subtle shading.1 And with the enhanced graphics and machine learning performance of A14 Bionic, you can unlock new creative possibilities with photo editing, music creation, and more.`
          )}
        </Col>
      </Row>
      <Row>
        <Col span={2} push={14}>
          {sideImage("/pic/screen.png")}
        </Col>
        <Col span={12}>
          {sideTitle(
            "Koompi Computer",
            `This is the computer of koompi and the powerful of this  computer are confortale than before.With A14 Bionic, you have the power to bring your ideas to life. Shoot a 4K video, then edit it right on iPad Air. Use the second‑generation Apple Pencil to paint and illustrate with dynamic brushes and subtle shading.1 And with the enhanced graphics and machine learning performance of A14 Bionic, you can unlock new creative possibilities with photo editing, music creation, and more.With A14 Bionic, you have the power to bring your ideas to life. Shoot a 4K video, then edit it right on iPad Air. Use the second‑generation Apple Pencil to paint and illustrate with dynamic brushes and subtle shading.1 And with the enhanced graphics and machine learning performance of A14 Bionic, you can unlock new creative possibilities with photo editing, music creation, and more.`
          )}
        </Col>
      </Row>
      <Row>
        <Col span={2} push={14}>
          {sideImage("/pic/screen.png")}
        </Col>
        <Col span={12}>
          {sideTitle(
            "Koompi Computer",
            `This is the computer of koompi and the powerful of this  computer are confortale than before.With A14 Bionic, you have the power to bring your ideas to life. Shoot a 4K video, then edit it right on iPad Air. Use the second‑generation Apple Pencil to paint and illustrate with dynamic brushes and subtle shading.1 And with the enhanced graphics and machine learning performance of A14 Bionic, you can unlock new creative possibilities with photo editing, music creation, and more.With A14 Bionic, you have the power to bring your ideas to life. Shoot a 4K video, then edit it right on iPad Air. Use the second‑generation Apple Pencil to paint and illustrate with dynamic brushes and subtle shading.1 And with the enhanced graphics and machine learning performance of A14 Bionic, you can unlock new creative possibilities with photo editing, music creation, and more.`
          )}
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <MemberState members={members} />
      <Footer />
    </div>
  );
};

export default NaturalFarming;
