import React from "react";

import { Col, Row, Button } from "antd";
import { ArrowLeft } from "react-iconly";

export default function PageTitle(props) {
  const { pageTitle, pageText, backButton, children } = props;

  return (
    <Col span={24}>
      <Row>
        {backButton && (
          <Col>
            <Button
              type="text"
              onClick={backButton}
              shape="circle"
              className="daru-text-color-black-100"
            >
              <ArrowLeft set="light" />
            </Button>
          </Col>
        )}
        <Col span={24}>
          {pageTitle && <h2 className="daru-mb-8">{pageTitle}</h2>}
        </Col>
        <Col flex="auto" align="right">
          <Row span={24} justify="end">
            {children}
          </Row>
        </Col>

        <Col span={24}>
          {pageText && <p className="daru-mb-0 daru-p1-body">{pageText}</p>}
        </Col>
      </Row>
    </Col>
  );
}
