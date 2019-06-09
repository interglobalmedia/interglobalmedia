import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import featuredPost2Data from '../../data/posts/featured-post-2'

const FeaturedPost2 = () => {
    return (
        <StaticQuery
            query={featuredPost2Query}
            render={data => {
                return (
                    <li>
                        <a
                            href={featuredPost2Data.path}
                            title={`visit the post entitled "${
                                featuredPost2Data.title
                            }" to read more`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            {featuredPost2Data.title}
                        </a>
                        <Image
                            fluid={data.imageTwo.childImageSharp.fluid}
                            alt={featuredPost2Data.title}
                            style={{marginBottom: '1rem', marginTop: '1rem'}}
                        />
                        {featuredPost2Data.excerpt} ...
                        <br />
                        <Link
                            to="/tags"
                            title={`view the tags page for the post "${
                                featuredPost2Data.title
                            }" to view more`}
                        >
                            tagged in:
                        </Link>{' '}
                        {featuredPost2Data.tagNames}
                        <br />
                        <Link
                            to="/categories"
                            title={`view the categories page for the post "${
                                featuredPost2Data.title
                            }" to view more`}
                        >
                            categorized under:
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
