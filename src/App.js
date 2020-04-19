import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import OneBook from './views/OneBook';


const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ReadMore/:id" exact component={OneBook} />
      </Switch>
    </Router>
  </>
);

export default App;
