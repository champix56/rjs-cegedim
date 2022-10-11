import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import store from "../store/store";
import { Provider } from "react-redux";
import HomeConnected from "./Home";

describe('<Home/>', () => {
    test('should show all', () => {
        render(<Provider store={store}><HomeConnected /></Provider>)
        const l = store.getState().stock.items.length;
        const nl = screen.getAllByTestId('map-products').length
        expect(nl).toBe(l);
    })
})