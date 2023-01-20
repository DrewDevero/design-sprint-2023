import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Harris Tweed mock site', () => {
  render(<App />);
  const linkElement = screen.getByText(/HARRIS TWEED/i);
  expect(linkElement).toBeInTheDocument();
});
