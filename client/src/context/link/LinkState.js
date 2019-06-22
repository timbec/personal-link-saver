import React, { useReducer } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import LinkContext from './LinkContext';
import linkReducer from './LinkReducer';

import {
    GET_LINKS,
    ADD_LINK,
    DELETE_LINK,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LINK,
    FILTER_LINKS,
    CLEAR_LINKS,
    CLEAR_FILTER,
    LINK_ERROR
} from '../types';

const LinkState = props => {
    const initialState = {
        links: null,
        current: null,
        filtered: null,
        error: null
    };

    const [state, dispatch] = useReducer(linkReducer, initialState);

    //Get Links 
    const getLinks = async () => {
        try {
            const res = await axios.get('/api/links');
            dispatch({
                type: GET_LINKS,
                payload: res.data
            });
        } catch (err) {
            console.log(err);
            dispatch({
                type: LINK_ERROR,
                payload: err.response.msg
            })
        }
    }

    //Add Link
    const addLink = async link => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/links', link, config);
            console.log(res.data); 
            dispatch({ 
                type: ADD_LINK, 
                payload: res.data 
            })
        } catch (err) {
            console.log(err.response);
            // dispatch({
                
            //         type: LINK_ERROR,
            //         payload: err.response.msg
            // })
        }
    }

    // Delete Link
    const deleteLink = id => {
        console.log(id);
        dispatch({ type: DELETE_LINK, payload: id })
    }

    //clear Links
    const clearLinks = () => {
        dispatch({ type: CLEAR_LINKS })
    }

    // Set Current Link
    const setCurrent = link => {
        dispatch({ type: SET_CURRENT, payload: link })
    }

    // Clear Current Link
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }

    // Update Link
    const updateLink = link => {
        dispatch({ type: UPDATE_LINK, payload: link })
    }

    // Filter Contacts 
    const filterLinks = text => {
        dispatch({ type: FILTER_LINKS, payload: text })
    }

    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }

    return (
        <LinkContext.Provider
            value={{
                links: state.links,
                current: state.current,
                filtered: state.filtered,
                error: state.error,
                getLinks,
                addLink,
                deleteLink,
                clearLinks,
                setCurrent,
                clearCurrent,
                updateLink,
                filterLinks,
                clearFilter
            }}
        >
            {props.children}
        </LinkContext.Provider>
    );
}

export default LinkState; 