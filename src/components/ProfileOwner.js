import React from "react";
import { useSelector } from "react-redux";

export default function ProfileOwner() {
  const githubApi = useSelector((state) => state.githubApi);
  const authLogin = useSelector((state) => state.authLogin);

  const profileOwner = Object.values(githubApi).find((data) => data.owner.username === authLogin.isLogin).owner;

  return (
    <div>
      <h1>ProfileOwner</h1>
      <p>{JSON.stringify(profileOwner)}</p>
    </div>
  );
}