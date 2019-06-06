import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
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
                            >
                                {speechToTextData.title} app
                            </a>
                        </h3>
                        <Image
                            fluid={data.imageTwo.childImageSharp.fluid}
                            alt={speechToTextData.title}
                        />
                        <br />
                        <UsesSpan>application uses:</UsesSpan>{' '}
                        {speechToTextData.tagNames}
                        <br />
                        <br />
                        <Link
                            state={speechToTextData}
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
