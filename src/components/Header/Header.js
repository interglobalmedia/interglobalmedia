/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import '../../style/style.scss'
import {burgerToggle} from '../../lib/navHelpers'

export const NavContainerDiv = styled.div`
    margin-top: -2.25rem;
`
export const HeaderStyle = styled.header`
    padding: 1.5rem 0 0 1.5rem;
`
export const ResponsiveHeading1 = styled.h1`
    font-size: 2rem;
    font-weight: normal;
    margin-top: 2.25rem;
    & a:hover {
        text-decoration: underline;
    }
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
                <ResponsiveHeading1>
                    <Link
                        to="/"
                        style={{boxShadow: 'none', color: 'rgb(47,0,0)'}}
                    >
                        {siteTitle}
                    </Link>
                </ResponsiveHeading1>
                <ul>
                    <li>
                        <Link
                            to="/"
                            style={{
                                marginRight: '1.5rem',
                                boxShadow: 'none',
                                color: 'rgb(47,0,0)',
                            }}
                            activeStyle={{color: 'rgba(190,138,96,1)'}}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blog"
                            style={{
                                marginRight: '1.5rem',
                                boxShadow: 'none',
                                color: 'rgb(47,0,0)',
                            }}
                            activeStyle={{color: 'rgba(190,138,96,1)'}}
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/portfolio"
                            style={{
                                boxShadow: 'none',
                                color: 'rgb(47,0,0)',
                            }}
                            activeStyle={{color: 'rgba(190,138,96,1)'}}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            style={{
                                boxShadow: 'none',
                                color: 'rgb(47,0,0)',
                            }}
                            activeStyle={{color: 'rgba(190,138,96,1)'}}
                        >
                            Services
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav className="top">
                <TopHeading1>
                    <Link
                        to="/"
                        style={{boxShadow: 'none', color: 'rgba(47,0,0)'}}
                    >
                        {siteTitle}
                    </Link>
                </TopHeading1>
                <ul style={{marginTop: '-3rem'}}>
                    <li>
                        <Link
                            to="/"
                            style={{
                                marginRight: '1.5rem',
                                boxShadow: 'none',
                                color: 'rgb(47,0,0)',
                            }}
                            activeStyle={{color: 'rgba(190,138,96,1)'}}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blog"
                            style={{
                                marginRight: '1.5rem',
                                boxShadow: 'none',
                                color: 'rgb(47,0,0)',
                            }}
                            activeStyle={{color: 'rgba(190,138,96,1)'}}
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/portfolio"
                            style={{
                                marginRight: '1.5rem',
                                boxShadow: 'none',
                                color: 'rgb(47,0,0)',
                            }}
                            activeStyle={{color: 'rgba(190,138,96,1)'}}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            style={{
                                marginRight: '1.5rem',
                                boxShadow: 'none',
                                color: 'rgb(47,0,0)',
                            }}
                            activeStyle={{color: 'rgba(190,138,96,1)'}}
                        >
                            Services
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
