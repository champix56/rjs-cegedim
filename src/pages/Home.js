import './home.css'
import Item from '../components/Item'
import { ShoppingCart } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useSelect } from '@mui/base'
import { useSelector } from 'react-redux'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useEffect, useRef, useState } from 'react'

function Home(props) {

  const navigate = useNavigate()
  // const filedRef = useRef(null)
  // const emptyRef = useRef(null)
  // const [state, setstate] = useState('empty')
  // const nodeRef = state === 'empty' ? emptyRef : filedRef

  // useEffect(() => {
  //   setstate(props.count > 0 ? 'filed' : 'empty')
  // }, [props.count])
  const ref = useRef(null);
  const [state, setstate] = useState(false);
  useEffect(() => {
    if(!state&&props.count>0 )
      setstate(true);
  }, [props.count])
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

      <div>
        {/* <SwitchTransition mode={'out-in'}>  
          <CSSTransition
            key={state}
            nodeRef={nodeRef}
            addEndListener={(done) => {
              nodeRef.current.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
            <div >
              {props.count > 0 && <div ref={nodeRef} className='shopping-cart'>
                <ShoppingCart id='cartIcon' />
                <p>{props.count}</p></div>}
          </div>
        </CSSTransition>
       </SwitchTransition> */}
       <CSSTransition nodeRef={ref} in={state} timeout={2500} classNames="fade">
       <div ref={ref}>
       {props.count > 0 &&  <div className='shopping-cart' onClick={() => navigate('/cart')}>
                <ShoppingCart id='cartIcon' />
                <p>{props.count}</p></div>}
                </div>
      </CSSTransition>


    </div>

    </div >
  )
}

const HomeConnected = (props) => {
  const items = useSelector((s) => s.stock.items)
  const count = useSelector((s) => { let r = 0; s.cart.items.map(e => { r += e.quantite }); return r; })
  return <Home items={items} count={count} />
}
export default HomeConnected