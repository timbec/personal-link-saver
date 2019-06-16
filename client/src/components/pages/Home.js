import React from 'react';
import Links from '../links/Links';
import LinkForm from '../links/LinkForm';
import LinkFilter from '../links/LinkFilter';

const Home = () => {
    return (
        <div className="grid-2">
            <div className="link-form">
                <LinkForm />
            </div>

            <div className="links">
                <LinkFilter />
                <Links />
            </div>
        </div>
    )
}

export default Home
