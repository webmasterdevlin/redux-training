import {put, takeEvery, call} from 'redux-saga/effects';
import {getHeroes} from './hero-service';
import {all} from '@redux-saga/core/effects';
import {FETCH_HEROES_REQUEST, FETCH_HEROES_SUCCESS, FETCH_HEROES_FAIL} from './hero-actions';

/* function generator implementations of Saga */
function* fetchingHeroes() {
    try {
        const {data} = yield call(getHeroes); // Saga: Passing a reference only
        yield put({type: FETCH_HEROES_SUCCESS, payload: data})
    } catch(e) {
        console.log(e.message);
        alert(e.message);
        yield put({type: FETCH_HEROES_FAIL, payload: e.message})
    }
}

function* watchFetchingHeroes() {
    yield takeEvery(FETCH_HEROES_REQUEST, fetchingHeroes)
}

/* Saga sends all the watchers to the sagaMiddleware to run */
export function* heroSaga() {
    yield all([
        watchFetchingHeroes(),
    ])
}