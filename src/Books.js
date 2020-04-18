import React from 'react';
import BookCard from './BookCard';


const Books = (props) => (
  <div className="book-list-container">
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

export default Books;
