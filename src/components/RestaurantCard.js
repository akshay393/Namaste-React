import { IMG_URL } from "../constants";

const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId})=> {
    return (
        <div className="card">
            <img src={IMG_URL+cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    )
};

export default RestaurantCard;