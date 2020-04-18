import React, { Component } from 'react';
import Header from './Header';
import Books from './Books';
import Footer from './Footer';
import './App.css';
import request from 'superagent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: '',
    }
  }

  searchBook = (e) => {
    e.preventDefault();
    request
     .get("https://www.googleapis.com/books/v1/volumes")
     .query({ q: this.state.searchField })
     .then((data) => {
       console.log(data);
     })
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <Header searchBook={this.searchBook} handleSearch={this.handleSearch} />
        <Books />
        <Footer />
      </div>
    );
  }
}

export default App;
