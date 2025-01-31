import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "@components/Button";

describe("Button component", () => {
  test("renders correctly with given props", () => {
    const { getByText } = render(
      <Button type="button" onClick={() => {}}>
        Click me
      </Button>
    );
    expect(getByText("Click me")).toMatchSnapshot();
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button type="button" onClick={handleClick}>
        Click me
      </Button>
    );
    fireEvent.click(getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("is disabled when disabled prop is true", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button type="button" onClick={() => {}} disabled={true}>
        Click me
      </Button>
    );
    fireEvent.click(getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
