import { Button, Stack, Container, Row, Col } from "react-bootstrap";
import storeData from "../data/items.json";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrenct";
import { Navigation } from "../utilities/navigation";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { increaseCartQuantity, decreaseCartQuantity, removefromCart } =
    useShoppingCart();
  const item = storeData.find((i) => i.id === id);
  if (item == null) return null;

  const NavigateCart = () => {
    const navigate = Navigation();
    return (
      <Button
        className="btn btn-success me-2"
        variant="secondary"
        onClick={() => navigate("/Cart")}
        style={{ borderRadius: "25px" }}>
        Add to Cart
      </Button>
    );
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Stack
            direction="horizontal"
            gap={2}
            className="d-flex align-items-center">
            <img
              src={item.image}
              style={{ width: "125px", height: "75px", objectFit: "cover" }}
            />
            <div className="me-auto" data-testid="quantity">
              <div>
                {item.name}{" "}
                {quantity > 1 && (
                  <span className="text-muted" style={{ fontSize: ".65rem" }}>
                    x{quantity}
                  </span>
                )}
              </div>
            </div>
            <div> {formatCurrency(item.price)}</div>
          </Stack>
        </Col>
        <Col>
          <div
            data-testid="quantityItem"
            className="d-flex align-items-center flex-column"
            style={{ height: "100px", gap: ".5rem" }}>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: ".5rem" }}>
              <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
              <div>
                <span className="fs-3">{quantity}</span> In Cart
              </div>
              <Button onClick={() => increaseCartQuantity(id)}>+</Button>
            </div>
          </div>
        </Col>
        <Col>
          <NavigateCart />
        </Col>
      </Row>
    </Container>
  );
}
