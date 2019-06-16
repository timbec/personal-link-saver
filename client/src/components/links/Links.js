import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LinkItem from './LinkItem';
import LinkContext from '../../context/link/LinkContext';

const Links = () => {
    const linkContext = useContext(LinkContext);

    const { links, filtered } = linkContext;
    if (links.length === 0) {
        return <h4>Please Add A Link</h4>;
    }

    return (
        <Fragment>
            <TransitionGroup>
                {filtered !== null
                    ? filtered.map(link => (
                        <CSSTransition key={link.id} timeout={500} classNames="item">
                            < LinkItem link={link} />
                        </CSSTransition>

                    ))
                    : links.map(link => (
                        <CSSTransition key={link.id} timeout={500} classNames="item">
                            <LinkItem link={link} />
                        </CSSTransition>
                    ))}
            </TransitionGroup>
        </Fragment>
    )
}

export default Links
