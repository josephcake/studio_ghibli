import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navigation from './navigation/Navigation'
import NavigationSecondary from './navigation/NavigationSecondary'
import Home from './home/Home'
import Films from './films/Films'
import Gallery from './gallery/Gallery'
import Footer from './footer/Footer'

const App = () => {
  
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <NavigationSecondary/>
        <Switch>
          <Route path="/gallery">
            <Gallery />
          </Route>
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
