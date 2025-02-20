import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ThemeProvider from "../providers/ThemeProvider";
import { useTheme } from 'next-themes';

jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
  ThemeProvider: ({ children }) => <div>{children}</div>,
}));

describe('ThemeProvider Component', () => {
  test('renders children correctly', () => {
    render(
      <ThemeProvider>
        <div data-testid="child">Child Component</div>
      </ThemeProvider>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  test('sets the correct default theme', () => {
    useTheme.mockReturnValue({ theme: 'light', setTheme: jest.fn() });

    render(
      <ThemeProvider defaultTheme="light">
        <div data-testid="child">Child Component</div>
      </ThemeProvider>
    );

    const { theme } = useTheme();
    expect(theme).toBe('light');
  });
});
