import React, { useReducer } from 'react'; 
import uuid from 'uuid'; 
import LinkContext from './LinkContext'; 
import linkReducer from './LinkReducer'; 

import {
    ADD_LINK, 
    DELETE_LINK,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LINK,
    FILTER_LINKS,
    CLEAR_FILTER
} from '../types'; 

const LinkState = props => {
    const initialState = {
        links: [
            {
                title: 'Guardian Link', 
                url: 'https://guardian.co.uk', 
                category: 'News'
            }, 
            {
                title: 'NYT', 
                url: 'https://nytimes.com', 
                category: 'News'
            }, 
            {
                title: 'Udemy', 
                url: 'https://udemy.com', 
                category: 'Tech'
            }
        ]
    }; 

    const [state, dispatch] = useReducer(linkReducer, initialState); 

    //Add Contact 

    // Delete Contact 

    // Set Current Contact 

    // Clear Current Contact 

    // Update Contact

    // Filter Contacts 

    // Clear Filter

    return (
        <LinkContext.Provider
            value={{
                links: state.links
            }}
        >
            { props.children }
        </LinkContext.Provider>
    );
}

export default LinkState; 