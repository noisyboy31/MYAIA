import React from "react";
import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrenct";
import { CartItem } from "./CartItem";

export function InfoDetails() {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Stack gap={3} data-testid="details">
      {cartItems.map((item) => (
        <CartItem key={formatCurrency(item.id)} {...item} />
      ))}
    </Stack>
  );
}
