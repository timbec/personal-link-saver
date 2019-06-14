import React from 'react';
import Links from '../links/Links';
import LinkForm from '../links/LinkForm';

const Home = () => {
    return (
        <div className="grid-2">
            <div className="link-form">
                <LinkForm />
            </div>
            <div className="links">
                <Links />
            </div>
        </div>
    )
}

export default Home
