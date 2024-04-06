import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resCard } = props;

    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } = resCard?.info;

    return (
        <div className="restaurant-card">
            <img className="restaurant-logo" src={CDN_URL + cloudinaryImageId} alt="restaurant logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
        </div>
    )
}

export default RestaurantCard;