import React from "react";
import { Avatar, Typography } from "antd";

export default function ProfileOwner({ githubApi, authLogin }) {
  const { Title } = Typography;

  const profileOwner = Object.values(githubApi).find((data) => data.owner.username === authLogin.isLogin).owner;

  return (
    <div className="">
      <Title level={2} style={{ textAlign: "center", marginBottom: 30 }}>
        Profile Owner
      </Title>
      <div className="profile-owner">
        <Avatar maxStyle="profile-owner" size={150} src={profileOwner.avatar} />
      </div>
      <Title level={3} style={{ textAlign: "center", marginTop: 20 }}>
        {profileOwner.name}
      </Title>
      <Title level={5} style={{ textAlign: "center" }}>
        {profileOwner.username}
      </Title>
    </div>
  );
}
