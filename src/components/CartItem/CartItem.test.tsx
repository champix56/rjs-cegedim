import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CartItem from "./CartItem";
import store from "../../store/store";
import { Provider } from "react-redux";
import { del } from "../../store/cart";
const dummyargs = {
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
  test('it shoud dismount on remove', () => {
    
    test("it should mount", () => {
      render(
        <Provider store={store}>
          <CartItem {...dummyargs} />
        </Provider>
      );
      store.dispatch(del(dummyargs));
      expect(test).not.toBeInTheDocument();
    });
   })
});
