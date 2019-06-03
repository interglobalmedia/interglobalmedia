import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import nodeDrawingData from '../../data/projects/node-drawing'
import {UsesSpan} from './FeaturedProjects'

const FeaturedProject3 = () => {
    return (
        <StaticQuery
            query={featuredProject3Query}
            render={data => {
                return (
                    <li>
                        <h3>
                            <a
                                href={nodeDrawingData.liveSiteUrl}
                                title={`visit the ${
                                    nodeDrawingData.title
                                } app live site to view  on Heroku`}
                            >
                                {nodeDrawingData.title} app
                            </a>
                        </h3>
                        <Image
                            fluid={data.imageThree.childImageSharp.fluid}
                            alt={nodeDrawingData.title}
                        />
                        <UsesSpan>application uses:</UsesSpan>{' '}
                        {nodeDrawingData.tagNames}
                        <br />
                        <Link
                            state={nodeDrawingData}
                            to="/portfolio/portfolio-view"
                            title={`visit the ${
                                nodeDrawingData.title
                            } app main page to learn more`}
                        >
                            learn more
                        </Link>
                    </li>
                )
            }}
        />
    )
}

export default FeaturedProject3

export const featuredProject3Query = graphql`
    query featuredProject3Query {
        imageThree: file(
            relativePath: {eq: "node-collaborative-drawing-app.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
