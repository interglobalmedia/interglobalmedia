/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {burgerToggle} from '../../lib/navHelpers'

export const NavContainerDiv = styled.div`
    margin-top: -2rem;
`
export const HeaderStyle = styled.header`
    padding: 1.5rem 0 0 1.5rem;
`
export const ResponsiveHeading1 = styled.h1`
    font-size: 2rem;
    font-weight: normal;
    margin-top: 2.25rem;
`

export const TopHeading1 = styled.h1`
    @media (min-width: 990px) {
        font-size: 2rem;
        font-weight: normal;
        margin-top: 2.25rem;
        margin-left: 1rem;
    }
`

const Header = ({siteTitle}) => (
    <NavContainerDiv>
        <div className="hamburger" onClick={burgerToggle}>
            <div className="line" />
            <div className="line" />
            <div className="line" />
        </div>
        <HeaderStyle>
            <nav className="responsive-menu">
                <ResponsiveHeading1
                    title={`link to the Home Page containing the name of the business site of Inter-Global Media (Network, Inc.)`}
                >
                    <Link to="/" style={{color: 'rgb(47,0,0)'}}>
                        {siteTitle}
                    </Link>
                </ResponsiveHeading1>
                <ul>
                    <li>
                        <Link
                            to="/"
                            style={{
                                marginRight: '1.5rem',
                                color: 'rgb(47,0,0)',
                            }}
                            activeStyle={{color: 'rgb(148,75,43)'}}
                            title={`link to the Home Page of Inter-Global Media Network, Inc.`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blog"
                            style={{
                                marginRight: '1.5rem',
                                color: 'rgb(47,0,0)',
                            }}
                            activeStyle={{color: 'rgb(148,75,43)'}}
                            title={`link to the Blog Page of Inter-Global Media Network, Inc.`}
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/portfolio"
                            style={{
                                color: 'rgb(47,0,0)',
                            }}
                            activeStyle={{color: 'rgb(148,75,43)'}}
                            title={`link to the Portfolio Page of Inter-Global Media Network, Inc.`}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            style={{
                                color: 'rgb(47,0,0)',
                            }}
                            activeStyle={{color: 'rgb(148,75,43)'}}
                            title={`link to the Services Page of Inter-Global Media Network, Inc.`}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            style={{
                                marginRight: '1.5rem',
                                color: 'rgb(47,0,0)',
                            }}
                            activeStyle={{color: 'rgb(148,75,43)'}}
                            title={`link to the Contact Page of Inter-Global Media Network, Inc.`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav className="top">
                <TopHeading1
                    title={`link to the Home Page containing the name of the business site of Inter-Global Media (Network, Inc.)`}
                >
                    <Link to="/" style={{color: 'rgba(47,0,0)'}}>
                        {siteTitle}
                    </Link>
                </TopHeading1>
                <ul style={{marginTop: '-3rem'}}>
                    <li>
                        <Link
                            to="/"
                            style={{
                                marginRight: '1.5rem',
                                color: 'rgb(47,0,0)',
                            }}
                            activeStyle={{color: 'rgb(148,75,43)'}}
                            title={`link to the Home Page of Inter-Global Media Network, Inc.`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blog"
                            style={{
                                marginRight: '1.5rem',
                                color: 'rgb(47,0,0)',
                            }}
                            activeStyle={{color: 'rgb(148,75,43)'}}
                            title={`link to the Blog Page of Inter-Global Media Network, Inc.`}
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/portfolio"
                            style={{
                                marginRight: '1.5rem',
                                color: 'rgb(47,0,0)',
                            }}
                            activeStyle={{color: 'rgb(148,75,43)'}}
                            title={`link to the Portfolio Page of Inter-Global Media Network, Inc.`}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            style={{
                                marginRight: '1.5rem',
                                color: 'rgb(47,0,0)',
                            }}
                            activeStyle={{color: 'rgb(148,75,43)'}}
                            title={`link to the Services Page of Inter-Global Media Network, Inc.`}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            style={{
                                marginRight: '1.5rem',
                                color: 'rgb(47,0,0)',
                            }}
                            activeStyle={{color: 'rgb(148,75,43)'}}
                            title={`link to the Contact Page of Inter-Global Media Network, Inc.`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </HeaderStyle>
    </NavContainerDiv>
)

Header.propTypes = {
    siteTitle: PropTypes.string.isRequired,
}

Header.defaultProps = {
    siteTitle: `Inter 🌐 Media`,
}

export default Header
