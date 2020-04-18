import React from 'react';

const Header = (props) => (
  <header>
    <h1>Book Search App</h1>
    <h2>Search your preferred Book</h2>
    <form onSubmit={props.searchBook} action="">
      <input onChange={props.handleSearch} id="homesearch-input" showicon="true" showclear="true" iconposition="left" placeholder="book name &amp; author" themepreset="light" />
      <button type="submit">search</button>
    </form>
  </header>
);

export default Header;
