/* action types */
export const FETCH_HEROES_REQUEST = "FETCH_HEROES_REQUEST";
export const FETCH_HEROES_SUCCESS = "FETCH_HEROES_SUCCESS";
export const FETCH_HEROES_FAIL = "FETCH_HEROES_FAIL";

export const REMOVE_HERO_REQUEST = "REMOVE_HERO_REQUEST";
export const REMOVE_HERO_SUCCESS = "REMOVE_HERO_SUCCESS";
export const REMOVE_HERO_FAIL = "REMOVE_HERO_FAIL"; 

export const ADD_HERO_REQUEST = "ADD_HERO_REQUEST";
export const ADD_HERO_SUCCESS = "ADD_HERO_SUCCESS";
export const ADD_HERO_FAIL = "ADD_HERO_FAIL"; 

/* action creators */
export const fetchHeroes = () => ({
    type: FETCH_HEROES_REQUEST
})

export const removeHero = (id) => ({
    type: REMOVE_HERO_REQUEST,
    payload: id
})

export const addHero = (hero) => ({
    type: ADD_HERO_REQUEST,
    payload: hero
})
