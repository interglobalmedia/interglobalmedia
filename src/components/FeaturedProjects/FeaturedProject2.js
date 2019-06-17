import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import speechToTextData from '../../data/projects/speech-to-text'
import {UsesSpan} from './FeaturedProjects'

const FeaturedProject2 = () => {
    return (
        <StaticQuery
            query={featuredProject2Query}
            render={data => {
                return (
                    <li>
                        <h3>
                            <a
                                href={speechToTextData.liveSiteUrl}
                                title={`visit the ${
                                    speechToTextData.title
                                } app live site to view on Github gh-pages`}
                                target="_new"
                                rel="noopener noreferrer"
                            >
                                {speechToTextData.title} app
                            </a>
                        </h3>
                        <Image
                            fluid={data.imageTwo.childImageSharp.fluid}
                            alt={speechToTextData.title}
                            style={{marginBottom: '1.5rem'}}
                        />
                        <UsesSpan as="span">application uses:</UsesSpan>{' '}
                        {speechToTextData.tagNames}
                        <br />
                        <Link
                            to="/portfolio/portfolio-view-1"
                            title={`visit the ${
                                speechToTextData.title
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

export default FeaturedProject2

export const featuredProject2Query = graphql`
    query featuredProject2Query {
        imageTwo: file(relativePath: {eq: "projects/speech-to-text.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
