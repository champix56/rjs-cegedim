import './home.css'
import Item from '../components/Item'
import { ShoppingCart } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useSelect } from '@mui/base'
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
            />
          )}
        </div>
      </div>
      <div className='shopping-cart' onClick={() => navigate('/cart')}>
        <ShoppingCart id='cartIcon' />
        <p>0</p>
      </div>
    </div>
  )
}

const HomeConnected = (props) => {
  const items = useSelector((s) => s.stock.items)
  return <Home items={items} />
}
export default HomeConnected