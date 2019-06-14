import React, { Fragment, useContext } from 'react';
import LinkItem from './LinkItem';
import LinkContext from '../../context/link/LinkContext';

const Links = () => {
    const linkContext = useContext(LinkContext);

    const { links } = linkContext;
    console.log(links);

    return (
        <Fragment>
            {links.map(link => (
                <LinkItem key={link.id} link={link} />
            ))}
        </Fragment>
    )
}

export default Links
