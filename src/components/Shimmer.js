const Shimmer = () => {
    return (
        <>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
        />
        <button className="search-btn">
                    Search
                </button>
        <div className="restaurant-list">
            {Array(10)
            .fill("")
            .map((e, index) => (
                <div key ={index} className="shimmer-card">
                    <img className="shimmer-card-img" />
                    <h2 className="shimmer-card-h2" />
                    <h3 className="shimmer-card-h3" />
                    <h4 className="shimmer-card-h4" />
                </div>
            ))}
        </div>
        </>
    );
};

export default Shimmer;