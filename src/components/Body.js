import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState } from "react";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant)=> restaurant.data.name.includes(searchText));
    return filterData;
}

const Body = ()=> {
    const [searchTxt, setSearchTxt] = useState("King");
    const [restaurants, setRestaurants] = useState(restaurantList);

    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search"
                 value={searchTxt} onChange={(e)=>{setSearchTxt(e.target.value)}} />

                <button type="button" className="search-button"
                 onClick={()=>{
                    const data = filterData(searchTxt, restaurants);
                    setRestaurants(data)
                 }}>
                    Search
                </button>
            </div>
            <div className="restaurant-list">
            {
                restaurants.map((restaurant)=>{
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                })
            }
        </div>
        </>
    )
};

export default Body;