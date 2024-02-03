import React, { useEffect, useState } from 'react'
import { CDN_URL, MENU_URL } from '../utils/constant';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ResturantMenu = () => {

    const { resId } = useParams();
    // console.log(resId)

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId)
        const json = await data.json()
        console.log(json);

        setResInfo(json);
    };

    if (resInfo === null) return <Shimmer />;

    const { name,
        costForTwoMessage,
        areaName,
        cuisines,
        cloudinaryImageId,

        imageId,

        avgRating } = resInfo?.data?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);


    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines}  {costForTwoMessage}</p>
            <p>{areaName}</p>
            <img className="rounded-5 " height={200} width={324} src={CDN_URL + cloudinaryImageId} alt="" />
            <h3>Menu Card</h3>
            <ul>
                {
                    itemCards.map((items) => (
                        <li key={items.card.info.id} >
                            {items.card.info.name} - {" "}
                            ₹{items.card.info.price / 100}
                        </li>
                    ))
                }
            </ul>

        </div>

    )
}

export default ResturantMenu;