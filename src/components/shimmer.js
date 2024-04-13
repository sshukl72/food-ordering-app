
const Shimmer = () => {

    return (

        <div className="shimmer-container">
            <div className='filter'>
                <div className="search">
                    <input className="search-bar" />
                    <button>Search</button>
                </div>
                <button className='filter-btn'>Top Rated Restaurant</button>
            </div>
            <div className="shimmers-cards">
                <div className="shimmer"></div>
                <div className="shimmer"></div>
                <div className="shimmer"></div>
                <div className="shimmer"></div>
                <div className="shimmer"></div>
                <div className="shimmer"></div>
                <div className="shimmer"></div>
                <div className="shimmer"></div>
            </div>
        </div>
    );
}

export default Shimmer;