// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainBit title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainBit/i);
    expect(titleElement).toBeInTheDocument();
});
