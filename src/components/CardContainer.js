import React from "react";
import { Card, Row } from "antd";

export default function CardContainer({ githubApi, authLogin }) {
  const repositories = Object.values(githubApi).find((data) => data.owner.username === authLogin.isLogin).repositories;

  return (
    <div>
      {repositories.map((repo) => {
        return (
          <Card style={{ marginBottom: "10px" }}>
            <h2>{repo.name}</h2>
            <p>{repo.description ? repo.description : ""}</p>
            <p>{repo.language ? repo.language : ""}</p>
          </Card>
        );
      })}
    </div>
  );
}
