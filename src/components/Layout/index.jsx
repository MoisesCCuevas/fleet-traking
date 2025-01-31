/**
 * Layout component that provides a consistent layout structure for the application.
 *
 * @param {Object} props - The properties object.
 * @param {Function} props.logout - The function to log out the user.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 *
 * @returns {JSX.Element} The rendered Layout component.
 */
import React from "react";
import ThemeSwitcher from "@components/ThemeSwitcher";
import Navbar from "@components/Navbar";

export default function Layout({ logout, children }){
  return (
    <div className="flex items-center h-screen w-screen justify-center select-none">
      <div className="absolute top-4 right-4 z-50">
        <ThemeSwitcher />
      </div>
      <Navbar logout={logout} />
      {children}
    </div>
  );
}