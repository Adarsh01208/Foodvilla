import { CDN_URL } from "../utils/constant"

const ResturantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime } = resData?.data;

    return (
        <div className="col-md-2 mt-5    ">
            <div className="card shadow-lg m-1 rounded-3">
                <img className="img-fluid" height={160} width={200} src={CDN_URL + cloudinaryImageId} alt="" />
                <div className="card-body">
                    <p className="text-muted">{name}  </p>
                    <p>{cuisines} </p>
                    <p className="">
                        <i className="fa-solid fa-star text-warning"></i>{avgRating}
                        <i className="fa-solid fa-user"></i> {costForTwo}
                    </p>
                    <p>{deliveryTime} </p>
                </div>
            </div>
        </div>
    );
};

export default ResturantCard;