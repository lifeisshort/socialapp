import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';  
import { createStore, applyMiddleware, compose } from 'redux' 
import thunk from 'redux-thunk' 
import rootReducer from './store/RootReducer'

const initialState = {
}
const enhancers = []
const middleware = [thunk]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

ReactDOM.render(
    <Provider store={store}>
    <div>
          <App />
        </div>
    </Provider>,
    document.getElementById('root')
  )