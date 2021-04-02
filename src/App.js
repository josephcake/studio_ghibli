import logo from './logo.svg';
import Counter from './Counter';

import './App.css';
import {Provider} from 'react-redux';
import { store } from './Store';

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
