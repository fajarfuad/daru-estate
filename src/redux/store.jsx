import thunk from 'redux-thunk'
import createDebounce from 'redux-debounced'
import rootReducer from './rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'

const middleware = [thunk, createDebounce()]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middleware)))
export default store