import React, { useState, useContext, useEffect } from 'react';
import LinkContext from '../../context/link/LinkContext';

const LinkForm = () => {

    const linkContext = useContext(LinkContext);

    const { addLink, clearCurrent, updateLink, current } = linkContext;

    useEffect(() => {
        if (current != null) {
            setLink(current)
        } else {
            setLink({
                title: '',
                url: '',
                category: ''
            })
        }
    }, [linkContext, current])

    const onChange = e => setLink({ ...link, [e.target.name]: e.target.value })

    const [link, setLink] = useState({
        title: '',
        url: '',
        category: ''
    });

    const onSubmit = e => {
        e.preventDefault();
        linkContext.addLink(link);
        if (current === null) {
            addLink(link);
        } else {
            updateLink(link);
        }
    }

    const clearAll = () => {
        clearCurrent();
    }

    const { title, url, category } = link;
    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">{current ? 'Edit Link' : 'Add Link'}</h2>
            <input
                type="text"
                placeholder="title"
                name="title"
                value={title}
                onChange={onChange}
            />
            <input
                type="text"
                placeholder="url"
                name="url"
                value={url}
                onChange={onChange}
            />
            <input
                type="category"
                placeholder="category"
                name="category"
                value={category}
                onChange={onChange}
            />

            <input
                type="submit"
                value={current ? 'Update Link' : 'Add Link'}
            />

            {current && (
                <div>
                    <button className="btn btn-light btn-black"
                        onClick={clearAll}>
                        Clear
                    </button>
                </div>
            )}

        </form>
    )
}

export default LinkForm
