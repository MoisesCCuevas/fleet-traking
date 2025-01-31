import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MapProvider from "@components/MapProvider";

describe("MapProvider", () => {
  it("renders children when apiKey is provided", () => {
    const { getByText } = render(
      <MapProvider apiKey="test-api-key">
        <div>Child Component</div>
      </MapProvider>
    );
    expect(getByText("Child Component")).toBeInTheDocument();
  });
  it("returns null when apiKey is not provided", () => {
    const { container } = render(
      <MapProvider>
        <div>Child Component</div>
      </MapProvider>
    );
    expect(container.firstChild).toBeNull();
  });
});
