import React from "react";
import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeData from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrenct";
import { CartCal } from "./CartCal";

export function CartTotal() {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Stack gap={3} data-testid="details">
      {cartItems.map((item) => (
        <CartCal key={formatCurrency(item.id)} {...item} />
      ))}
      <div className="ms-auto fw-bold fs-5">
        Total{" "}
        {formatCurrency(
          cartItems.reduce((total, cartItem) => {
            const item = storeData.find((i) => i.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)
        )}
      </div>
    </Stack>
  );
}
