import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { IMG_URL } from "../constants";

const RestaurantMenu = () => {
    const { id } = useParams();

    const [restaurantData, setRestaurantData] = useState()
    const [restaurantMenu, setRestaurantMenu] = useState([])

    useEffect(() => {
        getRestaurantData();
    },[])

    async function getRestaurantData() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6866522&lng=77.3701146&restaurantId="+id);
        const json = await data.json();
        console.log(json.data.cards[0].card.card.info)
        console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
        setRestaurantData(json?.data?.cards[0]?.card?.card?.info)
        setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    }

    return (!restaurantData) ? <Shimmer/> : (
        <div className="menu">
            <div>
                <h1>Restaurant Id : {id}</h1>
                <img src={IMG_URL + restaurantData?.cloudinaryImageId}></img>
                <h2>{restaurantData?.name}</h2>
                <h3>{restaurantData?.areaName}</h3>
                <h3>{restaurantData?.city}</h3>
                <h3>{restaurantData?.avgRating}</h3>
                <h3>{restaurantData?.costForTwoMessage}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {
                        restaurantMenu.map((item)=>{
                            return <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;