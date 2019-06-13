import React from 'react'; 
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom'; 

const Navbar = ({ title, icon }) => {
    return (
        <div className="navbar bg-primary">
            <h1>
                {title}
            </h1>
            <Link to ="/">Home</Link>
            <Link to = "/about">About</Link>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired, 
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Personal Link Saver', 
    icon: 'fas fa-id-card-alt'
}

export default Navbar; 