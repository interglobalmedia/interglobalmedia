import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import nodeChatData from '../../data/projects/node-chat'
import {UsesSpan} from './FeaturedProjects'

const FeaturedProject1 = () => {
    return (
        <StaticQuery
            query={featuredProject1Query}
            render={data => {
                return (
                    <li>
                        <h3>
                            <a href={nodeChatData.liveSiteUrl}>
                                {nodeChatData.title} app
                            </a>
                        </h3>
                        <Image
                            fluid={data.imageOne.childImageSharp.fluid}
                            alt={nodeChatData.title}
                        />
                        <UsesSpan>application uses:</UsesSpan>{' '}
                        {nodeChatData.tagNames}
                        <br />
                        <Link
                            state={nodeChatData}
                            to="/portfolio/portfolio-view"
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
        imageOne: file(relativePath: {eq: "chatterbox.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
