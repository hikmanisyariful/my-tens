import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOwner, handleActionGetOwner, getRepositories, handleActionGetRepositories } from "./actions/githubApi";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const githubApi = useSelector((state) => state.githubApi);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      const owner = await getOwner("hikmanisyariful");
      dispatch(handleActionGetOwner(owner));
      const repositories = await getRepositories(owner.login);
      dispatch(handleActionGetRepositories(repositories, owner.login));
    } catch (error) {
      console.log("THIS ERROR", error);
      alert("error");
    }
  };

  return (
    <div className="App">
      <h1>github API</h1>
      {JSON.stringify(githubApi)}
    </div>
  );
}

export default App;
