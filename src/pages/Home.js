import './home.css'
import Item from '../components/Item'
import { ShoppingCart } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home(props) {

  const navigate = useNavigate()

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          {props.items.map((e) =>
            <Item
              id={e.id}
              title={e.title}
              price={e.price}
              image={e.image}
              key={`produit-${e.id}`}
              data-testid='map-products'
            />
          )}
        </div>
      </div>
      {props.count > 0 && <div className='shopping-cart' onClick={() => navigate('/cart')}>
        <ShoppingCart id='cartIcon' />
        <p>{props.count}</p>
      </div>}
    </div>
  )
}

const HomeConnected = (props) => {
  const items = useSelector((s) => s.stock.items)
  const count = useSelector((s) => {
    let r = 0;
    s.cart.items.map(e => {
      r += e.quantite
    });
    return r;
  })
  return <Home items={items} count={count} />
}
export default HomeConnected