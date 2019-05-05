import React from 'react'
import {Link} from 'gatsby'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faRss,
    faDirections,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import ScrollUpButton from 'react-scroll-up-button'

const Footer = () => {
    return (
        <footer
            style={{
                background: 'rgb(132, 0, 88)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '3rem',
                marginBottom: '-2rem',
                overflow: 'hidden',
            }}
        >
            <div style={{marginBottom: '1rem'}}>
                <ScrollUpButton
                    style={{background: 'transparent', outline: 'none'}}
                />
                <a
                    href="mailto:interglobalmedia@gmail.com"
                    style={{boxShadow: 'none', marginRight: '1rem'}}
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                    Contact
                </a>
                <Link
                    to="/sitemap"
                    style={{boxShadow: 'none', marginRight: '1rem'}}
                >
                    <FontAwesomeIcon icon={faDirections} />
                    Sitemap
                </Link>
                <Link to="/rss.xml" style={{boxShadow: 'none'}}>
                    <FontAwesomeIcon icon={faRss} />
                    RSS
                </Link>
            </div>
            <div style={{color: 'rgb(216, 132, 46)'}}>
                © {new Date().getFullYear()}
                {` `}
                Inter-Global Media Network, Inc.
            </div>
        </footer>
    )
}

export default Footer
