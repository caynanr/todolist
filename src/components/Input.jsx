import React from "react";
import styled from "styled-components";

const Description = styled.input`
  background-color: ${(props) => props.theme.card};
  font-size: 1rem;
  color: ${(props) => props.theme.heading};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
  padding: 0.5rem;
  width: 100%;
  height: 40px;
  outline: none;
`;

const Input = ({ value, setValue, addNewTask }) => {
  function handleSetValue({ target }) {
    setValue(target.value);
  }
  return (
    <Description
      placeholder="Create a new todo..."
      type="text"
      value={value}
      onChange={handleSetValue}
      onKeyDown={({ key }) => {
        if (key === "Enter") addNewTask(value);
      }}
    />
  );
};

export default Input;
