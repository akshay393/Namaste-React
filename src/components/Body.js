import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

const Body = ()=> {
    const [searchTxt, setSearchTxt] = useState("King");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(()=>{
        getRestaurants();
    },[])

    async function getRestaurants() {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6838082&lng=77.36330800000002&page_type=DESKTOP_WEB_LISTING');
        const jsonData = await data.json();
        console.log(jsonData)
        setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards)
    }

    return (allRestaurants?.length==0) ? <Shimmer /> : (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search"
                 value={searchTxt} onChange={(e)=>{setSearchTxt(e.target.value)}} />

                <button type="button" className="search-button"
                 onClick={()=>{
                    const data = filterData(searchTxt, allRestaurants);
                    setFilteredRestaurants(data)
                 }}>
                    Search
                </button>
            </div>
            <div className="restaurant-list">
            {
                filteredRestaurants.length == 0 ?
                <h1>No Result Found</h1> :
                filteredRestaurants.map((restaurant)=>{
                    return <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
                        <RestaurantCard {...restaurant.data} />
                    </Link>
                })
            }
        </div>
        </>
    )
};

export default Body;