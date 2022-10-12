import React from "react";
import { Row, Container } from "react-bootstrap";
import storeData from "../data/items.json";
import { StoreItem } from "./StoreItem";

class Purchase extends React.Component {
  render() {
    return (
      <>
        <Container className="bg-light">
          <Row md={2} xs={1} lg={4} className="justify-content-md-center g-3">
            {storeData.map((data) => (
              <StoreItem key={data.id} {...data} />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Purchase;
