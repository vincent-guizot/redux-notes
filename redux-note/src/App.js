import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './redux/actions/number';

function App() {
  const number = useSelector(state => state.number)
  const dispatch = useDispatch()

  return (
    <div className="App">
       <h1>{number}</h1>
       <button onClick={() => dispatch(increment())}>+ Add</button>
       <button onClick={() => dispatch(decrement())}>- Minus</button>
    </div>
  );
}

export default App;
