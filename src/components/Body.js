import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className='filter'>
                <button className='filter-btn' onClick={() => { console.log("Button Clicked") }}>Top Rated Restaurant</button>
            </div>
            <div className='restaurant-container'>
                {resList.map(resData => <RestaurantCard key={resData.info.id} resCard={resData} />)}
            </div>
        </div>
    )
}

export default Body;