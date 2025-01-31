import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from "@components/Layout";

jest.mock("@components/ThemeSwitcher", () => () => (
  <div>Mocked ThemeSwitcher</div>
));
jest.mock("@components/Navbar", () => ({ logout }) => (
  <div>
    Mocked Navbar<button onClick={logout}>Logout</button>
  </div>
));

describe("Layout Component", () => {
  const mockLogout = jest.fn();

  beforeEach(() => {
    render(
      <Layout logout={mockLogout}>
        <div>Child Component</div>
      </Layout>
    );
  });

  test("renders ThemeSwitcher component", () => {
    expect(screen.getByText("Mocked ThemeSwitcher")).toBeInTheDocument();
  });

  test("renders Navbar component", () => {
    expect(screen.getByText("Mocked Navbar")).toBeInTheDocument();
  });

  test("renders children components", () => {
    expect(screen.getByText("Child Component")).toBeInTheDocument();
  });

  test("calls logout function when logout button is clicked", () => {
    const logoutButton = screen.getByText("Logout");
    logoutButton.click();
    expect(mockLogout).toHaveBeenCalled();
  });
});
