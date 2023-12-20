import React, { FC } from 'react';
import I_Item from '../../interfaces/Item';
import CartItem from '../CartItem';

interface CartListProps {
  items:Array<I_Item>

}

const CartList: FC<CartListProps> = (props) => (
  <div className="CartList" data-testid="CartList">
    {props.items.map(e=><CartItem {...e} key={`cartItem-${e.id}`}/>)} 
  </div>
);

export default CartList;
