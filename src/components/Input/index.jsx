/**
 * Input component renders a styled input element.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.type - The type of the input element.
 * @param {string} props.placeholder - The placeholder text for the input element.
 * @param {string} props.name - The name attribute for the input element.
 * @returns {JSX.Element} The rendered input element.
 */
import React from "react"

export default function Input(props) {
  const { type, placeholder, name } = props
  return (
    <input
      className="rounded-md w-full text-black bg-white border-2 border-spacing-5 border-solid border-gray-800"
      type={type}
      placeholder={placeholder}
      name={name}
    />
  )
}
