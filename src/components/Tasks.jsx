import React from "react";
import styled from "styled-components";

const List = styled.ul`
  background-color: #181824;
  width: 400px;
  border-radius: 4px;
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
  height: 40px;
  border: none;
  padding: 0.7rem 0.5rem;
  width: 100%;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.inative};
  cursor: pointer;
`;

const Tasks = ({ tasks, deleteTask, completedTask }) => {
  return (
    <List>
      {tasks.length > 0 &&
        tasks.map((task) => (
          <Item
            style={
              task.completed
                ? { textDecoration: "line-through", opacity: "0.6" }
                : {}
            }
            onClick={() => completedTask(task.id)}
            key={task.id}
          >
            {task.description}
          </Item>
        ))}
    </List>
  );
};

export default Tasks;
