import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {heroReducer} from '../heroes/hero-reducer';
import {heroSaga} from '../heroes/hero-saga';
import createSagaMiddleware from 'redux-saga';

const rootReducer = combineReducers({
    heroReducer: heroReducer,
});
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]; // side-effect middleware

const store = createStore(
    rootReducer,
    withDevTools(applyMiddleware(...middleware))
);
sagaMiddleware.run(heroSaga);

export default store;