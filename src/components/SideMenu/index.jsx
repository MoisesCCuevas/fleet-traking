import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import "./styles.css";

export default function SideMenu(props){
  const {
    title,
    onClose,
    children,
    open,
    openClass
  } = props;

  if (!open) return null;
  return (
    <aside
      className={`w-full md:w-1/3 flex md:hidden flex-col items-center fixed bg-white shadow-lg right-0 z-50 text-zinc-900 top-0 mt-16 select-none ${openClass}`}
    >
      <div className="flex justify-between items-center w-full p-4 select-none">
        <h2 className="font-medium text-xl">{title}</h2>
        <XMarkIcon onClick={onClose} className="size-5" />
      </div>
      {children}
    </aside>
  );
};
