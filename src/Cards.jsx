import React from 'react';

const Cards = ({ data }) => {
  console.log(data);

  // Check if data exists and is not null before trying to map it
  if (!data || data.length === 0) {
    return <p className='no-news'>Oops.. No news available!</p>;
  }

  // Read more functionality with window.open method
  const readMore = (url) => {
    window.open(url);
  };

  return (
    <div className='cards'>
      {/* Iterate over the data */}
      {data.map((item, index) => (
        <div className='card' key={index}>
          <img src={item.urlToImage} alt={item.title} />
          <div className='cardContent'>
            <a href={item.url} target='_blank' rel='noopener noreferrer'>
              {item.title}
            </a>
            <p>{item.description}</p>
            {/* Corrected the onClick event */}
            <button onClick={() => readMore(item.url)}>Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
