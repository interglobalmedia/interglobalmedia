import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faFacebookF,
    faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

import {SocialUl} from '../../exports/named-exports'

const Share = props => {
    const twitter = `https://twitter.com/intent/tweet?url=${props.url +
        props.pathname}&text=${props.title} by @letsbsocial1`
    const fb = `https://www.facebook.com/sharer/sharer.php?u=${props.url +
        props.pathname}&text=${props.title}`
    const linkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${props.url +
        props.pathname}&text=${props.title}`
    return (
        <SocialUl as="ul">
            <li>
                <a
                    href={twitter}
                    target="_new"
                    rel="noopener noreferrer"
                    title={`if you like this post share it on Twitter with your friends!`}
                >
                    <FontAwesomeIcon
                        icon={faTwitter}
                        size="2x"
                        style={{
                            width: '24px',
                            height: '24px',
                            marginRight: '0.25rem',
                        }}
                    />
                    Twitter
                </a>
            </li>
            <li>
                <a
                    href={linkedin}
                    target="_new"
                    rel="noopener noreferrer"
                    title={`if you like this post share it on Linkedin with your connections!`}
                >
                    <FontAwesomeIcon
                        icon={faLinkedinIn}
                        size="2x"
                        style={{
                            width: '24px',
                            height: '24px',
                            marginRight: '0.25rem',
                        }}
                    />
                    Linkedin
                </a>
            </li>
        </SocialUl>
    )
}

export default Share
