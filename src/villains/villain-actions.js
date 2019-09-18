import {getVillains, deleteVillain} from './villain-service';

/* action types */
export const FETCH_VILLAINS_REQUEST = "FETCH_VILLAINS_REQUEST";
export const FETCH_VILLAINS_SUCCESS = "FETCH_VILLAINS_SUCCESS";
export const FETCH_VILLAINS_FAIL = "FETCH_VILLAINS_FAIL";

export const REMOVE_VILLAIN_REQUEST = "REMOVE_VILLAIN_REQUEST";
export const REMOVE_VILLAIN_SUCCESS = "REMOVE_VILLAIN_SUCCESS";
export const REMOVE_VILLAIN_FAIL = "REMOVE_VILLAIN_FAIL"; 


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

export const removeVillain = id => {
    return async (dispatch) => {
        dispatch({
            type: REMOVE_VILLAIN_REQUEST
        });
        try {
            await deleteVillain(id);
            dispatch({type: REMOVE_VILLAIN_SUCCESS, payload: id})
        } catch (e) {
            console.log(e.message);
            alert(e.message);
            dispatch({
                type: REMOVE_VILLAIN_FAIL,
                payload: e.message
            })
        }
    }
}