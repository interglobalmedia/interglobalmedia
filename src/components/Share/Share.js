import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faFacebookF,
    faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

import {
    faShare,
    faShareAlt,
} from '@fortawesome/free-solid-svg-icons'

import {SocialUl} from '../../exports/named-exports'

const Share = props => {
    const fb = `https://www.facebook.com/sharer/sharer.php?u=${props.url +
        props.pathname}&text=${props.title}`
    const twitter = `https://twitter.com/intent/tweet?url=${props.url +
        props.pathname}&text=${props.title} by @letsbsocial1`
    const linkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${props.url +
        props.pathname}&text=${props.title}`
    const hackerNews = `https://news.ycombinator.com/submitlink?u=${props.url +
        props.pathname}&text=${props.title}`
    const reddit = `https://www.reddit.com/submit?title=${props.url +
        props.pathname}&text=${props.title}`
    return (
        <SocialUl as="ul">
            <li>
                <a
                    href={fb}
                    target="_new"
                    rel="noopener noreferrer"
                    title={`if you like this post share it on Facebook with your friends!`}
                >
                    <FontAwesomeIcon
                        icon={faFacebookF}
                        size="2x"
                        style={{
                            width: '24px',
                            height: '24px',
                            marginLeft: '-0.5rem',
                        }}
                    />{' '}
                    Facebook
                </a>
            </li>
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
                            width: '1.5rem',
                            height: '1.5rem',
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
                            width: '1.5rem',
                            height: '1.5rem',
                            marginRight: '0.25rem',
                        }}
                    />
                    Linkedin
                </a>
            </li>
            <li>
                <a
                    href={hackerNews}
                    target="_new"
                    rel="noopener noreferrer"
                    title={`if you like this post share it on Hacker News!`}
                >
                    <FontAwesomeIcon
                        icon={faShare}
                        size="2x"
                        style={{
                            width: '1.5rem',
                            height: '1.5rem',
                            marginRight: '0.25rem',
                        }}
                    />
                    Hacker News
                </a>
            </li>
            <li>
                <a
                    href={reddit}
                    target="_new"
                    rel="noopener noreferrer"
                    title={`if you like this post share it on Reddit!`}
                >
                    <FontAwesomeIcon
                        icon={faShareAlt}
                        size="2x"
                        style={{
                            width: '1.5rem',
                            height: '1.5rem',
                            marginRight: '0.25rem',
                        }}
                    />
                    Reddit
                </a>
            </li>
        </SocialUl>
    )
}

export default Share
