import React, { Component } from 'react';
import request from 'superagent';
import Header from '../components/Header';
import BookList from '../components/BookList';
import Footer from '../components/Footer';
import '../assets/styles/App.css';

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
       this.setState({ books: [...data.body.items]})
     })
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <Header searchBook={this.searchBook} handleSearch={this.handleSearch} />
        <BookList books={this.state.books}/>
        <Footer />
      </div>
    );
  }
}

export default App;
