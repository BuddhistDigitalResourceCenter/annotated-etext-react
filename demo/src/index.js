import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './state/reducers';
import {initiateApp} from './state/actions' ;
import createSagaMiddleware from 'redux-saga';
import rootSaga from './state/sagas'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const sagaMiddleware = createSagaMiddleware();
export let store = {} ;
if (process.env.NODE_ENV !== 'production') {
   store = createStore(
      rootReducer,
      composeWithDevTools(
         applyMiddleware(thunk,sagaMiddleware,logger)
      )
    );
} else {
    store = createStore(
        rootReducer,
        applyMiddleware(thunk,sagaMiddleware)
    );
}

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, document.getElementById('root'));

store.dispatch(initiateApp("bdr:UT1KG6155_I1KG8423_0000")) //"bdr:UTDEMO_01"))
