import React from 'react';
import BookCard from './BookCard';

const BookList = (props) => (
  <div className="list">
    {
        props.books.map((books, i) => (
          <BookCard
            key={i}
            id={books.id}
            image={books.volumeInfo.imageLinks.thumbnail}
            title={books.volumeInfo.title}
            author={books.volumeInfo.authors}
            publisher={books.volumeInfo.publisher}
          />
        ))
      }
  </div>
);

export default BookList;
