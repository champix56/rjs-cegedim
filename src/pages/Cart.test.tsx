import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cart from './Cart';
import { Provider } from 'react-redux';
import store from '../store/store';
import { add, del } from '../store/cart';
import { dummyargs } from '../components/CartItem/CartItem.test';

describe('<Cart />', () => {
    test('it should mount list', () => {
        render(<Provider store={store}><Cart/></Provider>);
        store.dispatch(add(dummyargs))
        const templateName = screen.getByTestId('CartItem');
        
        expect(templateName).toBeInTheDocument();
      });
      test('it should dismount list on delete', () => {
        render(<Provider store={store}><Cart/></Provider>);
        store.dispatch(add(dummyargs))
        store.dispatch(del(dummyargs))
        const templateName = screen.getByTestId('list');
        expect(templateName.childNodes.length).toBe(0);
      });
});