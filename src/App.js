import './App.css';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const App = () => {

  useEffect(() => {

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
      </div>
  );
}

export default App;
