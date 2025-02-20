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
import Navbar from "@components/Navbar";
import NavbarMini from "@components/NavbarMini";

export default function Layout({ logout, children }){
  return (
    <div className="flex flex-col md:flex-row items-center h-screen w-screen justify-center select-none">
      <Navbar logout={logout} />
      <NavbarMini logout={logout} />
      <React.Fragment>
        {children}
      </React.Fragment>
    </div>
  );
}