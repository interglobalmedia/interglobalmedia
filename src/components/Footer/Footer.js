/* stylelint-disable no-descending-specificity */
import React from 'react'
import {Link} from 'gatsby'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faRss,
    faDirections,
    faEnvelope,
    faPodcast,
    faSignInAlt,
} from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faLinkedinIn,
    faTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import ScrollUpButton from 'react-scroll-up-button'
import CookieConsent from 'react-cookie-consent'
import {useMediaQuery} from '../../hooks/mediaQueryHooks'

import {
    FooterStyle,
    FooterColumnsDiv,
    ColumnsUl,
    AnchorDiv,
    SiteCredsDiv,
    styles,
} from '../../exports/named-exports'

const Footer = () => {
    const notRightMargin = useMediaQuery('(max-width: 559px)')
    const marginBottomLess = useMediaQuery('(max-width: 559px)')
    return (
        <FooterStyle as="footer">
            <FooterColumnsDiv as="div">
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
                <ColumnsUl as="ul">
                    <li>Podast</li>
                    <li>
                        <a
                            href="https://anchor.fm/maria-campbell"
                            target="_new"
                            rel="noopener noreferrer"
                            title="visit link to view public Plugging in the Holes public site"
                        >
                            <FontAwesomeIcon
                                icon={faPodcast}
                                style={{
                                    marginRight: '0.25rem',
                                }}
                            />
                            Plugging In The Holes
                        </a>
                    </li>
                    <li>Login</li>
                    <li>
                        <a href="https://www.interglobalmedianetwork.com/admin/#/">
                            <FontAwesomeIcon
                                icon={faSignInAlt}
                                style={{
                                    marginRight: '0.25rem',
                                }}
                            />
                            Admin Login
                        </a>
                    </li>
                </ColumnsUl>
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
                                transform="flip-v flip-h down-2 left-2 rotate--180"
                                title={`follow us on Twitter`}
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            className="instagram"
                            href="https://www.instagram.com/letsbsocial/"
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                transform="rotate--20 right-8 flip-v up-16"
                                style={{cursor: 'pointer'}}
                                title={`connect with us on Instagram`}
                            />{' '}
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
            </FooterColumnsDiv>
            <AnchorDiv as="div">
                <ScrollUpButton
                    style={styles.container(notRightMargin, marginBottomLess)}
                    ContainerClassName="ScrollUpButton__Container"
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
