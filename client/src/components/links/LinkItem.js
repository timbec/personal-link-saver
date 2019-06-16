import React, { useContext } from 'react';
import propTypes from 'prop-types';
import LinkContext from '../../context/link/LinkContext';

const LinkItem = ({ link }) => {
    const linkContext = useContext(LinkContext);
    const { deleteLink, setCurrent, clearCurrent } = linkContext;

    const { id, title, url, category } = link;

    const onDelete = () => {
        console.log(id);
        deleteLink(id);
        clearCurrent();
    }

    return (
        <div className='card bg-light'>
            <h3 className="text-primary text-left">
                <a target="blank" href={url}>{title}</a>
            </h3>
            <h4 className="badge" style={{ float: 'right' }}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
            </h4>
            <p>
                <button
                    className="btn btn-dark btn-sm"
                    onClick={() => setCurrent(link)}>Edit</button>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={onDelete}
                >Delete</button>
            </p>

        </div>
    )
}

LinkItem.propTypes = {
    link: propTypes.object.isRequired
}


export default LinkItem
