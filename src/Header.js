import React from 'react';

const Header = () => (
  <header>
    <h1>Book Search App</h1>
    <h2>Search your prefered Book</h2>
    <form>
    <input id="homesearch-input" showicon="true" showclear="true" iconposition="left" placeholder="book name &amp; author" themepreset="light" class="css-tprr8g" />
      <button type="submit">search</button> 
    </form>
  </header>
);

export default Header;
