import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => { fetchData(); }, []);

    const fetchData = async () => {
        const restaurantList = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const response = await restaurantList.json();
        setRestaurants(response?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    if (restaurants.length === 0)
        return <Shimmer />

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