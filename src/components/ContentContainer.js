import React from "react";
import { useSelector } from "react-redux";
import { Col, Divider, Row } from "antd";
import ProfileOwner from "./ProfileOwner";
import CardContainer from "./CardContainer";

export default function ContentContainer() {
  const githubApi = useSelector((state) => state.githubApi);
  const authLogin = useSelector((state) => state.authLogin);

  return (
    <>
      <Divider />
      <Row style={{ margin: "30px 50px 50px 50px" }}>
        <Col span={5} offset={1}>
          {authLogin.isLogin && <ProfileOwner githubApi={githubApi} authLogin={authLogin} />}
        </Col>
        <Col span={15}>{authLogin.isLogin && <CardContainer githubApi={githubApi} authLogin={authLogin} />}</Col>
      </Row>
    </>
  );
}
