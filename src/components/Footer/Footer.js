import React from 'react'
import {Link} from 'gatsby'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faRss,
    faDirections,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import ScrollUpButton from 'react-scroll-up-button'
import styled from '@emotion/styled'

const AnchorDiv = styled.div`
    margin-bottom: 1rem;
    & a {
        box-shadow: none;
    }
    & a:nth-of-type(2) {
        margin-right: 1rem;
    }
`
const AnchorStyle = styled.a`
    box-shadow: none;
    margin-right: 1rem;
`

export const SiteCredsDiv = styled.div`
    color: rgb(216, 132, 46);
`

const Footer = () => {
    return (
        <footer
            style={{
                background: 'rgb(98,22,69)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '3rem',
                marginBottom: '-2rem',
                overflow: 'hidden',
            }}
        >
            <AnchorDiv>
                <ScrollUpButton
                    style={{background: 'transparent', outline: 'none'}}
                />
                <AnchorStyle href="mailto:interglobalmedia@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Contact
                </AnchorStyle>
                <Link to="/sitemap">
                    <FontAwesomeIcon icon={faDirections} />
                    Sitemap
                </Link>
                <a href="http://www.interglobalmedianetwork.com/rss.xml">
                    <FontAwesomeIcon icon={faRss} />
                    RSS
                </a>
            </AnchorDiv>
            <SiteCredsDiv>
                © {new Date().getFullYear()}
                {` `}
                Inter-Global Media Network, Inc.
            </SiteCredsDiv>
        </footer>
    )
}

export default Footer
