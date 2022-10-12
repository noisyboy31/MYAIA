import React from "react";
import { ThemeProvider } from "react-bootstrap";
import { screen, cleanup, fireEvent } from "@testing-library/react";
import NavBar from "../components/NavBar";

const renderContent = () => {
  return (
    <ThemeProvider>
      <NavBar />
    </ThemeProvider>
  );
};

describe("NavBar", () => {
  it("renders menu", () => {
    const onMenuOpen = jest.fn();
    renderContent();
    const menu = screen.queryByLabelText("openMenu");
    expect(menu).toBeNull();
    expect(screen.queryByTestId("openMenu")).toBeDefined();
  });

  it("Nav to HomePage", () => {
    jest.mock("../utilities/navigation", () => {
      return {
        Navigate: () => jest.fn(),
      };
    });
  });
});
