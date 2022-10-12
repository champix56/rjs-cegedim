import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CartItem from "./CartItem";
import store from "../../store/store";
import { Provider } from "react-redux";
import { add } from "../../store/cart";
import I_Item from "../../interfaces/Item";
export const dummyargs = {
  id: 0,
  title:
    "Kenwood kMix Stand Miser for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk",
  price: 229,
  image:
    "https://st.depositphotos.com/1765561/4857/i/450/depositphotos_48579839-stock-photo-opened-blue-stand-mixer.jpg",
  quantite: 2,
};
describe("<CartItem />", () => {
  test("it should mount", () => {
    render(
      <Provider store={store}>
        <CartItem {...dummyargs} />
      </Provider>
    );
    const test = screen.getByTestId("CartItem");
  
    expect(test).toBeInTheDocument();
  });
  test("it should remove", () => {
    store.dispatch(add(dummyargs));
    const item1 = store.getState().cart.items[0] as I_Item;
    expect(item1).toBeTruthy();
    render(
      <Provider store={store}>
        <CartItem {...item1} />
      </Provider>
    );
    screen.getByTestId("del").click();
    expect(store.getState().cart.items[0]).toBeFalsy();
  });
});
