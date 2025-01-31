import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SmallCard from "@components/SmallCard";

describe("SmallCard Component", () => {
  test("renders title correctly", () => {
    const { getByText } = render(
      <SmallCard title="Test Title" total={100} percentage="50%" />
    );
    expect(getByText("Test Title")).toBeInTheDocument();
  });

  test("renders total correctly", () => {
    const { getByText } = render(
      <SmallCard title="Test Title" total={100} percentage="50%" />
    );
    expect(getByText("100")).toBeInTheDocument();
  });

  test("renders percentage correctly", () => {
    const { getByText } = render(
      <SmallCard title="Test Title" total={100} percentage="50%" />
    );
    expect(getByText("50%")).toBeInTheDocument();
  });

  test("applies correct styles", () => {
    const { container } = render(
      <SmallCard title="Test Title" total={100} percentage="50%" />
    );
    expect(container.firstChild).toHaveClass(
      "flex-1 px-2 py-1 justify-center w-16 text-white bg-gray-700 shadow-md rounded max-h-300px card"
    );
  });
});
