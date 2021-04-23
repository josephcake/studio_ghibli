import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navigation from './navigation/Navigation'
import NavigationSecondary from './navigation/NavigationSecondary'
import Home from './home/Home'
import Footer from './footer/Footer'
import Films from './films/Films'

const App = () => {
  
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <NavigationSecondary/>
        <Switch>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/">
            <Home/>
          </Route>          
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
