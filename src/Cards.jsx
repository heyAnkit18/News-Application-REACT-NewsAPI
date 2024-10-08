import React from 'react';

const Cards = ({ data }) => {
  console.log(data);

 
  if (!data || data.length === 0) {
    return <p className='no-news'>Oops.. No news available!</p>;
  }
  const readMore = (url) => {
    window.open(url);
  };

  return (
    <div className='cards'>

      {data.map((item, index) => {

        if (!item.urlToImage) {
          return null;
        }

        return (
          <div className='card' key={index}>
            <img src={item.urlToImage} alt={item.title} />
            <div className='cardContent'>
              <a href={item.url} target='_blank' rel='noopener noreferrer'>
                {item.title}
              </a>
              <p>{item.description}</p>
              <button onClick={() => readMore(item.url)}>Read More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
