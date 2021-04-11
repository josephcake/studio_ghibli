import './App.css';
import {useSelector, useDispatch} from 'react-redux';
const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("state:", state);
  console.log("dispatch:", dispatch);
  
  return (
      <div className='App'>
      </div>
  );
}

export default App;
