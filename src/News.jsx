import React, { useState } from 'react';
import Cards from './Cards';

const News = () => {

    // to handle search 
    const [search,setSearch]=useState("india")


    const API_KEY = "be8ba853b90042a38d21764254e2a8e8"

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)

        const jsonData = await response.json();
        console.log(jsonData)

    }

    const handleSearch=(e)=>{
        console.log(e.target.value);
        setSearch(e.target.value)

    }




    return (
        <div>
            <nav>
                <div>
                    <h1>TOP 100 NEWS</h1>
                </div>
                <ul>
                    <li><a href="#">All News</a></li>
                    <li><a href="#">Trending...</a></li>
                </ul>
                <div className="searchBar">
                    <input type="text" placeholder="Search news" onChange={handleSearch}/>
                    <button onClick={getData}>Search</button>
                </div>
            </nav>

            <p className='top-heading'>Stay update with trending News</p>

            <div className="category-btn">
                <button>Sports</button>
                <button>Global</button>
                <button>Politics</button>
                <button>Health</button>
            </div>

            <div>
                <Cards />
            </div>
        </div>
    );
};

export default News;
