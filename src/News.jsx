import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const News = () => {
     
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);
    const API_KEY = "be8ba853b90042a38d21764254e2a8e8";

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles);
    }

    const handleSearch = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    
    useEffect(() => {
        getData();
    }, []);

    
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
                    <li>Welcome to Breaking News – Your Ultimate Source for the Latest Headlines! </li>
                    
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

