// __tests__/Counter.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

test('increments, decrements and resets the counter', () => {
  render(<Counter />);
  const incButton = screen.getByText(/increment/i);
  const decButton = screen.getByText(/decrement/i);
  const resetButton = screen.getByText(/reset/i);
  const countText = () => screen.getByText(/count:/i);

  fireEvent.click(incButton);
  expect(countText()).toHaveTextContent('Count: 1');

  fireEvent.click(decButton);
  expect(countText()).toHaveTextContent('Count: 0');

  fireEvent.click(incButton);
  fireEvent.click(resetButton);
  expect(countText()).toHaveTextContent('Count: 0');
});