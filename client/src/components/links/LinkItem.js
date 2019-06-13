import React from 'react'; 
import propTypes from 'prop-types'; 

const LinkItem = ({ link }) => {
    const { id, title, url, category } = link; 

    return (
        <div className='card bg-light'>
            <h3 className="text-primary text-left">
                <a target="blank" href={url}>{title}</a>
            </h3>
            <h4 className="badge" style={{ float: 'right' }}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
            </h4>
            <p>
                <button className="btn btn-dark btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
            </p>

        </div>
    )
}

LinkItem.propTypes = {
    link: propTypes.object.isRequired
}


export default LinkItem
