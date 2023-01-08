import React, { useEffect } from "react";

import { Card, Col, Row, Button } from "antd";

import PageTitle from "../../../layout/components/content/page-title";
import themeConfig from "../../../configs/themeConfig";

export default function Home() {
  useEffect(() => {
    document.title = "Dashboard - " + themeConfig.appname;
  }, []);
  return (
    <Row gutter={[32, 32]}>
      <Col span={24}>
        <PageTitle pageTitle="Selamat Datang, Admin👋" />
      </Col>

      {/* <Col span={24}>
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <Card className="daru-border-color-black-40 daru-border-color-dark-80">
              <h4>Let's get started 🚀</h4>

              <Row>
                <Col md={12} span={24}></Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Col> */}
    </Row>
  );
}
