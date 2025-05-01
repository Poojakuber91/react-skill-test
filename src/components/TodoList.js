import React, { useState, useReducer } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
`;

const Input = styled.input`
  margin: 5px;
  padding: 8px;
  width: 250px;
`;

const Button = styled.button`
  padding: 8px 12px;
  margin-left: 5px;
`;

const Task = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background-color: ${props => props.completed ? '#d3ffd3' : '#f0f0f0'};
  margin: 5px 0;
`;

const initialState = [];

function reducer(state, action) {
  switch(action.type) {
    case 'add':
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
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('');

  const filteredTasks = state.filter(task => task.text.toLowerCase().includes(filter.toLowerCase()));

  return (
    <Container>
      <h2>Todo List</h2>
      <Input placeholder="Add task" value={text} onChange={e => setText(e.target.value)} />
      <Button onClick={() => { dispatch({ type: 'add', text }); setText(''); }}>Add</Button>
      <Input placeholder="Search" value={filter} onChange={e => setFilter(e.target.value)} />
      {filteredTasks.map(task => (
        <Task key={task.id} completed={task.completed}>
          <span onClick={() => dispatch({ type: 'toggle', id: task.id })}>
            {task.text}
          </span>
          <Button onClick={() => dispatch({ type: 'remove', id: task.id })}>Remove</Button>
        </Task>
      ))}
    </Container>
  );
}

export default TodoList;