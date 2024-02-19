import { LOGO_URL } from "../utils/constant"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import UserContext from "../Hooks/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext)
  const cartItems = useSelector((store) => store.cart.items)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container">
      <div className="img-fluid mx-5 p-2 navbar-brand">
           <Link to="/">
            <img className="img-responsive" height={70} src={LOGO_URL} alt="logo_icon" />
           </Link>
      </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mb-2 nav-link">
              OnlineStatus: {onlineStatus ? "✅" : "🔴"}
            </li>
            <li className="nav-item mb-2 nav-link ">
              <Link className="link  " to="/about">AboutUs</Link>
            </li>
            <li className="nav-item mb-2 nav-link ">
              <Link className="link" to="/contact"> <i class="fa-regular fa-circle-question" /> ContactUs</Link>
            </li>
           
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
          <li className="nav-item mb-2 mx-1 nav-link ">
            <Link className="link" to="/cart"> <i className="fas fa-shopping-cart" /> Cart({cartItems.length}) items </Link>
          </li>
          <li className="nav-item mb-2 mx-1 nav-link">
            <Link className="link" to="/login"> <i className="fa-solid fa-user-tie" /> Sign In</Link>
          </li>
          </ul>
        </div>
      </div>
    </nav>


  );
};

export default Header;