import React from "react";
import { Col, Divider, Row } from "antd";
import ProfileOwner from "./ProfileOwner";

export default function ContentContainer() {
  return (
    <>
      <Divider />
      <Row>
        <Col span={8}>
          <ProfileOwner />
        </Col>
        <Col span={16}>Repositories</Col>
      </Row>
    </>
  );
}
