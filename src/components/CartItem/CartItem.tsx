import { useDispatch } from "react-redux";
import I_Item from "../../interfaces/Item";
import { add, del, remove } from "../../store/cart";
import "./cartItem.css";

export interface I_CartItemProps {
  add: (arg0: I_Item) => void,
  remove: (arg0: I_Item) => void,
  del: (arg0: I_Item) => void
}
/**
 * Composant pour les items de cart
 * @param {I_Item & I_CartItemProps }props
 * @returns ReactELement
 */
export const CartItem: React.FC<I_Item & I_CartItemProps> = ({
  id,
  image,
  title,
  price,
  quantite = 0,
  add,
  remove,
  del
}) => {
  return (
    <div className="cartItem" data-testid='CartItem'>
      <img className="cartItem__image" src={image} alt="item" />

      <div className="cartItem__info">
        <p className="cartItem__title">{title}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="cartItem__incrDec">
          <button onClick={()=>remove({id:id,title:title,price:price,image:image})}>-</button>
          <p>{quantite}</p>
          <button onClick={()=>add({id:id,title:title,price:price,image:image})}>+</button>
        </div>
        <button onClick={()=>del({id:id,title:title,price:price,image:image})} className="cartItem__removeButton" >Remove</button>
      </div>
    </div>
  );
};

const CartItemConnected: React.FC<I_Item> = (props) => {
  const d = useDispatch();
  return (
    <CartItem
      {...props}
      add={() => d(add(props))}
      remove={() => d(remove({id:props.id}))}
      del={(produit: I_Item) => d(del(produit))}
    />
  );
};
export default CartItemConnected