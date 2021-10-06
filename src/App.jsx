import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import styled from "styled-components";
import GlobalStyle from "./styles/global";

const Container = styled.main``;

const App = () => {
  const [task, setTask] = useState([]);

  const handleNewTask = (description) => {
    const newTask = [...task, { id: uuidv4(), description, completed: false }];
  };
  const handleCompletedTask = () => {};
  const handleDeleteCompletedTaks = () => {};

  return (
    <>
      <GlobalStyle />
      <Container></Container>
    </>
  );
};

export default App;
