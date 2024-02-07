import React, { useState, useEffect } from 'react'
import { SWIGGY_URL } from './constant';

const useFetchResturant = () => {

    const [restaurant, setRestaurants] = useState();

    useEffect(() => {
        fetchResturant();
    },[restaurant])

    const fetchResturant = async () => {
        const data = await fetch(SWIGGY_URL)
        const json = await data.json();
        //   setRestaurants(json);
        setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // console.log(json);
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return restaurant
}

export default useFetchResturant;