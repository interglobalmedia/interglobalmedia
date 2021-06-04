import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import featuredPost4Data from '../../data/posts/featured-post-4'

const FeaturedPost4 = () => {
    return (
        <StaticQuery
            query={featuredPost4Query}
            render={data => {
                return (
                    <li>
                        <a
                            href={featuredPost4Data.path}
                            title={`visit the post entitled "${featuredPost4Data.title}" to read more`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            {featuredPost4Data.title}
                        </a>
                        <Image
                            fluid={data.imageFour.childImageSharp.fluid}
                            alt={featuredPost4Data.title}
                            style={{marginBottom: '1rem', marginTop: '1rem'}}
                        />
                        {featuredPost4Data.excerpt} ...
                        <br />
                        <Link
                            to="/tags"
                            title={`view the tags page for the post "${featuredPost4Data.title}" to view more`}
                        >
                            tagged in:
                        </Link>{' '}
                        {featuredPost4Data.tagNames}
                        <br />
                        <Link
                            to="/categories"
                            title={`view the categories page for the post "${featuredPost4Data.title}" to view more`}
                        >
                            categorized under:
                        </Link>{' '}
                        {featuredPost4Data.catNames}
                    </li>
                )
            }}
        />
    )
}

export default FeaturedPost4

export const featuredPost4Query = graphql`
    query featuredPost4Query {
        imageFour: file(
            relativePath: {eq: "posts/joshua-sortino-71vab1fxb6g-unsplash.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
