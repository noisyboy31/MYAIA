import React from "react";
import { ThemeProvider } from "react-bootstrap";
import { screen, cleanup, fireEvent } from "@testing-library/react";
import { ShoppingCart } from "../components/ShoppingCart";

const renderContent = (props: any) => {
  return (
    <ThemeProvider>
      <ShoppingCart {...props} />
    </ThemeProvider>
  );
};

describe("<ShoppingCart/> component Test Cases", () => {
  test("Renders ", () => {
    const onMenuOpen = jest.fn();
    renderContent({ onMenuOpen });
    expect(screen.queryByTestId("items"));
  });
});
