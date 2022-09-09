import React from "react";
import { Avatar } from "antd";

export default function ProfileOwner({ githubApi, authLogin }) {
  const profileOwner = Object.values(githubApi).find((data) => data.owner.username === authLogin.isLogin).owner;

  return (
    <div>
      <h2>ProfileOwner</h2>
      {/* <p>{JSON.stringify(profileOwner)}</p> */}
      <Avatar size={150} src={profileOwner.avatar} />
      <h3>{profileOwner.name}</h3>
      <h5>{profileOwner.username}</h5>
    </div>
  );
}
