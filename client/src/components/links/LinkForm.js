import React, { useState, useContext } from 'react';
import LinkContext from '../../context/link/LinkContext';

const LinkForm = () => {

    const linkContext = useContext(LinkContext);

    const onChange = e => setLink({ ...link, [e.target.name]: e.target.value })

    const [link, setLink] = useState({
        title: '',
        url: '',
        category: ''
    });

    const onSubmit = e => {
        e.preventDefault();
        linkContext.addLink(link);
        console.log(link);
        setLink({
            title: '',
            url: '',
            category: ''
        });
    }

    const { title, url, category } = link;
    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">Add Link</h2>
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

            <input type="submit" value="Add Link" />
        </form>
    )
}

export default LinkForm
