import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faLinkedinIn,
    faTwitter,
    faFacebookF,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'

import {ContactIconsStyle} from '../../exports/named-exports'

const ContactIcons = () => {
    return (
        <ContactIconsStyle as="ul" className="contact-icons">
            <li>
                <a
                    className="github"
                    href="https://github.com/interglobalmedia"
                    target="_new"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        transform="rotate-30 flip-v right-8"
                        style={{cursor: 'pointer'}}
                        title={`follow us on Github`}
                    />{' '}
                </a>{' '}
            </li>
            <li className="twitter">
                <a
                    className="twitter"
                    href="https://twitter.com/letsbsocial1"
                    target="_new"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faTwitter}
                        transform="flip-h down-8"
                        style={{cursor: 'pointer'}}
                        title={`follow us on Twitter`}
                    />{' '}
                </a>{' '}
            </li>
            <li className="facebook">
                <a
                    className="instagram"
                    href="https://www.instagram.com/letsbsocial/"
                    target="_new"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faInstagram}
                        transform="rotate--20 left-4 flip-v up-16"
                        style={{cursor: 'pointer'}}
                        title={`connect with us on Instagram`}
                    />{' '}
                </a>
            </li>
            <li className="linkedin">
                <a
                    className="linkedin"
                    href="https://www.linkedin.com/in/mariacampbell/"
                    target="_new"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faLinkedinIn}
                        transform="rotate-60 up-2 left-8"
                        style={{cursor: 'pointer'}}
                        title={`connect with us on Linkedin`}
                    />{' '}
                </a>{' '}
            </li>
        </ContactIconsStyle>
    )
}

export default ContactIcons
