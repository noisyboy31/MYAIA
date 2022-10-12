import React from "react";
import { ThemeProvider } from "react-bootstrap";
import { screen, cleanup, fireEvent, render } from "@testing-library/react";
import { CartTotal } from "../components/CartTotal";

describe("Widget component Test Cases", () => {
  const props = {
    data: [
      {
        id: 8,
        image:
          "https://static.offgamers.com/images/products/171043_1524817409.jpg?v=16173 65714",
        name: "USD25 Karma Koin Card (Global) Discount Promo",
        price: 6.1,
        currency: "USD",
        final_price: 5.8,
      },
    ],
  };

  const renderContent = (props: any) => {
    return (
      <ThemeProvider>
        <CartTotal {...props} />
      </ThemeProvider>
    );
  };

  afterEach(() => {
    cleanup();
  });

  it("Cart is renderred successfully", () => {
    renderContent(props);
    expect(screen.queryByTestId("total")).toBeDefined();
  });
});
