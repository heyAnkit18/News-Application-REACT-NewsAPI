import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const News = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);
    const API_KEY = "be8ba853b90042a38d21764254e2a8e8";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const jsonData = await response.json();
                console.log(jsonData.articles);
                setNewsData(jsonData.articles);
            } catch (error) {
                console.error("Error fetching the news:", error);
            }
        };

        fetchData();
    }, [search]); // Re-fetch when search term changes

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
                    <input 
                        type="text" 
                        placeholder="Search news" 
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)} 
                    />
                    <button onClick={() => setSearch(search)}>Search</button>
                </div>
            </nav>

            <p className='top-heading'>Stay updated with trending News</p>

            <div className="category-btn">
                {['Technology', 'Sports', 'Global', 'Politics', 'Health', 'Education', 'Bollywood'].map(category => (
                    <button key={category} onClick={() => setSearch(category)}>{category}</button>
                ))}
            </div>

            <div>
                {newsData && <Cards data={newsData} />}
            </div>
        </div>
    );
};

export default News;




