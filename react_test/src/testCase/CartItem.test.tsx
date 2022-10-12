import React from "react";
import { screen, cleanup, fireEvent, render } from "@testing-library/react";
import { CartItem } from "../components/CartItem";
import { ThemeProvider } from "react-bootstrap";
import storeData from "../data/items.json";

describe("Widget component Test Cases", () => {
  const props = {
    data: [
      {
        id: 1,
        image: "https://static.offgamers.com/images/products/g",
        name: "TTRacing x CARNAGE Edition ",
        price: 0.99,
        currency: "USR",
        final_price: 0.99,
      },
    ],
  };

  const renderContent = (props: any) => {
    return render(
      <ThemeProvider>
        <CartItem {...props} />
      </ThemeProvider>
    );
  };

  afterEach(cleanup);

  it("query rendering", () => {
    renderContent(props);
    expect(screen.queryByTestId("quantity")).toBeDefined();
  });

  it("query rendering", () => {
    const query = jest.fn();
    renderContent({ query });
    expect(screen.queryByTestId("quantityItem")).toBeDefined();
  });

  it("Nav to HomePage", () => {
    jest.mock("../utilities/navigation", () => {
      return {
        Navigate: () => jest.fn(),
      };
    });
  });
});
