import React from 'react';

const BookCard = (props) => (
  <div className="card-container">
    <img src={props.image} alt="" />
    <div className="desc">
      <h2>{props.title}</h2>
      <h3>Author: {props.author}</h3>
      <p>Publisher: {props.publisher}</p>
    </div>
  </div>
);

export default BookCard;
