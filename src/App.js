import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
function App() {
  const counter = useSelector(state => state.counter);
  // const login = useSelector(state => state.login);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <h2>Current Login status: {login}</h2> */}
      <h3> Counter {counter} </h3>
      <button onClick={() => dispatch(increment(10))}> Count by 10</button>
      <button onClick={() => dispatch(decrement(5))}> Minus by 5</button>
    </div>
  );
}

export default App;
