/**
 * ThemeProvider component that wraps the NextThemesProvider to manage theme switching.
 * It ensures that the component is only rendered on the client side by checking if it is mounted.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the ThemeProvider.
 * @returns {React.ReactNode|null} The rendered ThemeProvider component or null if not mounted.
 */
"use client"
import React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeProvider({children}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <NextThemesProvider attribute="class">
      {children}
    </NextThemesProvider>
  );
};
