import React, { useState } from "react";

import { useSelector } from "react-redux";

import { Layout, Row, Col } from "antd";

import Sidebar from "./components/menu/Sidebar";
import MenuHeader from "./components/header";
import MenuFooter from "./components/footer";
import CustomiseTheme from "./components/customise";
import ScrollTop from "./components/scroll-to-top";

const { Content } = Layout;

export default function VerticalLayout(props) {
  const { children } = props;

  const [visible, setVisible] = useState(false);

  // Redux
  const customise = useSelector((state) => state.customise);

  return (
    <Layout className="daru-app-layout">
      <Sidebar visible={visible} setVisible={setVisible} />

      <Layout className="daru-bg-color-dark-90">
        <MenuHeader setVisible={setVisible} />

        <Content className="daru-content-main">
          <Row justify="center">
            {customise.contentWidth == "full" && (
              <Col span={24}>{children}</Col>
            )}

            {customise.contentWidth == "boxed" && (
              <Col xxl={20} xl={22} span={24}>
                {children}
              </Col>
            )}
          </Row>
        </Content>

        <MenuFooter />
      </Layout>

      <CustomiseTheme />

      <ScrollTop />
    </Layout>
  );
}
