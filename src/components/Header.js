import  {LOGO_URL} from "../utils/constant"

const Header = () => {
    return (
        <div className="container-fliud d-flex justify-content-between border shadow-sm " >
            <div className="img-fluid m-2 ">
                <img height={50} src={LOGO_URL} alt="logo_icon" />
            </div>
            <div className="nav-items d-flex">
                <ul className=" d-flex align-items-center ">
                    <li className="px-3 list-group-item ">Home </li>
                    <li className="px-3 list-group-item"> About</li>
                    <li className="px-3  list-group-item"> Contact</li>
                    <li className="px-3  list-group-item"> Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header 