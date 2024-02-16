import { LOGO_URL } from "../utils/constant"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext)
    const cartItems = useSelector((store) => store.cart.items)
    return (
        <nav className="navbar navbar-expand-lg  bg-white" >
            <div className="container-fluid d-flex justify-content-between shadow-sm" >
                <div className="img-fluid mx-5 p-2 navbar-brand">
                    <Link to="/">
                        <img className="img-responsive" height={70} src={LOGO_URL} alt="logo_icon" />
                    </Link>
                </div>
                <div >
                    <ul className="d-flex align-items-center flex-wrap justify-content-center mx-5" style={{ cursor: "pointer" }} >
                        <li className="px-2 list-group-item mx-3 fw-semibold">OnlineStatus: {onlineStatus ? "✅" : "🔴"}</li>
                        <li className="px-2 list-group-item mx-3 fw-semibold"><Link to="/about"></Link> AboutUs </li>
                        <li className="px-2 list-group-item mx-3 fw-semibold"><i class="fa-regular fa-circle-question"></i><Link to="/contact"></Link> ContactUs</li>
                        <li className="px-2 list-group-item mx-3 fw-semibold"><i className="fas fa-shopping-cart" />
                        <Link to="/cart">Cart({cartItems.length}) </Link> items</li>
                        <li className="px-2 list-group-item mx-3 fw-semibold"><i className="fa-solid fa-user-tie" /><Link to="/login"></Link> Sign In</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;