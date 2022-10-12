import React from "react";
import { ThemeProvider } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { screen, cleanup, fireEvent, render } from "@testing-library/react";
import { Button } from "react-bootstrap";

const renderContent = (props: any) => {
  const click = jest.fn();
  return (
    <ThemeProvider>
      <StoreItem {...props}>
        <Button onClick={click}></Button>
      </StoreItem>
    </ThemeProvider>
  );
};

describe("<StoreItem /> component Test Cases with correct data", () => {
  test("<StoreItem /> component is renderred successfully data", () => {
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
        {
          id: 2,
          image:
            "https://static.offgamers.com/images/products/175101_1525764832.jpg?v=15831 32702",
          name: "iTunes USD200 Gift Card (US) Discount Promo",
          price: 4.98,
          currency: "USD",
          final_price: 4.73,
        },
        {
          id: 3,
          image:
            "https://static.offgamers.com/images/products/204981_1657764230.jpg?v=16582 15177",
          name: "Endling - Extinction is Forever STEAM KEY [GLOBAL]",
          price: 8.32,
          currency: "USD",
          final_price: 7.9,
        },
        {
          id: 4,
          image:
            "https://static.offgamers.com/images/products/199272_1656644727.jpg?v=16566 44727",
          name: "ARMORIG MAMBA Series - Black",
          price: 7.32,
          currency: "USD",
          final_price: 6.95,
        },
        {
          id: 5,
          image:
            "https://static.offgamers.com/images/products/promo_156918_1543376877.jpg?v =1535362138",
          name: "gametower 100 Points (Global)",
          price: 7,
          currency: "USD",
          final_price: 6.65,
        },
        {
          id: 6,
          image:
            "https://static.offgamers.com/images/products/184444_1595771366.jpg?v=16052 24401",
          name: "Google Play AED500 Gift Cards (AE) Discount Promo",
          price: 6.71,
          currency: "USD",
          final_price: 6.37,
        },
        {
          id: 7,
          image:
            "https://static.offgamers.com/images/products/204775_1656916975.jpg?v=16569 33415",
          name: "PlayStation™Store USD110 Gift Cards (US) Discount Promo",
          price: 9.48,
          currency: "USD",
          final_price: 9.01,
        },
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
      onClick: () => jest.fn(),
    };
    renderContent(props);
  });

  test("ImageScreen has visual image", () => {
    const onMenuOpen = jest.fn();
    renderContent({ onMenuOpen });
    expect(screen.queryByTestId("image")).toBeDefined();
  });

  test("Nav to HomePage", () => {
    jest.mock("../utilities/navigation", () => {
      return {
        Navigate: () => jest.fn(),
      };
    });
  });
});
