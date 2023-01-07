import { Link } from "react-router-dom";

import { Dropdown, Col, Avatar, Divider, Row } from "antd";
import { Calendar, Game, People } from "react-iconly";

import avatarImg from "../../../assets/images/default-profile.svg";

export default function HeaderUser() {
  const menu = (
    <div
      className="daru-border-radius daru-border-1 daru-border-color-black-40 daru-bg-black-0 daru-bg-dark-100 daru-border-color-dark-80 daru-p-24 daru-mt-12"
      style={{ width: 260 }}
    >
      <span className="daru-d-block h5 daru-text-color-black-100 daru-text-color-dark-0 daru-mb-8">
        Hello, Admin
      </span>

      {/* <Link
        to="/"
        className="daru-p1-body daru-text-color-primary-1 daru-text-color-dark-primary-2 daru-hover-text-color-primary-2"
      >
        View Profile
      </Link> */}

      <Divider className="daru-mb-16 daru-mt-6" />

      <Link to="/" className="daru-p1-body daru-text-color-danger-1">
        Logout
      </Link>
    </div>
  );

  return (
    <Col>
      <Dropdown overlay={menu} placement="bottomLeft">
        <Avatar src={avatarImg} size={40} className="daru-cursor-pointer" />
      </Dropdown>
    </Col>
  );
}
