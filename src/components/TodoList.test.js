test('adds, toggles, and removes a task', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add task/i);
    const addButton = screen.getByText(/add/i);
  
    fireEvent.change(input, { target: { value: 'Test Task' } });
    fireEvent.click(addButton);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  
    fireEvent.click(screen.getByText('Test Task'));
    expect(screen.getByText('Test Task').parentElement).toHaveStyle('background-color: #d3ffd3');
  
    fireEvent.click(screen.getByText(/remove/i));
    expect(screen.queryByText('Test Task')).not.toBeInTheDocument();
  });