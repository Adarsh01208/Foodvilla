import React from 'react'
import { CDN_URL } from '../utils/constant';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { ITEMS_IMG_ID } from '../utils/constant';
import useResturantMenu from '../utils/useResturantMenu';


const ResturantMenu = () => {

    const { resId } = useParams();
    // console.log(resId)
    const resInfo = useResturantMenu(resId)

    if (resInfo === null) return <Shimmer />;
    console.log(resInfo)


    const { name,
        costForTwoMessage,
        areaName,
        cuisines,
        cloudinaryImageId,
        imageId,
        avgRating } = resInfo?.data?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //  console.log(itemCards);
    
    const itsmsCategories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );

    console.log(itsmsCategories);
    return (
        <div className='container'>
            <div className='row'>
                <div className='d-flex justify-content-center' >
                    <div className='card w-75 mt-5 shadow-lg  '>
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
                        <div className='card-body   '>
                            <div className='' >
                                {
                                    itemCards.map((items) => (
                                        <div>
                                            <div className=' p-3 border border-1 m-3 shadow-lg d-flex  justify-content-between  ' key={items.card.info.id}>
                                                <div className='w-50'>
                                                    <div className='text-dark fw-bold '>  {items.card.info.name} - {" "}</div>

                                                    <div className='text-semi-bold'>
                                                        ₹{items.card.info.price / 100 || items.card.info.defaultPrice / 100}
                                                    </div>
                                                    <div className='text-secondary lh-sm' style={{ fontSize: "13px" }} >
                                                        {items.card.info.description}
                                                    </div>
                                                </div>
                                                <div >
                                                    <img className='img-fluid   rounded-3' height={100} width={100} src={ITEMS_IMG_ID + items.card.info.imageId} alt="" />

                                                    <div className='my-2 text-center'>
                                                        <button className='btn btn-success bg-white text-success px-4'>Add</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ResturantMenu;