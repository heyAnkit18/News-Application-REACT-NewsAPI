import React, { useEffect, useState, useCallback } from 'react';
import Cards from './Cards';

const News = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);
    const API_KEY = "be8ba853b90042a38d21764254e2a8e8";

    // Wrapping getData with useCallback to avoid re-creating the function on every render
    const getData = useCallback(async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        setNewsData(jsonData.articles);
    }, [search, API_KEY]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    // Adding getData as a dependency in useEffect
    useEffect(() => {
        getData();
    }, [getData]);

    const handleCategoryClick = (category) => {
        setSearch(category);
        getData();
    }

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


