import React, { useEffect, useState, useCallback } from 'react';
import Cards from './Cards';

const News = () => {
    // To handle search
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);
    const API_KEY = "be8ba853b90042a38d21764254e2a8e8";

    // Memoize getData function to avoid recreation on every render
    const getData = useCallback(async () => {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
            const jsonData = await response.json();
            console.log(jsonData.articles);
            setNewsData(jsonData.articles);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [search]);

    // Handle input changes in the search bar
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    // Fetch initial data on component mount and when search term changes
    useEffect(() => {
        getData();
    }, [getData]);

    // Function to handle category button clicks
    const handleCategoryClick = (category) => {
        setSearch(category); // Set search term to the category
    };

    return (
        <div>
            <nav className='nav'>
                <div>
                    <h1>Breaking News</h1>
                </div>
                <ul>
                    <li>Welcome to Breaking News – Your Ultimate Source for the Latest Headlines!</li>
                </ul>
                <div className="searchBar">
                    <input type="text" placeholder="Search news" value={search} onChange={handleSearch} />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>

            <p className='top-heading'>Stay updated with trending News</p>

            <div className="category-btn">
                <button onClick={() => handleCategoryClick('Technology')}>Technology</button>
                <button onClick={() => handleCategoryClick('Sports')}>Sports</button>
                <button onClick={() => handleCategoryClick('Global')}>Global</button>
                <button onClick={() => handleCategoryClick('Politics')}>Politics</button>
                <button onClick={() => handleCategoryClick('Health')}>Health</button>
                <button onClick={() => handleCategoryClick('Education')}>Education</button>
                <button onClick={() => handleCategoryClick('Bollywood')}>Bollywood</button>
            </div>

            <div>
                <Cards data={newsData} />
            </div>
        </div>
    );
};

export default News;


