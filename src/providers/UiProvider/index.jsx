"use client";
import React, { createContext, useState } from "react";

export const UIContext = createContext();

export default function UiProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [openClass, setOpenClass] = useState("");

  const openSideMenu = () => {
    setOpen(true);
    setOpenClass("open");
  }

  const closeSideMenu = () => {
    setOpenClass("closed");
    setTimeout(() => {
      setOpen(false);
    }, 500);
  }

  const value = {
    open,
    openClass,
    openSideMenu,
    closeSideMenu,
  }

  return (
    <UIContext.Provider value={value}>
      {children}
    </UIContext.Provider>
  );
}
