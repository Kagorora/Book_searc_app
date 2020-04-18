import React, { Component } from 'react';
import Header from './Header';
import Books from './Books';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Books />
        <Footer />
      </div>
    );
  }
}

export default App;
