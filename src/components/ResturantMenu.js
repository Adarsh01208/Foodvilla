import React from 'react'
import { CDN_URL } from '../utils/constant';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useResturantMenu from '../Hooks/useResturantMenu';
import ResturantCategory from './ResturantCategory';


const ResturantMenu = () => {

    const { resId } = useParams();
    const resInfo = useResturantMenu(resId);
    if (resInfo === null) return <Shimmer />;
    const { name, costForTwoMessage, areaName, cuisines, cloudinaryImageId, avgRating } = resInfo?.data?.cards[0]?.card?.card?.info;
    const itemsCategories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className='container'>
            <div className='row'>
                <div className='d-flex justify-content-center' >
                    <div className='card w-75 mt-5   '>
                        <div className='card-header '>
                            <div className='d-flex justify-content-between '>
                                <div className='p-3' >
                                    <h5>{name}</h5>
                                    <div className='text-secondary' >{cuisines} </div>
                                    <div className='text-secondary'>{areaName}</div>
                                    <div><i className="fa-solid fa-star text-success fw-semibold"> </i> {avgRating}</div>
                                    <hr />
                                    <div> {costForTwoMessage}</div>
                                </div>
                                <div className='img-fluid p-3'>
                                    <img className="rounded-5 img-fluid shadow-sm  " height={130} width={130} src={CDN_URL + cloudinaryImageId} alt="" />

                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            {
                                itemsCategories.map((category, index) => (
                                    //control components
                                    <ResturantCategory key={itemsCategories?.card?.card?.title} data={category?.card?.card}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResturantMenu;