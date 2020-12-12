import './App.css';
import { Provider } from 'react-redux'
import User from './page/user/User'
import Home from './page/home/home'
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux'
const logger = createLogger();

export const reducer = (state = { age: 16,userName:"init Reducer 爱华" }, action) => {
  switch (action.type) {
    case "addAge":
      return { age: state.age + 1, userName: '爱华' }
    case "modifyName":
        return { age: state.age, userName: 'aiwa' }  
    default:
      break;
  }
  return state
}

export const store = createStore(reducer, { age: 18,userName: "init 爱华" }, applyMiddleware(logger))


// store.dispatch(action)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <User></User>
        <Home></Home>
      </div>
    </Provider>

  );
}

export default App;
