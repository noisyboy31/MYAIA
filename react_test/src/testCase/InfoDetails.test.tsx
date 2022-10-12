import React from "react";
import { ThemeProvider } from "react-bootstrap";
import { screen, cleanup, fireEvent, render } from "@testing-library/react";
import { InfoDetails } from "../components/InfoDetails";

describe("Widget component Test Cases", () => {
  const props = {
    data: [
      {
        id: 1,
        image:
          "https://static.offgamers.com/images/products/202868_1652079588.jpg",
        name: "TTRacing x CARNAGE Edition - XL Memory Foam Lumbar Pillow with Cooltec Gel",
        price: 0.88,
        currency: "USD",
        final_price: 0.84,
      },
    ],
  };

  const renderContent = (props: any) => {
    return (
      <ThemeProvider>
        <InfoDetails {...props} />
      </ThemeProvider>
    );
  };

  afterEach(cleanup);

  it("Stack is renderred successfully", () => {
    renderContent(props);
    expect(screen.queryByTestId("details")).toBeDefined();
  });
});
