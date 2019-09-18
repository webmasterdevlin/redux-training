import {put, takeEvery, call} from 'redux-saga/effects';
import {getHeroes, deleteHero, postHero} from './hero-service';
import {all} from '@redux-saga/core/effects';
import {FETCH_HEROES_REQUEST,
     FETCH_HEROES_SUCCESS,
      FETCH_HEROES_FAIL,
       REMOVE_HERO_REQUEST,
        REMOVE_HERO_SUCCESS,
         REMOVE_HERO_FAIL,
         ADD_HERO_REQUEST,
         ADD_HERO_SUCCESS,
         ADD_HERO_FAIL
        } from './hero-actions';

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

function* removingHero({payload: id}) {
    try {
        yield deleteHero(id);
        yield put({type: REMOVE_HERO_SUCCESS, payload: id})
    } catch (e) {
        console.log(e.message);
        alert(e.message);
        yield put({
            type: REMOVE_HERO_FAIL,
            payload: e.message
        })
    }
} 

function* addingHero({payload: newHero}) {
    try {
        const {data} = yield postHero(newHero);
        yield put({type: ADD_HERO_SUCCESS,  payload: data})
    } catch (e) {
        console.log(e.message);
        alert(e.message);
        yield put({
            type: ADD_HERO_FAIL,
            payload: e.message
        })
    }
}


/*Saga watches these actions*/
function* watchFetchingHeroes() {
    yield takeEvery(FETCH_HEROES_REQUEST, fetchingHeroes)
}

function* watchRemovingHero() {
    yield takeEvery(REMOVE_HERO_REQUEST, removingHero);
}

function* watchAddingHero() {
    yield takeEvery(ADD_HERO_REQUEST, addingHero);
}

/* Saga sends all the watchers to the sagaMiddleware to run */
export function* heroSaga() {
    yield all([
        watchFetchingHeroes(),
        watchRemovingHero(),
        watchAddingHero()
    ])
}