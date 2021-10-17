import React from "react";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";

const List = styled.ul`
  background-color: #181824;
  width: 100%;
  border-radius: 4px 4px 0px 0px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-top: 1rem;
`;

const Item = styled.li`
  list-style: none;
  background-color: ${(props) => props.theme.card};
  font-size: 1rem;
  color: ${(props) => props.theme.heading};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  padding: 0.7rem 0.5rem;
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.inative};

  & div {
    display: none;
  }

  & div:hover {
    color: ${(props) => props.theme.link};
  }

  &:hover div {
    display: block;
  }
`;

const Tasks = ({ tasks, completedTask, deleteTask }) => {
  return (
    <List>
      {tasks.length > 0 &&
        tasks.map((task) => (
          <Item
            key={task.id}
            // onClick={() => completedTask(task.id)}
          >
            <span
              style={
                task.completed
                  ? { textDecoration: "line-through", opacity: "0.6" }
                  : {}
              }
              onClick={() => completedTask(task.id)}
            >
              {task.description}
            </span>
            <div onClick={() => deleteTask(task.id)}>
              <AiOutlineDelete />
            </div>
          </Item>
        ))}
    </List>
  );
};

export default Tasks;
