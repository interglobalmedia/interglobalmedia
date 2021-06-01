/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import {rhythm} from '../../utils/typography'

import {BioDiv} from '../../exports/named-exports'

function Bio() {
    return (
        <StaticQuery
            query={bioQuery}
            render={data => {
                const {author, social} = data.site.siteMetadata
                return (
                    <BioDiv as="div">
                        <Image
                            fixed={data.avatar.childImageSharp.fixed}
                            alt={author}
                            style={{
                                marginRight: rhythm(1 / 2),
                                marginBottom: 0,
                                minWidth: 50,
                                borderRadius: `100%`,
                            }}
                            imgStyle={{
                                borderRadius: `50%`,
                            }}
                        />
                        <p>
                            Created by <strong>{author}</strong> who lives and
                            works in New York City building useful things.
                            {` `}
                            <a
                                href={`https://twitter.com/${social.twitter}`}
                                title={`visit this Twitter link to follow Maria`}
                                target="_new"
                                rel="noopener noreferrer"
                            >
                                You should follow her on Twitter
                            </a>
                            . She also has a developer blog{' '}
                            <a
                                href="https://www.mariadcampbell.com"
                                title={`visit this link to Maria's developer blog to read her posts there`}
                                target="_new"
                                rel="noopener noreferrer"
                            >
                                mariadcampbell.com
                            </a>{' '}
                            you may want to check out!
                        </p>
                    </BioDiv>
                )
            }}
        />
    )
}

const bioQuery = graphql`
    query BioQuery {
        avatar: file(absolutePath: {regex: "/profileSmall.png/"}) {
            childImageSharp {
                fixed(width: 50, height: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        site {
            siteMetadata {
                author
                social {
                    twitter
                }
            }
        }
    }
`

export default Bio
