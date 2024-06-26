import { CDN_URL } from "../utils/constant"

const ResturantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla, areaName } = resData?.info;

    return (
        <div className="col-md-4">
            <div className="card   m-4  rounded-5 border-0 homecard ">
                <div className="card-heading">
                    <img className="rounded-5 " height={200} width={320} src={CDN_URL + cloudinaryImageId} alt="" />
                </div>
                <div className="card-body rounded-5 border-0 ">
                    <div className="text-dark fw-semibold">
                        {name}
                    </div>
                    <div>
                        {avgRating} • {sla.deliveryTime} min
                    </div>
                    <div className="fw-light">
                        {cuisines.join(', ')}
                    </div>

                    <div className="fw-light">
                        <i className="fa-solid fa-user "> </i> {costForTwo}
                    </div>
                    <div className="fw-light ">
                        <i class="fa-solid fa-location-dot "></i> {areaName}
                    </div>
                </div>
            </div>
        </div>
    );
};

//Higer order function  (HOC)
// which takes a component and returns a new component

 export const withPromotedLabel = (ResturantCard) => {
    return (props) => {
        return (
            <div>
                <label className="h1">Promoted this</label>
                <ResturantCard {...props} />
            </div>
        )
    }
}

export default ResturantCard;