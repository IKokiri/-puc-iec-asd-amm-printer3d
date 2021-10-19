import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Products from './Products';
import Forum from './Forum';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function Home() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Products/>
          </Route>
          <Route path="/details/:id">
            <Forum/>
          </Route>
        </Switch>
      </Router>
        <Footer/>
    </div>   
  );
}

export default Home;
