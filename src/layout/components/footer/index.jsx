import { Col, Layout, Row } from "antd";

import themeConfig from "../../../configs/themeConfig.jsx";

export default function MenuFooter() {
  const { Footer } = Layout;

  return (
    <Footer className="daru-bg-color-black-10 daru-bg-color-dark-100">
      <Row align="middle" justify="space-between">
        <Col md={12} span={24}>
          <p className="daru-badge-text daru-mb-0 daru-text-color-dark-30">
            Copyright ©2023 {themeConfig.company}, All rights Reserved
          </p>
        </Col>

        <Col
          md={12}
          span={24}
          className="daru-mt-sm-8 daru-text-sm-center daru-text-right"
        >
          <span className="daru-badge-text daru-text-color-dark-30">
            🥁 Version: {themeConfig.version}
          </span>
        </Col>
      </Row>
    </Footer>
  );
}
