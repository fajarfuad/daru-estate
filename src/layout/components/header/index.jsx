import React, { useRef, useState } from "react";

import { useSelector } from "react-redux";

import { Layout, Button, Row, Col } from "antd";
import { RiCloseLine, RiMenuFill } from "react-icons/ri";
import { Search } from "react-iconly";

import HeaderSearch from "./HeaderSearch";
import HeaderUser from "./HeaderUser";
import HeaderNotifications from "./HeaderNotifications";
import HeaderText from "./HeaderText";

const { Header } = Layout;

export default function MenuHeader(props) {
  const { setVisible } = props;

  const [searchHeader, setSearchHeader] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  // Redux
  const customise = useSelector((state) => state.customise);

  // Focus
  const inputFocusRef = useRef(null);
  const inputFocusProp = {
    ref: inputFocusRef,
  };

  // Search Active
  setTimeout(() => setSearchActive(searchHeader), 100);

  const searchClick = () => {
    setSearchHeader(true);

    setTimeout(() => {
      inputFocusRef.current.focus({
        cursor: "start",
      });
    }, 200);
  };

  // Mobile Sidebar
  const showDrawer = () => {
    setVisible(true);
    setSearchHeader(false);
  };

  // Children
  const headerChildren = () => {
    return (
      <Row
        className="daru-w-100 daru-position-relative"
        align="middle"
        justify="space-between"
      >
        <Col className="daru-mobile-sidebar-button daru-mr-24">
          <Button
            className="daru-mobile-sidebar-button"
            type="text"
            onClick={showDrawer}
            icon={
              <RiMenuFill
                size={24}
                className="remix-icon daru-text-color-black-80 daru-text-color-dark-30"
              />
            }
          />
        </Col>

        <Col
          flex="1"
          style={{ display: !searchHeader ? "none" : "block" }}
          className={`daru-pr-md-0 daru-pr-16 daru-header-search ${
            searchActive && "daru-header-search-active"
          }`}
        >
          <HeaderSearch
            inputFocusProp={inputFocusProp}
            setSearchHeader={setSearchHeader}
          />
        </Col>

        {!searchHeader && <HeaderText />}

        <Col>
          <Row align="middle">
            <Col className="daru-d-flex-center daru-mr-4">
              {!searchHeader ? (
                <Button
                  type="text"
                  icon={
                    <Search set="curved" className="daru-text-color-black-60" />
                  }
                  onClick={() => searchClick()}
                />
              ) : (
                <Button
                  type="text"
                  icon={
                    <RiCloseLine
                      size={24}
                      className="daru-text-color-black-60"
                    />
                  }
                  onClick={() => setSearchHeader(false)}
                />
              )}
            </Col>

            {/* <HeaderNotifications /> */}

            <HeaderUser />
          </Row>
        </Col>
      </Row>
    );
  };

  return (
    <Header>
      <Row justify="center" className="daru-w-100">
        {customise.contentWidth == "full" && (
          <Col span={24}>{headerChildren()}</Col>
        )}

        {customise.contentWidth == "boxed" && (
          <Col xxl={20} xl={22} span={24}>
            {headerChildren()}
          </Col>
        )}
      </Row>
    </Header>
  );
}
