import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeProvider } from "styled-components";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import useStorage from "./hooks/useStorage";

import styled from "styled-components";
import GlobalStyle from "./styles/global";
import Input from "./components/Input";
import Tasks from "./components/Tasks";

import { light, dark } from "./styles/theme";

const Container = styled.main`
  margin-top: 1.5rem;
  width: 500px;
  @media screen and (max-width: 400px) {
    width: 95%;
    padding: 0;
    margin: 10px auto;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem;
  min-height: 50px;
  border-radius: 0px 0px 4px 4px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.heading};
  background-color: ${(props) => props.theme.card};

  & .filters span {
    margin-left: 5px;
    font-weight: 700;
  }
  & span {
    cursor: pointer;
  }

  & span:hover {
    color: ${(props) => props.theme.link};
  }

  @media screen and (max-width: 400px) {
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

const App = () => {
  const [theme, setTheme] = useStorage("theme", false);
  const [description, setDescription] = useState("");
  const [tasks, setTask] = useStorage("task", []);
  const [taskRender, setTaskRender] = useState(tasks);
  const [taskCount, setTaskCount] = useState("0");

  const handleNewTask = (description) => {
    const newTask = [...tasks, { id: uuidv4(), description, completed: false }];
    setTask(newTask);
    setDescription("");
  };
  const handleCompletedTask = (id) => {
    const newTask = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }

      return task;
    });
    setTask(newTask);
  };
  const handleDeleteCompletedTaks = () => {
    const newTask = tasks.filter((task) => task.completed === false);
    setTask(newTask);
  };

  //TASKS FILTERS

  const activeTasks = () => {
    const newTasks = tasks.filter((task) => task.completed === false);
    setTaskRender(newTasks);
  };

  const completedTasks = () => {
    const newTasks = tasks.filter((task) => task.completed === true);
    setTaskRender(newTasks);
  };

  const allTasks = () => {
    const newTasks = tasks.map((task) => task);
    setTaskRender(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTask(newTasks);
  };

  useEffect(() => {
    setTaskRender(tasks);
    const total = tasks.filter((task) => task.completed === false).length;

    if (total <= 1) setTaskCount(`${total} item left`);
    else setTaskCount(`${total} items left`);
  }, [tasks]);

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

        <Input
          addNewTask={handleNewTask}
          value={description}
          setValue={setDescription}
        />

        <Tasks
          tasks={taskRender}
          deleteTask={deleteTask}
          completedTask={handleCompletedTask}
        ></Tasks>
        <Footer>
          <>
            <p>{taskCount}</p>
            <div className="filters">
              <span onClick={allTasks}>All</span>
              <span onClick={activeTasks}>Active</span>
              <span onClick={completedTasks}>Completed</span>
            </div>
            <span onClick={handleDeleteCompletedTaks}>Clear Completed</span>
          </>
        </Footer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
