import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { SWIGGY_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link, Navigate, useNavigate } from "react-router-dom";


const Body = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    setFilteredResList
      (restaurants.filter((res) => res.info.name.toLowerCase().includes(searchTerm.toLowerCase())));
  }, [searchTerm]);

  useEffect(() => {
    getRestaurants();
  }, []);

  // useEffect to get the restaurant data from Swiggy API and update the state variable restaurants using async/await function
  const getRestaurants = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
    console.log(json);
    console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    // setFilteredResList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

  };

  // using try... catch to handle the error
  // async function getRestaurants() {
  //   // handle the error using try... catch
  //   try {
  //     const response = await fetch(SWIGGY_URL);
  //     const json = await response.json();

  //     // initialize checkJsonData() function to check Swiggy Restaurant data
  //     async function checkJsonData(jsonData) {
  //       for (let i = 0; i < jsonData?.data?.cards.length; i++) {

  //         // initialize checkData for Swiggy Restaurant data
  //         let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  //         // if checkData is not undefined then return it
  //         if (checkData !== undefined) {
  //           return checkData;
  //         }
  //       }
  //     }
  //     // call the checkJsonData() function which return Swiggy Restaurant data
  //     const resData = await checkJsonData(json);
  //     console.log(resData);
  //     // update the state variable restaurants with Swiggy API data
  //     setRestaurants(resData);
  //     setFilteredResList(resData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return restaurants?.length === 0 ? (<Shimmer />) : (
    <div className="container " >
      <div className="mt-5">
        <input type="text" placeholder='Search Items' className='form-control w-50 border border-2 shadow-sm rounded-2  m-auto' onChange={event => setSearchTerm(event.target.value)} />
      </div>
      <div className="col-md-2 d-flex justify-content-center mt-5 " >
        <button className="btn rounded-4 border shadow-sm mx-2 p-2 " onClick={() => setFilteredResList(restaurants)}>All</button>
        <button className="btn rounded-4 border shadow-sm mx-2 p-2" onClick={() => {
          const topRatedList = restaurants.filter((res) => res.info.avgRating > 4.6);
          console.log(topRatedList);
          setFilteredResList(topRatedList);
        }} >Top Rated</button>
      </div>

      <div className="d-flex flex-wrap">
        {filteredResList.map((restaurant) => (
          // <ResturantCard key={restaurant?.info?.id} resData={restaurant} />
          <Link className="text-decoration-none" to={"/resturants/" + restaurant?.info?.id}><ResturantCard key={restaurant?.info?.id} resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  )
};

export default Body;