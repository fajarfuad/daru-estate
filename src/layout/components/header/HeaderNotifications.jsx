import React from "react";

import { useSelector } from "react-redux";

import { Button, Badge, Row, Col, Dropdown, Divider, Avatar } from "antd";
import { Notification, TickSquare, CloseSquare, Danger } from "react-iconly";

import avatarImg from "../../../assets/images/default-profile.svg";

export default function HeaderNotifications() {
  const direction = useSelector((state) => state.customise.direction);

  const notificationMenu = (
    <div
      className="daru-border-radius daru-border-1 daru-border-color-black-40 daru-bg-black-0 daru-bg-dark-100 daru-border-color-dark-80 daru-pt-24 daru-pb-18 daru-px-18 daru-mt-18"
      style={{ width: 288 }}
    >
      <Row align="middle" justify="space-between" className="daru-mb-18">
        <Col className="h5 daru-text-color-black-100 daru-text-color-dark-10 daru-text-color-dark-0 daru-mr-64">
          Notifications
        </Col>

        <Col className="daru-bg-color-primary-1 daru-border-radius-full daru-badge-text daru-text-color-black-0 daru-py-4 daru-px-6 daru-ml-24">
          4 New
        </Col>
      </Row>

      <Divider className="daru-my-4" />

      <div
        className="daru-overflow-y-auto daru-px-10"
        style={{ maxHeight: 300, marginRight: -10, marginLeft: -10 }}
      >
        <Row
          align="middle"
          className="daru-cursor-pointer daru-border-radius daru-transition daru-hover-bg-primary-4 daru-hover-bg-dark-80 daru-py-8 daru-px-10"
          style={{ marginLeft: -10, marginRight: -10 }}
        >
          <Col className="daru-mr-8">
            <Avatar
              size={38}
              src={avatarImg}
              className="daru-d-flex-center-full"
            />
          </Col>

          <Col>
            <span className="daru-d-block daru-w-100 daru-mb-4 daru-font-weight-500 daru-p1-body">
              New message received 💌
            </span>

            <span className="daru-d-block daru-badge-text daru-font-weight-400 daru-text-color-black-60 daru-text-color-dark-40">
              24 unread messages.
            </span>
          </Col>
        </Row>

        <Divider className="daru-my-4" />

        <Row
          align="middle"
          className="daru-cursor-pointer daru-border-radius daru-transition daru-hover-bg-primary-4 daru-hover-bg-dark-80 daru-py-8 daru-px-10"
          style={{ marginLeft: -10, marginRight: -10 }}
        >
          <Col className="daru-mr-8">
            <Avatar
              size={38}
              icon={
                <TickSquare size={16} className="daru-text-color-success-1" />
              }
              className="daru-d-flex-center-full daru-bg-success-4"
            />
          </Col>

          <Col>
            <span className="daru-d-block daru-w-100 daru-mb-4 daru-font-weight-500 daru-p1-body">
              Congratulations team 🎉
            </span>

            <span className="daru-d-block daru-badge-text daru-font-weight-400 daru-text-color-black-60 daru-text-color-dark-40">
              You have 12 new sales!
            </span>
          </Col>
        </Row>

        <Divider className="daru-my-4" />

        <Row
          align="middle"
          className="daru-cursor-pointer daru-border-radius daru-transition daru-hover-bg-primary-4 daru-hover-bg-dark-80 daru-py-8 daru-px-10"
          style={{ marginLeft: -10, marginRight: -10 }}
        >
          <Col className="daru-mr-8">
            <Avatar
              size={38}
              icon={
                <CloseSquare size={16} className="daru-text-color-danger-1" />
              }
              className="daru-d-flex-center-full daru-bg-danger-4"
            />
          </Col>

          <Col>
            <span className="daru-d-block daru-w-100 daru-mb-4 daru-font-weight-500 daru-p1-body">
              Network Error ⛔️
            </span>

            <span className="daru-d-block daru-badge-text daru-font-weight-400 daru-text-color-black-60 daru-text-color-dark-40">
              Operation couldn’t be completed
            </span>
          </Col>
        </Row>

        <Divider className="daru-my-4" />

        <Row
          align="middle"
          className="daru-cursor-pointer daru-border-radius daru-transition daru-hover-bg-primary-4 daru-hover-bg-dark-80 daru-py-8 daru-px-10"
          style={{ marginLeft: -10, marginRight: -10 }}
        >
          <Col className="daru-mr-8">
            <Avatar
              size={38}
              icon={<Danger size={16} className="daru-text-color-warning-1" />}
              className="daru-d-flex-center-full daru-bg-warning-4"
            />
          </Col>

          <Col>
            <span className="daru-d-block daru-w-100 daru-mb-4 daru-font-weight-500 daru-p1-body">
              Disk Utility 💥
            </span>

            <span className="daru-d-block daru-badge-text daru-font-weight-400 daru-text-color-black-60 daru-text-color-dark-40">
              You have not enough disk capacity
            </span>
          </Col>
        </Row>
      </div>

      <Divider className="daru-my-4" />

      <Button
        type="text"
        block
        ghost
        className="daru-text-color-primary-1 daru-text-color-dark-primary-2 daru-fill-primary-1 daru-fill-dark-primary-2 daru-hover-bg-primary-4 daru-hover-bg-dark-80 daru-mt-4"
        icon={
          <svg
            className="daru-mr-10"
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.8335 3.00004H14.1668V4.33337H12.8335V13C12.8335 13.1769 12.7633 13.3464 12.6382 13.4714C12.5132 13.5965 12.3436 13.6667 12.1668 13.6667H2.8335C2.65669 13.6667 2.48712 13.5965 2.36209 13.4714C2.23707 13.3464 2.16683 13.1769 2.16683 13V4.33337H0.833496V3.00004H4.16683V1.00004C4.16683 0.82323 4.23707 0.65366 4.36209 0.528636C4.48712 0.403612 4.65669 0.333374 4.8335 0.333374H10.1668C10.3436 0.333374 10.5132 0.403612 10.6382 0.528636C10.7633 0.65366 10.8335 0.82323 10.8335 1.00004V3.00004ZM11.5002 4.33337H3.50016V12.3334H11.5002V4.33337ZM5.50016 6.33337H6.8335V10.3334H5.50016V6.33337ZM8.16683 6.33337H9.50016V10.3334H8.16683V6.33337ZM5.50016 1.66671V3.00004H9.50016V1.66671H5.50016Z" />
          </svg>
        }
      >
        Clear all notifications
      </Button>
    </div>
  );

  return (
    <Col className="daru-d-flex-center daru-mr-sm-12 daru-mr-16">
      <Button
        type="text"
        icon={
          <Dropdown overlay={notificationMenu} placement="bottomRight">
            <div className="daru-position-relative">
              <div
                className="daru-position-absolute"
                style={
                  direction == "rtl"
                    ? { left: -5, top: -5 }
                    : { right: -5, top: -5 }
                }
              >
                <Badge dot status="processing" />
              </div>

              <Notification set="curved" className="daru-text-color-black-60" />
            </div>
          </Dropdown>
        }
      />
    </Col>
  );
}
