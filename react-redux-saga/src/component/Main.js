import { addToCart } from '../redux/action';
import { useDispatch } from 'react-redux';


function Main() {
  const dispatch = useDispatch();

  const product = {
    name : "IPHONE",
    category : "mobile",
    price : 10000,
    color: "red"
  }
  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
}

export default Main;
