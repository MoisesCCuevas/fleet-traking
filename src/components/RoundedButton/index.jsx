import React from 'react';

export default function RoundedButton(props){
  const {
    children,
    onClick,
    disabled,
    type
  } = props;
  return (
    <button
      className="bg-gray-600 text-white hover:bg-gray-800 font-bold p-3 rounded-full flex items-center justify-center shadow-md disabled:opacity-40 w-fit"
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
