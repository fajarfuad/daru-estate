import React from "react";
import { Link } from "react-router-dom";

import { Divider, Avatar, Row, Col } from "antd";
import { RiSettings3Line } from "react-icons/ri";

import avatar from "../../../../assets/images/default-profile.svg";

export default function MenuFooter(props) {
  return props.collapsed === false ? (
    <Row
      className="daru-sidebar-footer daru-pb-24 daru-px-24 daru-bg-color-dark-100"
      align="middle"
      justify="space-between"
    >
      <Divider className="daru-border-color-black-20 daru-border-color-dark-70 daru-mt-0" />

      <Col>
        <Row align="middle">
          <Avatar size={36} src={avatar} className="daru-mr-8" />

          <div>
            <span className="daru-d-block daru-text-color-black-100 daru-text-color-dark-0 daru-p1-body">
              Admin
            </span>

            <Link
              to="#"
              className="daru-badge-text daru-text-color-dark-30"
              onClick={props.onClose}
            >
              Lihat Profil
            </Link>
          </div>
        </Row>
      </Col>

      <Col>
        <Link to="#" onClick={props.onClose}>
          <RiSettings3Line
            className="remix-icon daru-text-color-black-100 daru-text-color-dark-0"
            size={24}
          />
        </Link>
      </Col>
    </Row>
  ) : (
    <Row
      className="daru-sidebar-footer daru-pt-16 daru-mb-16 daru-bg-color-dark-100"
      align="middle"
      justify="center"
    >
      <Col>
        <Link to="#" onClick={props.onClose}>
          <Avatar size={36} src={avatar} />
        </Link>
      </Col>
    </Row>
  );
}
