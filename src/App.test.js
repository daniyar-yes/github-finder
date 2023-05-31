import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./App";

test('renders App and checks search results', async () => {
  render(
    <Router>
      <App />
    </Router>
  );

  // Check if <main> component mounted
  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();

  // Fill search input field and submit the form
  const searchInput = screen.getByLabelText('Search:');
  fireEvent.change(searchInput, { target: { value: 'test' } });

  const submitButton = screen.getByRole('button', { name: 'submit' });
  fireEvent.click(submitButton);

  // Wait for the search results to appear and check if there are images
  await waitFor(() => screen.getByRole('img'));
});