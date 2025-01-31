/**
 * SmallCard component displays a card with a title, total, and percentage.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title to display on the card.
 * @param {number|string} props.total - The total value to display on the card.
 * @param {number|string} props.percentage - The percentage value to display on the card.
 * @returns {JSX.Element} The rendered SmallCard component.
 */
import React from "react"

export default function SmallCard(props) {
  const {
    title,
    total,
    percentage
  } = props
  return (
    <div className="flex-1 px-2 py-1 justify-center w-16 text-white bg-gray-700 shadow-md rounded max-h-300px card">
      <div className="flex flex-col items-end pr-4">
        <p className="font-semibold">{title}</p>
        <p className="py-4 font-bold">{total}</p>
        <p className="text-green-300">{percentage}</p>
      </div>
    </div>
  )
}