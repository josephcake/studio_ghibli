import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Navigation from './navigation/Navigation'
import Modal from './modal/Modal'
import Landing from './landing/Landing'
import Films from './films/Films'

const App = () => {
  
  const [displayModal, setDisplayModal] = useState(1) 
  useEffect(() => {
    //endpoings
    //films,people,locations,species,vehicles
    fetch(`https://ghibliapi.herokuapp.com/films?limit=50`)
    .then(resq=>resq.json())
    .then(resp=>console.log(resp))    

    //check localStorage
    if(localStorage.preview){
      setDisplayModal(null)
    }

  }, [])
  // const state = useSelector((state) => state);
  // const dispatch = useDispatch();
  // console.log("state:", state);
  // console.log("dispatch:", dispatch);  


  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
          {displayModal && <Modal />}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
