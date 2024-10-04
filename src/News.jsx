import React from 'react';
import Cards from './Cards';

const News = () => {
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
                    <input type="text" placeholder="Search news" />
                    <button>Search</button>
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
