import React, { lazy, Suspense } from 'react';
import I_Item from '../../interfaces/Item';

const CartItem = lazy(() => import('./CartItem'));

const LazyCartItem:React.FC<I_Item> = (props) => (
  <Suspense fallback={null} >
    <CartItem {...props} />
  </Suspense>
);

export default LazyCartItem;