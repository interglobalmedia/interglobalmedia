import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import nodeChatData from '../../data/projects/node-chat'
import {UsesSpan} from '../../exports/named-exports'

const FeaturedProject1 = () => {
    return (
        <StaticQuery
            query={featuredProject1Query}
            render={data => {
                return (
                    <li>
                        <h3>
                            <a
                                href={nodeChatData.liveSiteUrl}
                                title={`visit the ${nodeChatData.title} app live site to view on Heroku`}
                                target="_new"
                                rel="noopener noreferrer"
                            >
                                {nodeChatData.title} app
                            </a>
                        </h3>
                        <Image
                            fluid={data.imageOne.childImageSharp.fluid}
                            alt={nodeChatData.title}
                            style={{marginBottom: '1.5rem'}}
                        />
                        <UsesSpan as="span">application uses:</UsesSpan>{' '}
                        {nodeChatData.tagNames}
                        <br />
                        <Link
                            to="/portfolio/portfolio-view-6"
                            title={`visit the ${nodeChatData.title} app main page to learn more`}
                        >
                            learn more
                        </Link>
                    </li>
                )
            }}
        />
    )
}

export default FeaturedProject1

export const featuredProject1Query = graphql`
    query featuredProject1Query {
        imageOne: file(relativePath: {eq: "projects/chatterbox.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
