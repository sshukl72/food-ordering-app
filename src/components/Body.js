import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);

    const [filterRestaurants, setFilterRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => { fetchData(); }, []);

    const fetchData = async () => {
        const restaurantList = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2732589&lng=83.0091059&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const response = await restaurantList.json();
        setRestaurants(response?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestaurants(response?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    if (restaurants.length === 0)
        return <Shimmer />

    return (
        <div className="body">
            <div className='filter'>
                <div className="search">
                    <input className="search-bar" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} /><button onClick={() => {
                        setFilterRestaurants(restaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())))
                    }}>Search</button>
                </div>
                <button className='filter-btn' onClick={() =>
                    setFilterRestaurants(restaurants.filter((resCard) =>
                        resCard.info.avgRating > 4))}>Top Rated Restaurant</button>
            </div>
            <div className='restaurant-container'>
                {filterRestaurants.map(resData => <RestaurantCard key={resData.info.id} resCard={resData} />)}
            </div>
        </div>
    )
}

export default Body;