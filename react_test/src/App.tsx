import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Purchase from "./components/Purchase";
import NavBar from "./components/NavBar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { InfoDetails } from "./components/InfoDetails";
import { CartTotal } from "./components/CartTotal";

function App() {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Purchase />} />
          <Route path="/InfoDetails" element={<InfoDetails />} />
          <Route path="/Cart" element={<CartTotal />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
