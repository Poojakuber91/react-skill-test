import React, { useState, useReducer } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  max-width: 600px;
  border-radius: 10px;
  background-color: #f9f9f9;

  @media (max-width: 600px) {
    padding: 15px;
    width: 90%;
  }
`;

const Heading = styled.h2`
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  width: calc(100% - 20px);
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 16px;
  margin: 5px 5px 10px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Task = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.completed ? '#d3ffd3' : '#f0f0f0')};
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  cursor: pointer;
`;

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      if (!action.text.trim()) return state;
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'toggle':
      return state.map(task =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );
    case 'remove':
      return state.filter(task => task.id !== action.id);
    default:
      return state;
  }
}

function TodoList() {
  const [tasks, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('');

  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Heading>Todo List</Heading>
      <Input
        type="text"
        placeholder="Add a new task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Button onClick={() => {
        dispatch({ type: 'add', text });
        setText('');
      }}>
        Add Task
      </Button>
      <Input
        type="text"
        placeholder="Search tasks"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      {filteredTasks.map(task => (
        <Task
          key={task.id}
          completed={task.completed}
          onClick={() => dispatch({ type: 'toggle', id: task.id })}
        >
          <span>{task.text}</span>
          <Button onClick={e => {
            e.stopPropagation();
            dispatch({ type: 'remove', id: task.id });
          }}>
            Remove
          </Button>
        </Task>
      ))}
    </Container>
  );
}

export default TodoList;