import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import jukeboxData from '../../data/projects/jukebox'
import {UsesSpan} from '../../exports/named-exports'

const FeaturedProject6 = () => {
    return (
        <StaticQuery
            query={featuredProject6Query}
            render={data => {
                return (
                    <li>
                        <h3>
                            <a
                                href={jukeboxData.liveSiteUrl}
                                title={`visit the ${jukeboxData.title} app live site to view on Heroku`}
                                target="_new"
                                rel="noopener noreferrer"
                            >
                                {jukeboxData.title} app
                            </a>
                        </h3>
                        <Image
                            fluid={data.imageThree.childImageSharp.fluid}
                            alt={jukeboxData.title}
                            style={{marginBottom: '1.5rem'}}
                        />
                        <UsesSpan as="span">application uses:</UsesSpan>{' '}
                        {jukeboxData.tagNames}
                        <Link
                            to="/portfolio/portfolio-view-2"
                            title={`visit the ${jukeboxData.title} app main page to learn more`}
                        >
                            learn more
                        </Link>
                    </li>
                )
            }}
        />
    )
}

export default FeaturedProject6

export const featuredProject6Query = graphql`
    query featuredProject6Query {
        imageThree: file(
            relativePath: {eq: "projects/welcome-to-the-groove.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`