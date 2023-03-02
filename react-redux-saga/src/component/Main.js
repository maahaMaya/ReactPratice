import { addToCart, removeToCart, emptyCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/productAction';
import { useEffect } from 'react';


function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data)

  useEffect(() => {
    dispatch(productList())
  }, [])
  return (
    <div className="App">
      {/* <div>
        <button onClick={() => dispatch(emptyCart(product))}>Empty Cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(productList(product))}>Call product List</button>
      </div> */}
      <div className='product-container'>
        {
          data.map((item) =>
            <div className='product-item' key={item.id}>
              <img src={item.photo} height="150px" width="200px" alt="" />
              <div>Name : {item.name}</div>
              <div>Color : {item.color}</div>
              <div>Price : {item.price}</div>
              <div>Category : {item.category}</div>
              <div>Brand : {item.brand}</div>
              <div>
                <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
                <button onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button>
              </div>
            </div>)
        }
      </div>
    </div>
  );
}

export default Main;
