import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "@components/Input";

describe("Input Component", () => {
  test("renders input element with correct type", () => {
    render(<Input type="text" placeholder="Enter text" name="testInput" />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toHaveAttribute("type", "text");
  });

  test("renders input element with correct placeholder", () => {
    render(<Input type="text" placeholder="Enter text" name="testInput" />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
  });

  test("renders input element with correct name attribute", () => {
    render(<Input type="text" placeholder="Enter text" name="testInput" />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toHaveAttribute("name", "testInput");
  });

  test("applies correct class names to input element", () => {
    render(<Input type="text" placeholder="Enter text" name="testInput" />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toHaveClass(
      "rounded-md w-full text-black bg-white border-2 border-spacing-5 border-solid border-gray-800"
    );
  });
});
