import {getVillains} from './villain-service';

/* action types */
export const FETCH_VILLAINS_REQUEST = "FETCH_VILLAINS_REQUEST";
export const FETCH_VILLAINS_SUCCESS = "FETCH_VILLAINS_SUCCESS";
export const FETCH_VILLAINS_FAIL = "FETCH_VILLAINS_FAIL";

/* action creators: thunk version */
export const fetchVillains = () => {
    return async (dispatch) => {
        dispatch({
            type: FETCH_VILLAINS_REQUEST
        });
        try {
            const { data } = await getVillains();
            dispatch({type: FETCH_VILLAINS_SUCCESS, payload: data})
        } catch (e) {
            console.log(e.message);
            alert(e.message);
            dispatch({
                type: FETCH_VILLAINS_FAIL,
                payload: e.message
            })
        }
    }
}