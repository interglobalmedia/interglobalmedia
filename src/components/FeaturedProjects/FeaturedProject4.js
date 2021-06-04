import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import musicInBrowserData from '../../data/projects/music-in-browser'
import {UsesSpan} from '../../exports/named-exports'

const FeaturedProject4 = () => {
    return (
        <StaticQuery
            query={featuredProject4Query}
            render={data => {
                return (
                    <li>
                        <h3>
                            <a
                                href={musicInBrowserData.liveSiteUrl}
                                title={`visit the ${musicInBrowserData.title} app live site to view on Heroku`}
                                target="_new"
                                rel="noopener noreferrer"
                            >
                                {musicInBrowserData.title} app
                            </a>
                        </h3>
                        <Image
                            fluid={data.imageThree.childImageSharp.fluid}
                            alt={musicInBrowserData.title}
                            style={{marginBottom: '1.5rem'}}
                        />
                        <UsesSpan as="span">application uses:</UsesSpan>{' '}
                        {musicInBrowserData.tagNames}
                        <Link
                            to="/portfolio/portfolio-view-11"
                            title={`visit the ${musicInBrowserData.title} app main page to learn more`}
                        >
                            learn more
                        </Link>
                    </li>
                )
            }}
        />
    )
}

export default FeaturedProject4

export const featuredProject4Query = graphql`
    query featuredProject4Query {
        imageThree: file(
            relativePath: {eq: "projects/making-music-in-browser.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
