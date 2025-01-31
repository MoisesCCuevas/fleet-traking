import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotificationAlert from "@components/NotificationAlert";

describe("NotificationAlert Component", () => {
  test("renders the notification message", () => {
    render(<NotificationAlert message="Test message" type="success" />);
    expect(screen.getByText("Test message")).toBeInTheDocument();
  });

  test("renders the notification type", () => {
    render(<NotificationAlert message="Test message" type="success" />);
    expect(screen.getByText("success")).toBeInTheDocument();
  });

  test("applies the correct class based on type", () => {
    const { container } = render(
      <NotificationAlert message="Test message" type="error" />
    );
    expect(container.firstChild).toHaveClass("error");
  });

  test("renders with correct styles", () => {
    const { container } = render(
      <NotificationAlert message="Test message" type="info" />
    );
    expect(container.firstChild).toHaveClass("notification-animation-open");
  });

  test("renders with correct structure", () => {
    const { container } = render(
      <NotificationAlert message="Test message" type="info" />
    );
    expect(container.firstChild).toHaveClass(
      "flex items-center w-full justify-center z-50 py-2 px-4 absolute bottom-0 right-0"
    );
  });
});
