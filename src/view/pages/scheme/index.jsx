import React from "react";

import { Row, Col } from "antd";

import PageTitle from "../../../layout/components/content/page-title";

export default function Page() {
  return (
    <Row gutter={[32, 32]}>
      <PageTitle pageTitle="Skema" />
    </Row>
  );
}
