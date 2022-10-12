import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CartList from './CartList';

describe('<CartList />', () => {
  test('it should mount', () => {
    render(<CartList items={[{id:1,image:'',price:23,title:'',quantite:1}]}/>);
    
    const cartList = screen.getByTestId('CartList');

    expect(cartList).toBeInTheDocument();
  });
});