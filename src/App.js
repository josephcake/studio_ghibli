import './App.css';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Navigation from './navigation/Navigation'

const App = () => {

  useEffect(() => {
    //endpoings
    //films,people,locations,species,vehicles
    fetch(`https://ghibliapi.herokuapp.com/films`)
    .then(resq=>resq.json())
    .then(resp=>console.log(resp))    
  }, [])

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log("state:", state);
  // console.log("dispatch:", dispatch);  
  return (
      <div className='App'>
        <Navigation/>
      </div>
  );
}

export default App;
