import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { SWIGGY_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);

    useEffect(() => {
    
        setFilteredResList
                (filteredResList.filter((res) => res.info.name.toLowerCase().includes(searchTerm.toLowerCase())));
    }, [searchTerm]);

    useEffect(() => {
        getRestaurants();
    }, []);


async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(SWIGGY_URL);
      const json = await response.json();

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          // initialize checkData for Swiggy Restaurant data
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);
      console.log(resData);
      // update the state variable restaurants with Swiggy API data
      setRestaurants(resData);
      setFilteredResList(resData);
     
    } catch (error) {
      console.log(error);
    }
  }

    return restaurants.length === 0 ? (<Shimmer/>) : (
        <div className="container" >
            <div className="mt-5">
                <input type="text" placeholder='Search Items' className='form-control w-50 border border-2 shadow-sm rounded-2  m-auto' onChange={event => setSearchTerm(event.target.value)} />
            </div>
            <div className="col-md-2 d-flex justify-content-center mt-5 p-0" >
                <button className="btn rounded-5 border shadow-sm" onClick={() => {
                    const topRatedList = filteredResList.filter((res) => res.info.avgRating > 4.3);
                    console.log(topRatedList);
                    setFilteredResList(topRatedList);
                }} >Top Rated Items</button>
            </div>
            <div className="d-flex flex-wrap">
                {filteredResList.map((restaurant) => (
                    <ResturantCard key={restaurant.info.id} resData={restaurant} />
                    // <ResturantCard key={restaurant?.info?.id} {...restaurant?.info} />
                ))}
            </div>
        </div>
    )
};

export default Body;