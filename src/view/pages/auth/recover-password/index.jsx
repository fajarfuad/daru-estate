import React from "react";
import { Link } from "react-router-dom";

import { Row, Col, Form, Input, Button } from "antd";

import RightContent from "../rightContent";

export default function RecoverPassword() {
  return (
    <Row gutter={[32, 0]} className="daru-authentication-page">
      <RightContent />

      <Col md={12}>
        <Row className="daru-h-100" align="middle" justify="center">
          <Col
            xxl={11}
            xl={15}
            lg={20}
            md={20}
            sm={24}
            className="daru-px-sm-8 daru-pt-24 daru-pb-48"
          >
            <h1 className="daru-mb-sm-0">Recover Password</h1>
            <p className="daru-mt-sm-0 daru-mt-8 daru-text-color-black-60">
              We’ll e-mail you instructions on how to reset your password.
            </p>

            <Form
              layout="vertical"
              name="basic"
              className="daru-mt-sm-16 daru-mt-32"
            >
              <Form.Item label="E-mail :">
                <Input id="validating" placeholder="you@example.com" />
              </Form.Item>

              <Form.Item className="daru-mt-16 daru-mb-8">
                <Button block type="primary" htmlType="submit">
                  <Link to="/pages/authentication/reset-password">
                    Reset Password
                  </Link>
                </Button>
              </Form.Item>
            </Form>

            <div className="daru-form-info">
              <span className="daru-text-color-black-80 daru-text-color-dark-40 daru-caption daru-mr-4">
                Go back to
              </span>

              <Link
                to="/pages/authentication/login"
                className="daru-text-color-primary-1 daru-text-color-dark-primary-2 daru-caption"
              >
                Login
              </Link>
            </div>

            <div className="daru-other-links daru-mt-24">
              <a
                href="#"
                className="daru-text-color-black-80 daru-text-color-dark-40"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="daru-text-color-black-80 daru-text-color-dark-40"
              >
                Term of use
              </a>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
