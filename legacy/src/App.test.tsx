import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  test("renders with correct title", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const title = screen.getByText(/🦁 Who's On Duty?/i);
    expect(title).toBeInTheDocument();
  });
});
