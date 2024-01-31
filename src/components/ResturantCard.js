import { CDN_URL } from "../utils/constant"

const ResturantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwoString,
        deliveryTime } = resData?.data;

    return (

        <div className="col-md-3">
            <div className="card  m-4 rounded-5 border-0 ">
                <img className="rounded-5" height={200} width={245} src={CDN_URL + cloudinaryImageId} alt="" />
                <div className="card-body rounded-5 border-0">
                    <div className="text-dark fw-semibold">
                        {name}
                    </div>
                    <div>
                        <i className="fa-solid fa-star text-success fw-semibold"> </i> {avgRating} • {deliveryTime} min
                    </div>
                    <div className="fw-light">
                        {cuisines.join(', ')}
                    </div>
                   
                    <div className="fw-light"> 
                    <i className="fa-solid fa-user "> </i> {costForTwoString}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ResturantCard;