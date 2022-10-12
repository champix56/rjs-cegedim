import './total.css'
import { useSelector } from 'react-redux'
function Total(props) {

  return (
    <div className="total">
      <h2>ORDER SUMMARY</h2>
      <div>
        <p className="total__p">
          total ({props.count} item{props.count>1?'s':''}) : <strong>${props.price}</strong>
        </p>
      </div>
    </div>
  )
}


function TotalConnected() {
  const values = useSelector(s => {
    let total = 0;
    let count = 0;
    s.cart.items.forEach(e => { total += (e.quantite * e.price); count += e.quantite })
    return { total: total, count: count };
  });
  return (
    <Total price={values.total} count={values.count} />
  )
}
export default TotalConnected
//export default Total