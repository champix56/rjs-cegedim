import { lazy, Suspense } from "react";
import I_Item from "../interfaces/Item";
import Loading from "./Loading/Loading";


const CartItem = lazy(() => import('./CartItem'));

const CartItemLazy = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }&I_Item) => (
  <Suspense fallback={<Loading/>}>
    <CartItem {...props} />
  </Suspense>
);
export default CartItemLazy;