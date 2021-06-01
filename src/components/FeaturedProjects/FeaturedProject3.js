import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import nodeDrawingData from '../../data/projects/node-drawing'
import {UsesSpan} from '../../exports/named-exports'

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
                                title={`visit the ${nodeDrawingData.title} app live site to view on Heroku`}
                                target="_new"
                                rel="noopener noreferrer"
                            >
                                {nodeDrawingData.title} app
                            </a>
                        </h3>
                        <Image
                            fluid={data.imageThree.childImageSharp.fluid}
                            alt={nodeDrawingData.title}
                            style={{marginBottom: '1.5rem'}}
                        />
                        <UsesSpan as="span">application uses:</UsesSpan>{' '}
                        {nodeDrawingData.tagNames}
                        <br />
                        <Link
                            to="/portfolio/portfolio-view-7"
                            title={`visit the ${nodeDrawingData.title} app main page to learn more`}
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
            relativePath: {eq: "projects/node-collaborative-drawing-app.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
