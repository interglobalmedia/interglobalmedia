import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import featuredPost5Data from '../../data/posts/featured-post-5'

const FeaturedPost5 = () => {
    return (
        <StaticQuery
            query={featuredPost5Query}
            render={data => {
                return (
                    <li>
                        <a
                            href={featuredPost5Data.path}
                            title={`visit the post entitled "${featuredPost5Data.title}" to read more`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            {featuredPost5Data.title}
                        </a>
                        <Image
                            fluid={data.imageFive.childImageSharp.fluid}
                            alt={featuredPost5Data.title}
                            style={{marginBottom: '1rem', marginTop: '1rem'}}
                        />
                        {featuredPost5Data.excerpt} ...
                        <br />
                        <Link
                            to="/tags"
                            title={`view the tags page for the post "${featuredPost5Data.title}" to view more`}
                        >
                            tagged in:
                        </Link>{' '}
                        {featuredPost5Data.tagNames}
                        <br />
                        <Link
                            to="/categories"
                            title={`view the categories page for the post "${featuredPost5Data.title}" to view more`}
                        >
                            categorized under:
                        </Link>{' '}
                        {featuredPost5Data.catNames}
                    </li>
                )
            }}
        />
    )
}

export default FeaturedPost5

export const featuredPost5Query = graphql`
    query featuredPost5Query {
        imageFive: file(
            relativePath: {eq: "posts/stanislav-kondratiev-123540-unsplash.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
