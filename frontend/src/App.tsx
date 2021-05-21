import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/home/Home';
import Movie from './views/movie/Movie';
import Page404 from './views/page404/Page404';

import './App.css';

const App = () => {

  return (
    <div className="app">
      <BrowserRouter>
      <Switch>
        <Route path="/movie/:id" component={Movie} />
        <Route path="/" component={Home} exact/>
        <Route path="*" component={Page404} />
      </Switch>
      </BrowserRouter>
      {/* <Home/>
      <Movie/> */}
    </div>
  );
}

export default App;
