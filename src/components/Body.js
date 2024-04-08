import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [restaurants, setRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className='filter'>
                <button className='filter-btn' onClick={() =>
                    setRestaurants(restaurants.filter((resCard) =>
                        resCard.info.avgRating > 4))}>Top Rated Restaurant</button>
            </div>
            <div className='restaurant-container'>
                {restaurants.map(resData => <RestaurantCard key={resData.info.id} resCard={resData} />)}
            </div>
        </div>
    )
}

export default Body;