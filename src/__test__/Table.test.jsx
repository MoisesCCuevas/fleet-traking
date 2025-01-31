import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Table from "@components/Table";

describe("Table Component", () => {
  const headers = ["Name", "Age", "Address"];
  const data = [
    { Name: "John Doe", Age: 28, Address: "123 Main St" },
    { Name: "Jane Smith", Age: 34, Address: "456 Oak St" },
  ];
  const onClickRow = jest.fn();

  test("renders table headers correctly", () => {
    render(<Table headers={headers} data={data} onClickRow={onClickRow} />);
    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  test("renders table rows correctly", () => {
    render(<Table headers={headers} data={data} onClickRow={onClickRow} />);
    data.forEach((row) => {
      Object.values(row).forEach((cell) => {
        expect(screen.getByText(cell)).toBeInTheDocument();
      });
    });
  });

  test("calls onClickRow when a row is clicked", () => {
    render(<Table headers={headers} data={data} onClickRow={onClickRow} />);
    const firstRowCell = screen.getByText(data[0].Name);
    fireEvent.click(firstRowCell);
    expect(onClickRow).toHaveBeenCalledWith(data[0]);
  });

  test("does not render rows when data is empty", () => {
    render(<Table headers={headers} data={[]} onClickRow={onClickRow} />);
    expect(screen.queryByText(data[0]?.Name)).not.toBeInTheDocument();
  });
});
