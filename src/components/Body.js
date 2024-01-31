import ResturantCard from "../components/ResturantCard";
import resList from "../utils/mockData";
import { useState , useEffect } from "react";

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
        <div>
            <div className=" mt-5">
                <input type="text" placeholder='Search Items' className='form-control w-75  m-auto'  onChange={event => setSearchTerm(event.target.value)}
               />
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