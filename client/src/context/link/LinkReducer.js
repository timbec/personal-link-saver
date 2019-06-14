import {
    SEARCH_LINKS,
    SET_LOADING,
    CLEAR_LINKS,
    ADD_LINK,
    DELETE_LINK,
    GET_LINKS,
    GET_LINK,
    SET_CURRENT,
    CLEAR_CURRENT
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case SEARCH_LINKS:
            return {
                ...state,
                links: action.payload,
                loading: false
            }
        case ADD_LINK:
            return {
                ...state,
                links: [...state.links, action.payload]
            }
        case DELETE_LINK:
            return {
                ...state,
                links: state.links.filter(link => link.id !== action.payload)
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload,
                loading: false
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null,
                loading: false
            }
        case GET_LINKS:
            return {
                ...state,
                links: action.payload,
                loading: false
            }
        case GET_LINK:
            return {
                ...state,
                link: action.payload,
                loading: false
            }
        case CLEAR_LINKS:
            return {
                ...state,
                links: [],
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}