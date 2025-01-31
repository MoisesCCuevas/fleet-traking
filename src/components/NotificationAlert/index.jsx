
/**
 * NotificationAlert component displays a notification message with a specific type.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.message - The notification message to display.
 * @param {string} props.type - The type of notification (e.g., 'success', 'error', 'info').
 * @returns {JSX.Element} The rendered NotificationAlert component.
 */
import React from "react";

export default function NotificationAlert(props) {
  const { message, type } = props;
  return (
    <div
      className={`flex items-center w-full justify-center z-50 py-2 px-4 absolute bottom-0 right-0 ${type} notification-animation-open`}
    >
      <div className="flex gap-2 text-white">
        <h1 className="font-semibold first-letter:capitalize">{type}</h1>
        <span>{message}</span>
      </div>
    </div>
  );
}
