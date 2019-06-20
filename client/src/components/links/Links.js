import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LinkItem from './LinkItem';
import LinkContext from '../../context/link/LinkContext';

import Spinner from '../layouts/Spinner';

const Links = () => {
    const linkContext = useContext(LinkContext);

    const { links, filtered, getLinks, loading } = linkContext;

    useEffect(
        () => {
            getLinks();
            // eslint-disable-next-line
        }, [])

    if (links !== null && links.length === 0 && !loading) {
        return <h4>Please Add A Link</h4>;
    }

    return (
        <Fragment>
            {links !== null && !loading ? (
                <TransitionGroup>
                    {filtered !== null
                        ? filtered.map(link => (
                            <CSSTransition key={link._id} timeout={500} classNames="item">
                                < LinkItem link={link} />
                            </CSSTransition>

                        ))
                        : links.map(link => (
                            <CSSTransition key={link._id} timeout={500} classNames="item">
                                <LinkItem link={link} />
                            </CSSTransition>
                        ))}
                </TransitionGroup>
            ) : <Spinner />}
        </Fragment>
    )
}

export default Links
