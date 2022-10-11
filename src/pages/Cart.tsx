import "./cart.css";
import Total from "../components/Total";
 import CartItem from "../components/CartItem/CartItem.lazy";
import I_Item from "../interfaces/Item";
import { useSelector } from "react-redux";
interface I_CartProps {
  items: Array<I_Item>;
}

const Cart: React.FC<I_CartProps> = function (props) {
  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          <h3>Shopping Cart</h3>
        </div>
        {props.items.map((e,i)=><CartItem {...e} key={`cartItem-${e.id}`}/>
        )}
      </div>
      <div className="cart__right">
        <Total />
      </div>
    </div>
  );
};
const CartConnected: React.FC<{}> = (props) => {
  const items = useSelector((s: any) => s.cart.items);
  return <Cart items={items} />;
};
export default CartConnected;
