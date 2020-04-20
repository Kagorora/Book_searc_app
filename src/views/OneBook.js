import React, { useState, useEffect } from 'react';
import '../assets/styles/App.css';

function readMore({ match }) {
  useEffect(() => { fetchItem(); }, []);

  const [item, setItem] = useState({ image: {}, });
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${match.params.id}`,
    );
    const item = await fetchItem.json();
    setItem(item.volumeInfo, item.volumeInfo.imageLinks);
  };

  return (
    <div className="viewDetails">
      <div className="ViewContainer">
        <div className="pictureSide">
          <img src={item.thumbnail} alt="" />
        </div>
        <div className="BookDescription">
          <h1>{item.title} ({item.subtitle})</h1>
          <h3>Author: {item.authors}</h3>
          <h4>Language: {item.language}</h4>
          <p>Published: {item.publishedDate}</p>
          <p>Categories: {item.categories}</p>
          <p>Description: </p>
          <br />
          <h5>{item.description}</h5>
          <p className="Preview">Preview Link: {item.previewLink}</p>
        </div>
      </div>
    </div>
  );
}

export default readMore;
