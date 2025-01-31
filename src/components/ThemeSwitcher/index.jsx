/**
 * ThemeSwitcher component allows users to toggle between light and dark themes.
 * It uses the `useTheme` hook from `next-themes` to get and set the current theme.
 * Depending on the current theme, it displays either a SunIcon or a MoonIcon.
 *
 * @component
 * @example
 * // Usage example:
 * // <ThemeSwitcher />
 *
 * @returns {JSX.Element} A button that toggles the theme between light and dark.
 */
"use client"
import React from "react";
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"

export default function ThemeSwitcher(){
  const { theme, setTheme } = useTheme();
  const onChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <button
      onClick={onChangeTheme}
      className="size-7 nav-button p-1"
    >
      {theme === "dark" ? (
        <SunIcon data-testid="sun-icon" className="size-5 text-inherit" />
      ) : (
        <MoonIcon data-testid="moon-icon" className="size-5 text-inherit" />
      )}
    </button>
  );
};