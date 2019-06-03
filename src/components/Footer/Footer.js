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
import CookieConsent, {Cookies} from 'react-cookie-consent'
import styled from '@emotion/styled'

const FooterStyle = styled.footer`
    background: rgb(98, 22, 69);
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: -1.5rem;
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    & a {
        box-shadow: none;
        margin-bottom: 3rem;
        & :hover {
            text-decoration: underline;
        }
    }
`

const BizHoursUl = styled.div`
    list-style-type: none;
    color: rgb(255, 227, 159);
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
    margin-top: 2.5rem;
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

const AnchorDiv = styled.div`
    text-align: center;
    margin-bottom: 1.5rem;
    color: rgb(216, 132, 46);
    font-size: 0.9rem;
    & a {
        box-shadow: none;
        color: rgb(255, 165, 79);
    }
    & a:nth-of-type(1) {
        margin-right: 1rem;
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
    color: rgb(255, 227, 159);
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
                <RelatedHoursUl />
                <FollowHoursUl>
                    <li>
                        <a
                            className="github"
                            href="https://github.com/interglobalmedia"
                            target="_new"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                transform="rotate--30 flip-h flip-v left-8 up-6"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            className="twitter"
                            href="https://twitter.com/letsbsocial1"
                            target="_new"
                        >
                            <FontAwesomeIcon
                                icon={faTwitter}
                                transform="flip-v flip-h down-12 right-2 rotate--180"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            className="facebook"
                            href="https://www.facebook.com/mariador62"
                            target="_new"
                        >
                            <FontAwesomeIcon
                                icon={faFacebookF}
                                transform="rotate-20 up-16 right-2 flip-h"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            className="linkedin"
                            href="https://www.linkedin.com/in/mariacampbell/"
                            target="_new"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedinIn}
                                transform="rotate-60 up-2 right-12 flip-v"
                            />
                        </a>
                    </li>
                    {/* </div> */}
                </FollowHoursUl>
            </ColumnsDiv>
            <AnchorDiv>
                <ScrollUpButton
                    style={{background: 'transparent', outline: 'none'}}
                />
                <Link to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Contact
                </Link>
                <Link to="/sitemap">
                    <FontAwesomeIcon icon={faDirections} transform="flip-h" />
                    Sitemap
                </Link>
                <a href="http://www.interglobalmedianetwork.com/rss.xml">
                    <FontAwesomeIcon icon={faRss} transform="flip-h" />
                    RSS
                </a>
                <br />
            </AnchorDiv>
            <SiteCredsDiv>
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
                        <a href="https://cookiesandyou.com/" target="_new">
                            Learn more
                        </a>
                    </p>
                </div>
            </CookieConsent>
        </FooterStyle>
    )
}

export default Footer
