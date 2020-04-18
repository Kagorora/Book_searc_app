import React from 'react';
import BookCard from './BookCard';

const BookList = (props) => (
  <div className="list">
    {
        props.books.map((books, i) => (
          <BookCard
            key={i}
            image={books.volumeInfo.imageLinks.thumbnail}
            title={books.volumeInfo.title}
            author={books.volumeInfo.authors}
            published={books.volumeInfo.publishedDate}
          />
        ))
      }
  </div>
);

export default BookList;
