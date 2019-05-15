import React from 'react'
import {Link} from 'gatsby'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faRss,
    faDirections,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faLinkedinIn,
    faTwitter,
    faFacebookF,
} from '@fortawesome/free-brands-svg-icons'
import ScrollUpButton from 'react-scroll-up-button'
import styled from '@emotion/styled'

const FooterStyle = styled.footer`
    background: rgb(98, 22, 69);
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: -1.5rem;
    overflow: hidden;
    width: 100%;
`

const BizHoursUl = styled.div`
    list-style-type: none;
    color: rgb(216, 132, 46);
    & li:first-of-type {
        color: whitesmoke;
        font-style: italic;
    }
    & li:last-of-type {
        color: whitesmoke;
        font-style: italic;
    }
`

const RelatedHoursUl = styled.div`
    list-style-type: none;
    color: rgb(216, 132, 46);
    & li:first-of-type {
        color: whitesmoke;
        font-style: italic;
    }
    & li:last-of-type {
        color: whitesmoke;
        font-style: italic;
    }
`

const FollowHoursUl = styled.div`
    list-style-type: none;
    color: rgb(216, 132, 46);
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    & li {
        margin-right: 1rem;
        font-size: 1.3rem;
    }
    @media (min-width: 990px) {
        margin-top: 0;
    }
`

const AnchorDiv = styled.div`
    text-align: center;
    margin-bottom: 1.5rem;
    color: rgb(216, 132, 46);
    font-size: 0.9rem;
    & a {
        box-shadow: none;
    }
    & a:nth-of-type(2) {
        margin-right: 1rem;
    }
    & a:hover {
        text-decoration: underline;
    }
    @media (min-width: 375px) {
        font-size: 1.2rem;
    }
    & ul:last-of-type {
        color: rgb(216, 132, 46);
        & li:last-of-type {
            font-style: normal;
        }
    }
`

const ColumnsDiv = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    // display: block;
    & ul {
        list-style-type: none;
    }
    @media (min-width: 990px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 2.5%;
        margin-left: auto;
        margin-right: auto;
    }
`

const AnchorStyle = styled.a`
    box-shadow: none;
    margin-right: 1rem;
`

export const SiteCredsDiv = styled.div`
    color: rgb(216, 132, 46);
    margin-top: 1rem;
    text-align: center;
`

const Footer = () => {
    return (
        <FooterStyle>
            <ColumnsDiv>
                <BizHoursUl>
                    <li>Business Hours</li>
                    <li>Monday: 9:00am - 5:00pm</li>
                    <li>Tuesday: 9:00am - 5:00pm</li>
                    <li>Wednesday: 9:00am - 5:00pm</li>
                    <li>Thursday: 9:00am - 5:00pm</li>
                    <li>Friday: 9:00am - 5:00pm</li>
                    <li>Saturday: Closed</li>
                    <li>Sunday: Closed</li>
                    <li>And By Appointment</li>
                </BizHoursUl>
                <RelatedHoursUl>
                    {/* <li>Related</li>
                    <li style={{ fontStyle: 'normal' }}>
                        <a style={{ boxShadow: 'none' }} href="https://www.mariadcampbell.com">Developer Blog</a>
                    </li> */}
                </RelatedHoursUl>
                <FollowHoursUl>
                    {/* <li>Follow</li> */}
                    {/* <div style={{ display: 'flex' }}> */}
                    <li>
                        <FontAwesomeIcon
                            style={{color: '#007acc'}}
                            icon={faGithub}
                        />
                    </li>
                    <li>
                        <FontAwesomeIcon
                            style={{color: '#007acc'}}
                            icon={faTwitter}
                        />
                    </li>
                    <li>
                        <FontAwesomeIcon
                            style={{color: '#007acc'}}
                            icon={faFacebookF}
                        />
                    </li>
                    <li>
                        <FontAwesomeIcon
                            style={{color: '#007acc'}}
                            icon={faLinkedinIn}
                        />
                    </li>
                    {/* </div> */}
                </FollowHoursUl>
            </ColumnsDiv>
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
                <br />
            </AnchorDiv>
            <SiteCredsDiv>
                © {new Date().getFullYear()}
                {` `}
                Inter-Global Media Network, Inc.
            </SiteCredsDiv>
        </FooterStyle>
    )
}

export default Footer
