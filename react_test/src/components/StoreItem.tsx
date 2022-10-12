import React from "react";
import { Card, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Navigation } from "../utilities/navigation";

type StoreItemProps = {
  id: number;
  image: string;
  name: string;
  price: number;
  currency: string;
  final_price: number;
};

export function StoreItem({
  id,
  image,
  name,
  price,
  currency,
  final_price,
}: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removefromCart,
    closeCart,
    cartItems,
    defaultItem,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  const NavigateToInfo = () => {
    const navigate = Navigation();
    return (
      <Button
        data-testid="button"
        className="btn btn-default me-2"
        variant="secondary"
        onClick={() => [defaultItem(id), navigate("/InfoDetails")]}
        style={{ borderRadius: "25px" }}>
        More info
      </Button>
    );
  };

  return (
    <Card
      className="text-center g-1 h-90"
      style={{ width: "20rem", margin: "25px" }}>
      <Card.Body className="d-flex flex-column align-item-baseline">
        <Card.Img
          data-testid="image"
          variant="top"
          height="250px"
          style={{ objectFit: "cover" }}
          src={image}
          className="mb-3"></Card.Img>

        <Card.Title className="ms-2">{name}</Card.Title>
        <Card.Text
          className="text-danger fs-2"
          style={{ marginTop: "auto" }}>{`${currency} ${price}`}</Card.Text>
      </Card.Body>

      <div className="mt-auto">
        {quantity !== 0 ? (
          <Card.Footer>
            <NavigateToInfo />
          </Card.Footer>
        ) : (
          <Card.Footer>
            <NavigateToInfo />
            <Button
              data-testid="extendIcon"
              className="btn btn-muted "
              variant="secondary"
              onClick={() => increaseCartQuantity(id)}
              style={{ borderRadius: "25px" }}>
              Add To Cart
            </Button>
          </Card.Footer>
        )}
      </div>
    </Card>
  );
}
