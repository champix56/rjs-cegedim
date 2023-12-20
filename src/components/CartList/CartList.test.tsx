import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CartList from "./CartList";
import store from "../../store/store";
import { Provider } from "react-redux";
import { add } from "../../store/cart";

describe("<CartList />", () => {
  beforeAll(() => {
    store.dispatch(
      add({ id: 1, image: "", price: 23, title: "", quantite: 1 })
    );
  });
  test("it should mount", () => {
    render(
      <Provider store={store}>
        <div data-testid="dv">
        <CartList
          items={[]}
        /> 
        </div>
      </Provider>
    );
    const cartList = screen.getByTestId("CartList");
    const dv = screen.getByTestId("dv");
    expect(cartList).toBeInTheDocument();
    expect(dv).toHaveLength(1);
  });
  
  test("it should mount/dismount all items", () => {
    render(
      <Provider store={store}>
        <CartList items={store.getState().cart.items} />
      </Provider>
    );

    const cartList = screen.getByTestId("CartList");
    const cartItem = screen.getByTestId("CartItem");
    expect(cartList).not.toBeEmptyDOMElement();
    expect(cartItem).toBeInTheDocument();
  });
});
