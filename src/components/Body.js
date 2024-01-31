import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResList, setFilteredResList] = useState(resList);

    useEffect(() => {
        setFilteredResList(
            resList.filter(restaurant =>
                restaurant.data.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]);
    return (
        <div >

            <div className="mt-5">
                <input type="text" placeholder='Search Items' className='form-control w-50 border border-2 shadow-sm rounded-2  m-auto' onChange={event => setSearchTerm(event.target.value)} />
            </div>
            <div className="col-md-2 d-flex justify-content-center mt-5 p-0" >
                <button className="btn rounded-5 border shadow-sm" onClick={() => {
                    const topRatedList = filteredResList.filter((res) => res.data.avgRating > 4.3);
                    console.log(topRatedList);
                    setFilteredResList(topRatedList);
                }} >All Items</button>

            </div>

            <div className="d-flex flex-wrap mx-3">
                {filteredResList.map((restaurant) => (
                    <ResturantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
};

export default Body;