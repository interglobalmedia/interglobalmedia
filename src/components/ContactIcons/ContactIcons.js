import React from 'react'
import styled from '@emotion/styled'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faLinkedinIn,
    faTwitter,
    faFacebookF,
} from '@fortawesome/free-brands-svg-icons'
import '../../style/style.scss'

const ContactIconsStyle = styled.ul`
    display: flex;
    width: 100%;
    max-width: 250px;
    margin: 40px auto;
    & li:nth-of-type(1) {
        margin-left: -0.25rem;
    }
`

const ContactIcons = () => {
    return (
        <ContactIconsStyle className="contact-icons">
            <li>
                <a
                    className="github"
                    href="https://github.com/interglobalmedia"
                    target="_new"
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        transform="rotate-30 flip-v right-8"
                    />{' '}
                </a>{' '}
            </li>
            <li className="twitter">
                <a
                    className="twitter"
                    href="https://twitter.com/letsbsocial1"
                    target="_new"
                >
                    <FontAwesomeIcon
                        icon={faTwitter}
                        transform="flip-h down-8"
                    />{' '}
                </a>{' '}
            </li>
            <li className="facebook">
                <a
                    className="facebook"
                    href="https://www.facebook.com/mariador62"
                    target="_new"
                >
                    <FontAwesomeIcon
                        icon={faFacebookF}
                        transform="rotate--30 flip-v up-10"
                    />{' '}
                </a>
            </li>
            <li className="linkedin">
                <a
                    className="linkedin"
                    href="https://www.linkedin.com/in/mariacampbell/"
                    target="_new"
                >
                    <FontAwesomeIcon
                        icon={faLinkedinIn}
                        transform="rotate-60 up-2 left-8"
                    />{' '}
                </a>{' '}
            </li>
        </ContactIconsStyle>
    )
}

export default ContactIcons
