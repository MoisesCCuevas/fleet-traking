
/**
 * Button component renders a customizable button element.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.type - The type of the button (e.g., "button", "submit").
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @returns {JSX.Element} The rendered button component.
 */
import React from "react"

export default function Button(props) {
  const { type, onClick, children, disabled } = props
  return (
    <button
      className="px-4 py-1 shadow-md bg-slate-600 rounded-md text-white disabled:opacity-55 flex items-center justify-center gap-2 text-nowrap"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
  