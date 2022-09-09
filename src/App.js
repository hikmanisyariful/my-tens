import React from "react";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const githubApi = useSelector((state) => state.githubApi);

  return (
    <div className="App">
      <h1>github API</h1>
      {JSON.stringify(githubApi)}
    </div>
  );
}

export default App;
