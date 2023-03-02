import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/productAction";

const Header = () => {
    const result = useSelector((state) => state.cartData);
    const dispatch = useDispatch();
    console.warn("redux data in headers", result)
    return (
        <div className="header">
            <Link to="/"><h1 className="logo">E-Com</h1></Link>
            <div className="serach-box">
                <input type="text" onChange={(event) => dispatch(productSearch(event.target.value))} placeholder="Search Product" />
            </div>
            <Link to="/cart">
                <div className="cart-div">
                    <span>{result.length}</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
                </div>
            </Link>
        </div>
    )
}
export default Header;