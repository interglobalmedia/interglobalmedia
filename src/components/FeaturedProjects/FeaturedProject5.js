import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import customHTML5VideoData from '../../data/projects/custom-html5-video-player'
import {UsesSpan} from '../../exports/named-exports'

const FeaturedProject5 = () => {
    return (
        <StaticQuery
            query={featuredProject5Query}
            render={data => {
                return (
                    <li>
                        <h3>
                            <a
                                href={customHTML5VideoData.liveSiteUrl}
                                title={`visit the ${customHTML5VideoData.title} app live site to view on Heroku`}
                                target="_new"
                                rel="noopener noreferrer"
                            >
                                {customHTML5VideoData.title} app
                            </a>
                        </h3>
                        <Image
                            fluid={data.imageThree.childImageSharp.fluid}
                            alt={customHTML5VideoData.title}
                            style={{marginBottom: '1.5rem'}}
                        />
                        <UsesSpan as="span">application uses:</UsesSpan>{' '}
                        {customHTML5VideoData.tagNames}
                        <Link
                            to="/portfolio/portfolio-view-10"
                            title={`visit the ${customHTML5VideoData.title} app main page to learn more`}
                        >
                            learn more
                        </Link>
                    </li>
                )
            }}
        />
    )
}

export default FeaturedProject5

export const featuredProject5Query = graphql`
    query featuredProject5Query {
        imageThree: file(
            relativePath: {eq: "projects/custom-html5-video-player.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
