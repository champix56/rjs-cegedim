import { useDispatch } from "react-redux";
import I_Item from "../interfaces/Item";
import { add } from "../store/cart";
import "./item.css";
/*interface I_ItemPropsFunctions {
  addCart: Function;
}
const Item: React.FC<I_ItemPropsFunctions & I_Item> = function ({*/
  const Item: React.FC<I_Item & {addCart:Function}> = function ({
  id,
  title,
  image,
  price,
  addCart,
}) {
  return (
    <div className="item">
      <div className="item__info">
        <p className="item__title">{title}</p>
        <p className="item__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} alt="item" />
      <button
        onClick={(evt) =>
          addCart({ id: id, image: image, price: price, title: title })
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

const ItemConnected:React.FC<I_Item>=(props)=> {
  const d = useDispatch();
  return <Item addCart={(produit:I_Item) => d(add(produit))} {...props} />;
}
export default ItemConnected;