import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeSwitcher from '@components/ThemeSwitcher';
import { useTheme } from 'next-themes';

jest.mock('@heroicons/react/24/solid', () => ({
  SunIcon: () => (
    <div data-testid="sun-icon" />
  ),
  MoonIcon: () => (
    <div data-testid="moon-icon" />
  ),
}));
jest.mock('next-themes', () => ({
  useTheme: jest.fn()
}));


describe('ThemeSwitcher', () => {
  useTheme.mockReturnValue({ theme: 'light', setTheme: jest.fn() });
  test('renders without crashing', () => {
    const { getByRole } = render(
      <ThemeSwitcher />
    );
    expect(getByRole('button')).toBeInTheDocument();
  });

  test('displays MoonIcon when theme is light', () => {
    useTheme.mockReturnValue({ theme: 'light', setTheme: jest.fn() });
    const { getByRole, getByTestId } = render(
      <ThemeSwitcher />
    );
    expect(getByRole('button')).toContainElement(getByTestId('moon-icon'));
  });

  test('displays SunIcon when theme is dark', () => {
    useTheme.mockReturnValue({ theme: 'dark', setTheme: jest.fn() });
    const { getByRole, getByTestId } = render(
      <ThemeSwitcher />
    );
    expect(getByRole('button')).toContainElement(getByTestId('sun-icon'));
  });

  test('toggles dark theme on button click', () => {
    useTheme.mockReturnValue({ theme: 'light', setTheme: jest.fn() });
    const { getByRole, getByTestId } = render(
      <ThemeSwitcher />
    );

    const button = getByRole('button');
    fireEvent.click(button);
    expect(button).toContainElement(getByTestId('moon-icon'));
  });

  test('toggles light theme on button click', () => {
    useTheme.mockReturnValue({ theme: 'dark', setTheme: jest.fn() });
    const { getByRole, getByTestId } = render(
      <ThemeSwitcher />
    );

    const button = getByRole('button');
    fireEvent.click(button);
    expect(button).toContainElement(getByTestId('sun-icon'));
  });
});