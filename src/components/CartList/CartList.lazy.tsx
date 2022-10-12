import React, { lazy, Suspense } from 'react';
import I_Item from '../../interfaces/Item';
import Loading from '../Loading/Loading';

const LazyCartList = lazy(() => import('./CartList'));

const CartList = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; items:Array<I_Item> }) => (
  <Suspense fallback={<Loading/>}>
    <LazyCartList {...props} />
  </Suspense>
);

export default CartList;
