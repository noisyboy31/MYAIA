import { Button, Stack, Container, Row, Col } from "react-bootstrap";
import storeData from "../data/items.json";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrenct";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartCal({ id, quantity }: CartItemProps) {
  const { increaseCartQuantity, decreaseCartQuantity, removefromCart } =
    useShoppingCart();
  const item = storeData.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Stack
            direction="horizontal"
            gap={2}
            className="d-flex align-items-center">
            <div className="me-auto">
              {" "}
              <p className="text-uppercase fw-bolder"> Quantity</p>
              <div className="text-info">
                {item.name}{" "}
                {quantity > 1 && (
                  <span className="text-muted" style={{ fontSize: ".65rem" }}>
                    x{quantity}
                  </span>
                )}
              </div>
              <div className="text-muted" style={{ fontSize: ".75rem" }}>
                {formatCurrency(item.price)}
              </div>
            </div>
          </Stack>
        </Col>
        <Col>
          <div
            className="d-flex align-items-center flex-column"
            style={{ height: "100px", gap: ".5rem" }}>
            <p className="text-uppercase fw-bolder"> Quantity</p>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: ".5rem" }}>
              <Button
                data-testid="submitBtn"
                onClick={() => decreaseCartQuantity(id)}>
                -
              </Button>
              <div>
                <span className="fs-3">{quantity}</span> In Cart
              </div>
              <Button
                data-testid="submitBtn"
                onClick={() => increaseCartQuantity(id)}>
                +
              </Button>
            </div>
          </div>
        </Col>
        <Col>
          <p className="text-uppercase fw-bolder">Price</p>
          <div> {formatCurrency(item.price * quantity)}</div>
        </Col>
      </Row>
    </Container>
  );
}
