import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getOwner, handleActionGetOwner, getRepositories, handleActionGetRepositories } from "./actions/githubApi";
import { handleActionSetIsLogin } from "./actions/authLogin";
import "./App.css";
import "antd/dist/antd.css";
import { Row, Col, Typography, Input, Spin } from "antd";
import ContentContainer from "./components/ContentContainer";

function App() {
  const dispatch = useDispatch();
  const { Title } = Typography;
  const { Search } = Input;

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData("hikmanisyariful");
  }, []);

  const fetchData = async (username) => {
    try {
      setIsLoading(true);
      const owner = await getOwner(username);
      dispatch(handleActionGetOwner(owner));
      const repositories = await getRepositories(owner.login);
      dispatch(handleActionGetRepositories(repositories, owner.login));
      dispatch(handleActionSetIsLogin(owner.login));
      setIsLoading(false);
    } catch (error) {
      alert("error");
      setIsLoading(false);
    }
  };

  const onSearch = (value) => {
    dispatch(handleActionSetIsLogin(""));
    if (value) {
      fetchData(value);
    } else {
      fetchData("hikmanisyariful");
    }
  };

  return (
    <div className="App">
      <Row style={{ textAlign: "center", marginTop: 30 }}>
        <Col span={5} offset={1}>
          <Title level={1}>Profile Owner</Title>
        </Col>
        <Col span={5} offset={10}>
          <Search placeholder="Enter your username Github" onSearch={onSearch} enterButton allowClear />
        </Col>
      </Row>

      {/* {JSON.stringify(authLogin)} */}
      <Spin spinning={isLoading} style={{ marginTop: 200 }}>
        <ContentContainer />
      </Spin>
    </div>
  );
}

export default App;
