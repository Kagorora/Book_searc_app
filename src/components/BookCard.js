import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = (props) => (
  <Link to={`/ReadMore/${props.id}`}><div className="card-container">
    <img src={props.image} alt="" />
    <div className="desc">
      <h2>{props.title}</h2>
      <h3>Author: {props.author}</h3>
      <p>Publisher: {props.publisher}</p>
    </div>
  </div></Link>
);

export default BookCard;
