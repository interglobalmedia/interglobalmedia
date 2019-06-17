/* stylelint-disable no-descending-specificity */
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
import CookieConsent from 'react-cookie-consent'
import styled from 'styled-components'

export const FooterStyle = styled.footer`
    background: rgb(98, 22, 69);
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    & a {
        margin-bottom: 3rem;
    }
`

export const ColumnsDiv = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 2rem auto;
    & ul {
        list-style-type: none;
    }
    @media (min-width: 990px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        column-gap: 2.5%;
        margin-left: auto;
        margin-right: auto;
    }
`

export const ColumnsUl = styled.div`
    & :nth-of-type(1) {
        & li {
            color: rgb(255, 227, 159);
            font-size: 1.1rem;
        }
        & li:first-of-type {
            color: whitesmoke;
            font-style: italic;
        }
        & li:last-of-type {
            color: whitesmoke;
            font-style: italic;
        }
    }
    & :nth-of-type(2) {
        list-style-type: none;
        color: rgb(216, 132, 46);
        display: flex;
        justify-content: center;
        flex-direction: columns;
        margin-top: 2.5rem;
    }
    & li {
        margin-right: 1rem;
        font-size: 1.3rem;
        & a {
            color: rgb(255, 165, 79);
        }
        & a:hover {
            color: white;
            transition: 1s ease-out;
        }
    }
    @media (min-width: 990px) {
        margin-top: 0;
    }
`

export const AnchorDiv = styled.div`
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    & a:nth-of-type(1) {
        margin-right: 1rem;
    }
    & a:nth-of-type(2) {
        margin-right: 1rem;
    }
    @media (min-width: 360px) {
        font-size: 1rem;
    }
    @media (min-width: 375px) {
        font-size: 1.1rem;
    }
    @media (min-width: 411px) {
        font-size: 1.2rem;
    }
`

export const SiteCredsDiv = styled.div`
    color: rgb(255, 227, 159);
    margin-top: 1rem;
    text-align: center;
`

export const Footer = () => {
    return (
        <FooterStyle as="footer">
            <ColumnsDiv as="div">
                <ColumnsUl as="ul">
                    <li>Business Hours</li>
                    <li>Monday: 9:00am - 5:00pm</li>
                    <li>Tuesday: 9:00am - 5:00pm</li>
                    <li>Wednesday: 9:00am - 5:00pm</li>
                    <li>Thursday: 9:00am - 5:00pm</li>
                    <li>Friday: 9:00am - 5:00pm</li>
                    <li>Saturday: Closed</li>
                    <li>Sunday: Closed</li>
                    <li>And By Appointment</li>
                </ColumnsUl>
                {/* <RelatedHoursUl as='ul' /> */}
                <ColumnsUl as="ul">
                    <li>
                        <a
                            className="github"
                            href="https://github.com/interglobalmedia"
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                transform="rotate--30 flip-h flip-v left-8 up-6"
                                title={`follow us on Github`}
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            className="twitter"
                            href="https://twitter.com/letsbsocial1"
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faTwitter}
                                transform="flip-v flip-h down-12 right-2 rotate--180"
                                title={`follow us on Twitter`}
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            className="facebook"
                            href="https://www.facebook.com/mariador62"
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faFacebookF}
                                transform="rotate-20 up-16 right-2 flip-h"
                                title={`connect with us on Facebook`}
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            className="linkedin"
                            href="https://www.linkedin.com/in/mariacampbell/"
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedinIn}
                                transform="rotate-60 up-2 right-12 flip-v"
                                title={`connect with us on Linkedin`}
                            />
                        </a>
                    </li>
                </ColumnsUl>
            </ColumnsDiv>
            <AnchorDiv as="div">
                <ScrollUpButton
                    style={{
                        background: 'transparent',
                        outline: 'none',
                    }}
                />
                <Link
                    to="/contact"
                    style={{color: 'rgb(255, 165, 79)'}}
                    title={`visit the main Contact page to learn how to connect with us`}
                >
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{
                            marginRight: '0.25rem',
                        }}
                    />
                    Contact
                </Link>
                <Link
                    to="/sitemap"
                    style={{color: 'rgb(255, 165, 79)'}}
                    title={`visit the Sitemap page to get an overview of the entire site`}
                >
                    <FontAwesomeIcon
                        icon={faDirections}
                        transform="flip-h"
                        style={{
                            marginRight: '0.25rem',
                        }}
                    />
                    Sitemap
                </Link>
                <a
                    style={{color: 'rgb(255, 165, 79)'}}
                    href="http://www.interglobalmedianetwork.com/rss.xml"
                    title={`visit the RSS Feed page to view or subscribe to our RSS Feed`}
                >
                    <FontAwesomeIcon
                        icon={faRss}
                        transform="flip-h"
                        style={{
                            marginRight: '0.25rem',
                        }}
                    />
                    RSS
                </a>
                <br />
            </AnchorDiv>
            <SiteCredsDiv as="div">
                © {new Date().getFullYear()}
                {` `}
                Inter-Global Media Network, Inc.
            </SiteCredsDiv>
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                declineButtonText="Decline"
                cookieName="MDCDevBlogCookieConsent"
                style={{background: 'rgba(0,0,0,1)', paddingTop: '5px'}}
                buttonStyle={{color: '#4e503b', fontSize: '1rem'}}
                declineButtonStyle={{fontSize: '1rem'}}
                expires={150}
                onAccept={() => {
                    alert('Great!')
                }}
                enableDeclineButton
                onDecline={() => {
                    alert('Sorry to hear that!')
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(1, 1fr)',
                    }}
                >
                    <p>
                        This website uses cookies to enhance the user
                        experience.{' '}
                        <a
                            href="https://cookiesandyou.com/"
                            target="_new"
                            rel="noopener noreferrer"
                            style={{
                                color: 'rgb(255,187,187)',
                            }}
                        >
                            Learn more
                        </a>
                    </p>
                </div>
            </CookieConsent>
        </FooterStyle>
    )
}

export default Footer
