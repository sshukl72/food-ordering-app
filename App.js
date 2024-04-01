import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Header
 * -----Logo
 * -----NavItems
 * Body
 * -----Search
 * -----RestaurantContainer
 * -----RestaurantCard
 * Footer
 * ------links
 * ------address
 * ------contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className='logo-container'>
                <img className='logo' src="https://w7.pngwing.com/pngs/408/758/png-transparent-cooking-chef-s-hat-restaurant-chef-professional-cooking-knife-kitchen-utensils-icon-logo.png" alt="restaurants logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = () => {
    return (
        <div className="restaurant-card">
            <img className="restaurant-logo"src="https://b.zmtcdn.com/data/pictures/chains/0/93970/e0f589cf2ca685cb9b714231983d7e9e.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="restaurant logo" />
            <h3>Shah Ghouse</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className='search'>Search</div>
            <div className='restaurant-container'>
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);  // Render the heading component in the

