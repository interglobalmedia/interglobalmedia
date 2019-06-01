import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import featuredPost1Data from '../../data/posts/featured-post-1'

const FeaturedPost1 = () => {
    return (
        <StaticQuery
            query={featuredPost1Query}
            render={data => {
                return (
                    <li>
                        <a href={featuredPost1Data.path} target="_new">
                            {featuredPost1Data.title}
                        </a>
                        <Image
                            fluid={data.postImageOne.childImageSharp.fluid}
                            alt={featuredPost1Data.title}
                        />
                        {featuredPost1Data.excerpt} ...
                        <br />
                        <Link to="/tags">
                            <span>tagged in:</span>
                        </Link>{' '}
                        {featuredPost1Data.tagNames}
                        <br />
                        <Link to="/categories">
                            <span>categorized under:</span>
                        </Link>{' '}
                        {featuredPost1Data.catNames}
                    </li>
                )
            }}
        />
    )
}

export default FeaturedPost1

export const featuredPost1Query = graphql`
    query featuredPost1Query {
        postImageOne: file(
            relativePath: {eq: "fredy-jacob-764477-unsplash.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
