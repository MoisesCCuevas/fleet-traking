
/**
 * Card component that wraps its children with a styled div.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be displayed inside the card.
 * @returns {JSX.Element} The rendered Card component.
 */
import React from "react"

export default function Card({ children }) {
  return (
    <div className="w-1/2 h-[300px] bg-gray-700 rounded card p-4 relative">
      {children}
    </div>
  )
}
