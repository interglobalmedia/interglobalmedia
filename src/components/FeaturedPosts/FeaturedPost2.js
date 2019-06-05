import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import featuredPost2Data from '../../data/posts/featured-post-2'

const FeaturedPost2 = () => {
    return (
        <StaticQuery
            query={featuredPost2Query}
            render={data => {
                return (
                    <li>
                        <a href={featuredPost2Data.path} target="_new">
                            {featuredPost2Data.title}
                        </a>
                        <Image
                            fluid={data.imageTwo.childImageSharp.fluid}
                            alt={featuredPost2Data.title}
                        />
                        <br />
                        {featuredPost2Data.excerpt} ...
                        <br />
                        <br />
                        <Link to="/tags">
                            <span>tagged in:</span>
                        </Link>{' '}
                        {featuredPost2Data.tagNames}
                        <br />
                        <br />
                        <Link to="/categories">
                            <span>categorized under:</span>
                        </Link>{' '}
                        {featuredPost2Data.catNames}
                    </li>
                )
            }}
        />
    )
}

export default FeaturedPost2

export const featuredPost2Query = graphql`
    query featuredPost2Query {
        imageTwo: file(
            relativePath: {eq: "posts/mael-balland-1157034-unsplash.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
