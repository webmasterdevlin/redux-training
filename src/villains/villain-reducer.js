import * as types from './villain-actions';

const initialState = {
    villains: [],
    villain: {
        id: "",
        firstName: "",
        lastName: "",
        house: "",
        knownAs: "",
    },
    isLoading: false,
    error: ""
}

export const villainReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_VILLAINS_REQUEST: 
            return {...state, isLoading: true};
        case types.FETCH_VILLAINS_SUCCESS:
            return {...state, isLoading: false, villains: action.payload};
        case types.FETCH_VILLAINS_FAIL:
            return {...state, isLoading: false, error: action.payload};
        case types.REMOVE_VILLAIN_REQUEST:
            return {...state, isLoading: true}
        case types.REMOVE_VILLAIN_SUCCESS:
            return {...state, 
                villains: state.villains.filter(villain => villain.id !== action.payload),
            isLoading: false}
        case types.REMOVE_VILLAIN_FAIL:
            return {...state, isLoading: false, error: action.payload}

        case types.ADD_VILLAIN_REQUEST:
             return {...state, isLoading: true}
        case types.ADD_VILLAIN_SUCCESS:
            return {...state, isLoading: false, villains: [...state.villains, action.payload]}
        case types.ADD_VILLAIN_FAIL:
            return {...state, isLoading: false, error: action.payload}
        default:
            return state;
    }
}