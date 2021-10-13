import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeProvider } from "styled-components";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import styled from "styled-components";
import GlobalStyle from "./styles/global";
import Input from "./components/Input";
import Tasks from "./components/Tasks";

import { light, dark } from "./styles/theme";

const Container = styled.main`
  margin-top: 1.5rem;
  width: 400px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  & h1 {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 6px;
    color: ${(props) => props.theme.heading};
  }

  & button {
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme.heading};
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

const Footer = styled.div`
  width: 100%auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  & span {
    color: ${(props) => props.theme.heading};
    padding: 0.2rem;
    cursor: pointer;
    font-size: 0.9rem;
  }

  & span:hover {
    color: ${(props) => props.theme.heading};
  }
`;

const App = () => {
  const [theme, setTheme] = useState(false);
  const [description, setDescription] = useState("");
  const [task, setTask] = useState([]);

  const handleNewTask = (description) => {
    const newTask = [...task, { id: uuidv4(), description, completed: false }];
    setTask(newTask);
    setDescription("");
  };
  const handleCompletedTask = (id) => {
    const newTask = task.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }

      return task;
    });
    setTask(newTask);
  };
  const handleDeleteCompletedTaks = () => {
    const newTask = task.filter((task) => task.completed === false);
    setTask(newTask);
  };

  return (
    <ThemeProvider theme={theme ? light : dark}>
      <GlobalStyle />
      <Container>
        <Header>
          <h1>TODO</h1>
          <button
            onClick={() => {
              setTheme((oldState) => !oldState);
            }}
          >
            {theme ? <BsFillSunFill /> : <BsFillMoonFill />}
          </button>
        </Header>
        <div>
          <Input
            addNewTask={handleNewTask}
            value={description}
            setValue={setDescription}
          />
        </div>
        <Tasks
          tasks={task}
          deleteTask={handleDeleteCompletedTaks}
          completedTask={handleCompletedTask}
        ></Tasks>
        <Footer>
          {task.length > 0 && (
            <span onClick={handleDeleteCompletedTaks}>Clear Completed</span>
          )}
        </Footer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
