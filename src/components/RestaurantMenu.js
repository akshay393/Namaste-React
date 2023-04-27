import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { IMG_URL } from "../constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    
    const restaurantData = useRestaurantMenu(resId)

    return (!restaurantData) ? <Shimmer/> : (
        <div className="menu">
            <div>
                <h1>Restaurant Id : {resId}</h1>
                <img src={IMG_URL + restaurantData?.cloudinaryImageId}></img>
                <h2>{restaurantData?.name}</h2>
                <h3>{restaurantData?.areaName}</h3>
                <h3>{restaurantData?.city}</h3>
                <h3>{restaurantData?.avgRating}</h3>
                <h3>{restaurantData?.costForTwoMessage}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                {/* <ul>
                    {
                        restaurantDetail[1].map((item)=>{
                            return <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                        })
                    }
                </ul> */}
            </div>
        </div>
    )
}

export default RestaurantMenu;