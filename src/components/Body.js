import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className='search'>Search</div>
            <div className='restaurant-container'>
                {resList.map(resData => <RestaurantCard key={resData.info.id}resCard={resData} />)}
            </div>
        </div>
    )
}

export default Body;