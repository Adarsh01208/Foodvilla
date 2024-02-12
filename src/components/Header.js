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
        <div className="container-fliud d-flex justify-content-between border shadow  " >
            <div className="img-fluid mx-5 p-2  ">
                <img height={70} src={LOGO_URL} alt="logo_icon" />
            </div>
            <div className="nav-items d-flex align-items-center ">
                <ul className="d-flex align-items-center  mx-5 ">
                    <li className="px-2 list-group-item mx-3 fw-semibold "> OnlineStatus: {onlineStatus ? "✅" : "🔴"} </li>
                    <li className="px-2 list-group-item mx-3 fw-semibold ">  <Link className=" text-decoration-none text-dark" to="/grocery">Grocery</Link> </li>
                    <li className="px-2 list-group-item mx-3 fw-semibold ">  <Link className=" text-decoration-none text-dark" to="/about">AboutUs</Link> </li>
                    <li className="px-2 list-group-item mx-3 fw-semibold"><i class="fa-solid fa-group-arrows-rotate"></i> <Link className=" text-decoration-none text-dark" to="/">Home</Link> </li>
                    <li className="px-2  list-group-item mx-3 fw-semibold"> <i class="fa-regular fa-circle-question"></i> <Link className=" text-decoration-none text-dark" to="/contact">ContactUs</Link></li>
                    <li className="px-2 list-group-item mx-3 fw-semibold"> <i class="fa-solid fa-bag-shopping"></i> <Link className=" text-decoration-none text-dark" to="/cart">Cart ({cartItems.length}) items </Link> </li>
                    <li className="px-2 list-group-item mx-3 fw-semibold"> <i class="fa-regular fa-user"></i> <button className="btn btn-warning py-1"><Link className=" text-decoration-none" to="/login">Login</Link> </button> </li>
                    <li className="px-2 list-group-item mx-3 fw-semibold"> {loggedInUser}  </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;