import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  padding: 30px;
  width: 90%;
  max-width: 400px;
  background-color: #f4f4f4;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Count = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <h2>Counter</h2>
      <ButtonGroup>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <Button onClick={() => setCount(count - 1)}>Decrement</Button>
        <Button onClick={() => setCount(0)}>Reset</Button>
      </ButtonGroup>
      <Count>Count: {count}</Count>
    </Container>
  );
}

export default Counter;
