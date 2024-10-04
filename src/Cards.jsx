import React from 'react';

const Cards = ({ data }) => {
  console.log(data);

  // Check if data exists and is not null before trying to map it
  if (!data || data.length === 0) {
    return <p>No news available.</p>;
  }

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
            <button>Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
