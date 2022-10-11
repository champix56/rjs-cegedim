import { useDispatch } from 'react-redux'
import { add } from '../store/cart';
import './item.css'

function Item({ id, title, image, price, addCart }) {
  return (
    <div className="item">
      <div className="item__info">
        <p className="item__title">{title}</p>
        <p className="item__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img
        src={image}
        alt="item"
      />
      <button onClick={(evt)=>addCart({ id: id, image: image, price: price, title: title })}>Add to Cart</button>
    </div>
  )
}

export default function ItemConnected(props) {
  const d = useDispatch();
  return <Item addCart={(produit) => d(add(produit))} {...props} />
}
