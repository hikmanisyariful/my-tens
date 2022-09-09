import React from "react";
import { useSelector } from "react-redux";
import { Col, Divider, Row } from "antd";
import ProfileOwner from "./ProfileOwner";

export default function ContentContainer() {
  const githubApi = useSelector((state) => state.githubApi);
  const authLogin = useSelector((state) => state.authLogin);

  return (
    <>
      <Divider />
      <Row>
        <Col span={8}>{authLogin.isLogin && <ProfileOwner githubApi={githubApi} authLogin={authLogin} />}</Col>
        <Col span={16}>Repositories</Col>
      </Row>
    </>
  );
}
