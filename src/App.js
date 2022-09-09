import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOwner, handleActionGetOwner, getRepositories, handleActionGetRepositories } from "./actions/githubApi";
import { handleActionSetIsLogin } from "./actions/authLogin";
import "./App.css";
import "antd/dist/antd.css";
import { Row } from "antd";
import ContentContainer from "./components/ContentContainer";

function App() {
  const dispatch = useDispatch();

  const githubApi = useSelector((state) => state.githubApi);
  const authLogin = useSelector((state) => state.authLogin);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      const owner = await getOwner("hikmanisyariful");
      dispatch(handleActionGetOwner(owner));
      dispatch(handleActionSetIsLogin(owner.login));
      const repositories = await getRepositories(owner.login);
      dispatch(handleActionGetRepositories(repositories, owner.login));
    } catch (error) {
      console.log("THIS ERROR", error);
      alert("error");
    }
  };

  return (
    <div className="App">
      <Row>
        <h1>github API</h1>
      </Row>

      {JSON.stringify(authLogin)}
      <ContentContainer />
    </div>
  );
}

export default App;
