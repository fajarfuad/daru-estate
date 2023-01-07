import React, { useState, createElement, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { Layout, Button, Row, Col } from "antd";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";

import logoSmall from "../../../assets/images/logo/logo-small.svg";

import MenuLogo from "./logo";
import MenuFooter from "./footer";
import MenuItem from "./item";
import MenuMobile from "./mobile";

const { Sider } = Layout;

export default function Sidebar(props) {
  const { visible, setVisible } = props;

  // Redux
  const customise = useSelector((state) => state.customise);

  // Collapsed
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (customise.sidebarCollapsed) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [customise]);

  // Location
  const location = useLocation();
  const { pathname } = location;

  // Mobile Sidebar
  const onClose = () => {
    setVisible(false);
  };

  // Menu
  function toggle() {
    setCollapsed(!collapsed);
  }

  const trigger = createElement(collapsed ? RiMenuUnfoldLine : RiMenuFoldLine, {
    className: "trigger",
    onClick: toggle,
  });

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={256}
      className="daru-sidebar daru-bg-color-black-0 daru-bg-color-dark-100"
    >
      <Row
        className="daru-mr-12 daru-ml-24 daru-mt-24"
        align="bottom"
        justify="space-between"
      >
        <Col>{collapsed === false ? <MenuLogo onClose={onClose} /> : ""}</Col>

        {customise.sidebarCollapseButton && (
          <Col className="daru-pr-0">
            <Button
              icon={trigger}
              type="text"
              className="daru-float-right daru-text-color-dark-0"
            ></Button>
          </Col>
        )}

        {collapsed !== false && (
          <Col className="daru-mt-8">
            <Link to="/" onClick={onClose}>
              <img className="daru-logo" src={logoSmall} alt="logo" />
            </Link>
          </Col>
        )}
      </Row>

      <MenuItem onClose={onClose} />

      <MenuMobile onClose={onClose} visible={visible} />
    </Sider>
  );
}
