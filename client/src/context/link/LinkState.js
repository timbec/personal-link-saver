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
        ],
        current: null
    };

    const [state, dispatch] = useReducer(linkReducer, initialState);

    //Add Contact 
    const addLink = link => {
        console.log(link);
        link.id = uuid.v4();
        dispatch({ type: ADD_LINK, payload: link })
    }

    // Delete Contact 
    const deleteLink = id => {
        console.log(id);
        dispatch({ type: DELETE_LINK, payload: id })
    }

    // Set Current Contact 
    const setCurrent = link => {
        dispatch({ type: SET_CURRENT, payload: link })
    }

    // Clear Current Contact 
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }

    // Update Contact

    // Filter Contacts 

    // Clear Filter

    return (
        <LinkContext.Provider
            value={{
                links: state.links,
                current: state.current,
                addLink,
                deleteLink,
                setCurrent,
                clearCurrent
            }}
        >
            {props.children}
        </LinkContext.Provider>
    );
}

export default LinkState; 