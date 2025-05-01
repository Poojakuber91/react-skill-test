import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px 15px;
  font-size: 16px;
`;

const Count = styled.div`
  font-size: 24px;
  margin-top: 10px;
`;

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <h2>Counter</h2>
      <Button onClick={() => setCount(count - 1)}>-</Button>
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <Count>Count: {count}</Count>
    </Container>
  );
}

export default Counter;
