import { LOGO_URL } from "../utils/constant"

const Header = () => {
    return (
        <div className="container-fliud d-flex justify-content-between border shadow-sm  " >
            <div className="img-fluid m-2 ">
                <img height={50} src={LOGO_URL} alt="logo_icon" />
            </div>
            <div className="nav-items d-flex align-items-center ">
                <ul className="d-flex align-items-center mx-5 ">
                    <li className="px-3 list-group-item mx-3 fw-semibold "><i class="fa-solid fa-magnifying-glass"></i>Search </li>
                    <li className="px-3 list-group-item mx-3 fw-semibold"><i class="fa-solid fa-group-arrows-rotate"></i> Offer </li>
                    <li className="px-3  list-group-item mx-3 fw-semibold"> <i class="fa-regular fa-circle-question"></i> Help</li>
                    <li className="px-3  list-group-item mx-3 fw-semibold"><i class="fa-regular fa-user"></i> Sign in</li>
                    <li className="px-3  list-group-item mx-3 fw-semibold"> <i class="fa-solid fa-bag-shopping"></i>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header 