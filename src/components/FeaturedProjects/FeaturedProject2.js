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
                            <a href={speechToTextData.liveSiteUrl}>
                                {speechToTextData.title} app
                            </a>
                        </h3>
                        <Image
                            fluid={data.imageTwo.childImageSharp.fluid}
                            alt={speechToTextData.title}
                        />
                        <UsesSpan>application uses:</UsesSpan>{' '}
                        {speechToTextData.tagNames}
                        <br />
                        <Link
                            state={speechToTextData}
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

export default FeaturedProject2

export const featuredProject2Query = graphql`
    query featuredProject2Query {
        imageTwo: file(relativePath: {eq: "speech-to-text.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
