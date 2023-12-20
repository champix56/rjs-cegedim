import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CartConnected, { Cart } from "./Cart";
import store from "../store/store";
import { Provider } from "react-redux";

describe("<Cart/>", () => {
  describe("montage", () => {
    test("should mount", () => {
      render(<Provider store={store}><Cart items={[]} /></Provider>);
      const cartNode = screen.getByTestId("Cart");
      expect(cartNode).toBeInTheDocument();
    });
  });
});
