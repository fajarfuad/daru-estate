import React from "react";
import { Link } from "react-router-dom";

import { Row, Col, Button } from "antd";

import img from "../../../assets/images/pages/error/404.svg";
import themeConfig from "../../../configs/themeConfig";

export default function Error500() {
  return (
    <Row className="daru-bg-color-primary-4 daru-bg-color-dark-90 daru-text-center">
      <Col className="daru-error-content daru-py-32" span={24}>
        <Row className="daru-h-100" align="middle" justify="center">
          <Col>
            <div className="daru-position-relative daru-mt-sm-0 daru-mt-64 daru-mb-32">
              <div className="daru-error-content-circle daru-bg-dark-100"></div>

              <img
                className="daru-position-relative daru-d-block daru-m-auto"
                src={img}
                width={400}
                alt="500"
              />
            </div>

            <h1 className="daru-error-content-title daru-mb-sm-0 daru-mb-8 daru-font-weight-500">
              500 - Oops, Server Error!
            </h1>

            <p className="daru-mb-32 daru-p1-body">You can go back home.</p>

            <Link to="/">
              <Button type="primary">Back to Home</Button>
            </Link>
          </Col>
        </Row>
      </Col>

      <Col span={24} className="daru-py-24">
        <p className="daru-mb-0 daru-badge-text">
          COPYRIGHT ©2022 {themeConfig.company}, All rights Reserved
        </p>
      </Col>
    </Row>
  );
}
