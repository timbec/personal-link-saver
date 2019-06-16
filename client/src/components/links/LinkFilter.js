import React, { useContext, useRef, useEffect } from 'react';
import LinkContext from '../../context/link/LinkContext';

const LinkFilter = () => {
    const linkContext = useContext(LinkContext);
    const text = useRef('');

    const { filterLinks, clearFilter, filtered } = linkContext;

    useEffect(() => {
        if (filtered == null) {
            text.current.value = '';
        }
    })

    const onChange = e => {
        if (text.current.value !== '') {
            filterLinks(e.target.value);
        } else {
            clearFilter();
        }
    }

    return (

        <form>
            <input
                ref={text}
                type='text'
                placeholder='Filter Links...'
                onChange={onChange}
            />

        </form>
    )
}

export default LinkFilter
