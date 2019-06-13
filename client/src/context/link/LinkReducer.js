// import {
//   SEARCH_LINKS, 
//   SET_LOADING, 
//   CLEAR_LINKS,
//   GET_LINK,
// } from '../types'; 

//   export default (state, action) => {
//     switch(action.type) {
//         case SEARCH_LINKS: 
//             return {
//                 ...state, 
//                 links: action.payload,
//                 loading: false
//             }
//         case GET_LINK: 
//             return {
//                 ...state, 
//                 link: action.payload, 
//                 loading: false
//             }
//         case CLEAR_LINKS: 
//             return {
//                 ...state,
//                 links: [],
//                 loading: false
//             }
//         case SET_LOADING: 
//             return {
//                 ...state,
//                 loading: true
//             }
//         default: 
//             return state; 
//     }
// }