import { useState, useEffect } from "react";
import { restaurantDataUrl } from "../constants";

const useRestaurantMenu = (resId) => {
    const [restaurantData, setRestaurantData] = useState(null)
    // const [restaurantMenu, setRestaurantMenu] = useState([])
    // const [restaurantDetail, setRestaurantDetail] = useState([])

    useEffect(() => {
        getRestaurantData();
    },[])

    async function getRestaurantData() {
        // var restaurantFullDetail = [];
        const data = await fetch(restaurantDataUrl+resId);
        const json = await data.json();
        setRestaurantData(json?.data?.cards[0]?.card?.card?.info)
        // setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards)

        // restaurantFullDetail.push(restaurantData);
        // restaurantFullDetail.push(restaurantMenu);
        
        // setRestaurantDetail(restaurantFullDetail)
    }

    return restaurantData;
}

export default useRestaurantMenu;