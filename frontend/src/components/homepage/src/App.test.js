import { render, screen } from '@testing-library/react';
import Appmain from './Appmain';

test('renders learn react link', () => {
  render(<Appmain />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
