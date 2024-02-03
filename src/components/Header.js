import { LOGO_URL } from "../utils/constant"
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");

    // console.log('header render');

    // * if no dependency array => useEffect is called on every component render of the component
    // * if the dependency array is empty => useEffect is called only on the initial render(just once) of the component
    // * if the dependency array contains a dependency => useEffect is called everytime the value of the depencecy changes
    // * Dependency: A depency can be a state variable (or) a function

    // useEffect(() => {
    //   console.log(`useEffect Called`);
    // }, [btnNameReact]);

    //onClick={() => { loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn('Login'); }}  > {loginBtn}
    return (
        <div className="container-fliud d-flex justify-content-between border shadow  " >
            <div className="img-fluid m-2 ">
                <img height={50} src={LOGO_URL} alt="logo_icon" />
            </div>
            <div className="nav-items d-flex align-items-center ">
                <ul className="d-flex align-items-center  mx-5 ">
                    <li className="px-3 list-group-item mx-3 fw-semibold "><i class="fa-solid fa-magnifying-glass"></i>Search </li>
                    <li className="px-3 list-group-item mx-3 fw-semibold"><i class="fa-solid fa-group-arrows-rotate"></i> <Link className=" text-decoration-none text-dark" to="/">Home</Link> </li>
                    <li className="px-3  list-group-item mx-3 fw-semibold"> <i class="fa-regular fa-circle-question"></i> <Link className=" text-decoration-none text-dark" to="/contact">ContactUs</Link></li>
                    <li className="px-3 list-group-item mx-3 fw-semibold"> <i class="fa-solid fa-bag-shopping"></i>Cart</li>
                    <li className="px-3 list-group-item mx-3 fw-semibold"> <i class="fa-regular fa-user"></i> <button className="btn btn-warning py-1"><Link className=" text-decoration-none" to="/login">Login</Link> </button> </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;