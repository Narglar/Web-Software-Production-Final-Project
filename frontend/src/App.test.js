import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

test('renders learn react link', () => {
  render(<TodoList data={[]} />);
  expect(screen.getByText('My ToDo List')).toBeInTheDocument()
});
