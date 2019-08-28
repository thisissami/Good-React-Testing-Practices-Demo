import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect'

import App from './App';
// import List from './WithContext/List';
import List from './WithProps/List';
import libraries from './libraries';

it('renders without crashing', () => {
  const { getByText } = render(<App />);
  expect(getByText('Useful React Libraries')).toBeInTheDocument()
});

describe('React Testing Library tests', () => {
  it('should have 3 items', () => {
    const { getAllByText } = render(<App />);
    expect(getAllByText('View Details')).toHaveLength(3);
  });
  it('should have a button to add a new library', () => {
    const { getByText } = render(<App />);
    expect(getByText('Add A Library')).toBeDefined();
  });
  it('should have 4 items if we click the button', () => {
    const { getByText, getAllByText } = render(<App />);
    const button = getByText('Add A Library');
    fireEvent.click(button);
    expect(getAllByText('View Details')).toHaveLength(4);
  });
  it('should have a home location', () => {
    render(<App />);
    expect(window.location.pathname).toBe('/');
  });
  it('should navigate to the proper url when View Details clicked', () => {
    const { queryAllByText, rerender } = render(<App />);
    const links = queryAllByText('View Details');
    fireEvent.click(links[0]);
    expect(window.location.pathname).toBe('/reactTestingLibrary');
    rerender();
    expect(queryAllByText('View Details')).toHaveLength(0);
  });
});