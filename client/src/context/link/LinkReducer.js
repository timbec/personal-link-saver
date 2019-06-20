import {
    SEARCH_LINKS,
    SET_LOADING,
    CLEAR_LINKS,
    ADD_LINK,
    DELETE_LINK,
    UPDATE_LINK,
    GET_LINKS,
    GET_LINK,
    CLEAR_LINK,
    LINK_ERROR,
    SET_CURRENT,
    CLEAR_CURRENT,
    FILTER_LINKS,
    CLEAR_FILTER
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_LINKS:
            return {
                ...state,
                contacts: action.payload,
                loading: false
            }
        case SEARCH_LINKS:
            return {
                ...state,
                links: action.payload,
                loading: false
            }
        case ADD_LINK:
            return {
                ...state,
                links: [action.payload, ...state.links],
                loading: false
            }
        case UPDATE_LINK:
            return {
                ...state,
                links: state.links.map(link => link.id === action.payload.id ? action.payload : link),
                loading: false
            }
        case DELETE_LINK:
            return {
                ...state,
                links: state.links.filter(link => link.id !== action.payload),
                loading: false
            }
        case CLEAR_LINKS:
            return {
                ...state,
                links: null,
                filtered: null,
                error: null,
                current: null
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
        case FILTER_LINKS:
            return {
                ...state,
                filtered: state.links.filter(link => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return link.title.match(regex) || link.category.match(regex);
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filter: null,
                loading: false
            }
        case LINK_ERROR:
            return {
                ...state,
                error: action.payload
            };
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