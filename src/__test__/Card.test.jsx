import React from "react";
import { render } from "@testing-library/react";
import Card from "@components/Card";
import '@testing-library/jest-dom'

describe("Card component", () => {
  test("renders without crashing", () => {
    const { container } = render(<Card>Test Content</Card>);
    expect(container).toBeInTheDocument();
  });

  test("has the correct class names", () => {
    const { container } = render(<Card>Test Content</Card>);
    expect(container.firstChild).toHaveClass(
      "w-1/2 h-[300px] bg-gray-700 rounded card p-4"
    );
  });
});
