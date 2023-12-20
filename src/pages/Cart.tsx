import "./cart.css";
import Total from "../components/Total";
// import CartItem from "../components/CartItem.lazy";
import I_Item from "../interfaces/Item";
import { useSelector } from "react-redux";
import CartList from "../components/CartList/CartList.lazy";
import { useTranslation } from 'react-i18next';
interface I_CartProps {
  items: Array<I_Item>;
}


 

export const Cart: React.FC<I_CartProps> = function (props) {
  const { t } = useTranslation()
  return (
    <div className="cart" data-testid="Cart">
      <div className="cart__left">
        <div>
          <h3>Shopping Cart{t('shopingCart')}</h3>
        </div>
        {/* {props.items.length>0&&<CartItemNL {...props.items[0]} key={`cartItem-${props.items[0].id}`}/>} */}
        <hr/>
        <CartList items={props.items}/>
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
