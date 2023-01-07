import React from "react";

import { useSelector } from "react-redux";

import { Row, Col } from "antd";

import bg from "../../../assets/images/pages/authentication/authentication-bg.svg";
import bgDark from "../../../assets/images/pages/authentication/authentication-bg-dark.svg";
import logo from "../../../assets/images/logo/logo-vector-blue.svg";
import logoDark from "../../../assets/images/logo/logo-vector.svg";

export default function RightContent() {
  // Redux
  const theme = useSelector((state) => state.customise.theme);

  return (
    <Col
      lg={12}
      sm={0}
      xs={0}
      className="daru-bg-color-primary-4 daru-bg-color-dark-90 daru-position-relative"
      style={{ minHeight: "100vh" }}
    >
      <Row className="daru-image-row  daru-px-sm-8 daru-px-md-16 daru-pb-sm-32 daru-pt-md-64 daru-pt-md-32">
        <Col span={24}>
          <Row align="middle" justify="center" className="daru-h-100">
            <Col
              md={20}
              span={24}
              className="daru-bg-item daru-text-center daru-mb-md-32"
            >
              <img
                src={theme == "light" ? bg : bgDark}
                alt="Background Image"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}
