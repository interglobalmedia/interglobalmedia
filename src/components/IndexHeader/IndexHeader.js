/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import '../../style/style.scss'
import {burgerToggle} from '../../lib/navHelpers'

const IndexNavContainerDiv = styled.div`
    margin-top: -2.25rem;
    width: 100%;
`

const IndexHeaderStyle = styled.header`
    padding: 1.5rem 0 0 1.5rem;
`

const IndexResponsiveHeading1 = styled.h1`
    font-size: 2rem;
    font-weight: normal;
    margin-top: 2.25rem;
    & a {
        box-shadow: none;
    }
    & a:hover {
        text-decoration: underline;
    }
`

const IndexTopHeading1 = styled.h1`
    @media (min-width: 990px) {
        font-size: 2rem;
        font-weight: normal;
        margin-top: 2.25rem;
        margin-left: 1rem;
        & a {
            color: rgba(47, 0, 0);
            box-shadow: none;
            margin-top: 0.5rem;
        }
        & a:hover {
            text-decoration: underline;
        }
    }
`

const IndexHeader = () => {
    return (
        <IndexNavContainerDiv>
            <div className="hamburger" onClick={burgerToggle}>
                <div className="line" />
                <div className="line" />
                <div className="line" />
            </div>
            <IndexHeaderStyle>
                <nav className="responsive-menu">
                    <IndexResponsiveHeading1>
                        <Link
                            className="menu-item"
                            to="/"
                            activeStyle={{color: 'rgb(47,0,0'}}
                        >
                            Inter{' '}
                            <span role="img" aria-label="global">
                                🌐
                            </span>{' '}
                            Media
                        </Link>
                    </IndexResponsiveHeading1>
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
                        <li>
                            <Link
                                to="/contact"
                                style={{
                                    marginRight: '1.5rem',
                                    boxShadow: 'none',
                                    color: 'rgb(47,0,0)',
                                }}
                                activeStyle={{color: 'rgba(190,138,96,1)'}}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <nav className="top">
                    <IndexTopHeading1>
                        <Link to="/" style={{color: 'rgba(47,0,0)'}}>
                            Inter{' '}
                            <span role="img" aria-label="global">
                                🌐
                            </span>{' '}
                            Media
                        </Link>
                    </IndexTopHeading1>
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
                        <li>
                            <Link
                                to="/contact"
                                style={{
                                    marginRight: '1.5rem',
                                    boxShadow: 'none',
                                    color: 'rgb(47,0,0)',
                                }}
                                activeStyle={{color: 'rgba(190,138,96,1)'}}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </IndexHeaderStyle>
        </IndexNavContainerDiv>
    )
}

IndexHeader.propTypes = {
    siteTitle: PropTypes.string,
}

IndexHeader.defaultProps = {
    siteTitle: `Inter 🌐 Media`,
}

export default IndexHeader
