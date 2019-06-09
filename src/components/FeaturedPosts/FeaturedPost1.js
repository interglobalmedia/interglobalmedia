import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import featuredPost1Data from '../../data/posts/featured-post-1'

const FeaturedPost1 = () => {
    return (
        <StaticQuery
            query={featuredPost1Query}
            render={data => {
                return (
                    <li>
                        <a
                            href={featuredPost1Data.path}
                            title={`visit the post entitled "${
                                featuredPost1Data.title
                            }" to read more`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            {featuredPost1Data.title}
                        </a>
                        <Image
                            fluid={data.postImageOne.childImageSharp.fluid}
                            alt={featuredPost1Data.title}
                            style={{marginBottom: '1rem', marginTop: '1rem'}}
                        />
                        {featuredPost1Data.excerpt} ...
                        <br />
                        <Link
                            to="/tags"
                            title={`visit the tags page for the post "${
                                featuredPost1Data.title
                            }" to view more`}
                        >
                            <span>tagged in:</span>
                        </Link>{' '}
                        {featuredPost1Data.tagNames}
                        <br />
                        <Link
                            to="/categories"
                            title={`visit the categories page for the post "${
                                featuredPost1Data.title
                            }" to view more`}
                        >
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
            relativePath: {eq: "posts/fredy-jacob-764477-unsplash.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
