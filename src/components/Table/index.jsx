/**
 * Table component renders a table with given data and headers.
 *
 * @param {Object[]} data - Array of objects representing the table rows.
 * @param {string[]} headers - Array of strings representing the table headers.
 * @param {Function} onClickRow - Callback function to handle row click events.
 *
 * @returns {JSX.Element} The rendered table component.
 */
import React from "react";

export default function Table({ data, headers, onClickRow }) {
  return (
    <table className="w-full table">
      <thead className="sticky top-0">
        <tr>
          {headers.map((header, index) => (
            <th className="text-center" key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 && data.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((cell, index) => (
              <td
                className="pl-4 py-2"
                key={index}
                onClick={() => onClickRow(row)}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}