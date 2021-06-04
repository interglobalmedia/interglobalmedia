import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import featuredPost3Data from '../../data/posts/featured-post-3'

const FeaturedPost3 = () => {
    return (
        <StaticQuery
            query={featuredPost3Query}
            render={data => {
                return (
                    <li>
                        <a
                            href={featuredPost3Data.path}
                            title={`visit the post entitled "${featuredPost3Data.title}" to read more`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            {featuredPost3Data.title}
                        </a>
                        <Image
                            fluid={data.imageThree.childImageSharp.fluid}
                            alt={featuredPost3Data.title}
                            style={{marginBottom: '1rem', marginTop: '1rem'}}
                        />
                        {featuredPost3Data.excerpt} ...
                        <br />
                        <Link
                            to="/tags"
                            title={`view the tags page for the post "${featuredPost3Data.title}" to view more`}
                        >
                            tagged in:
                        </Link>{' '}
                        {featuredPost3Data.tagNames}
                        <br />
                        <Link
                            to="/categories"
                            title={`view the categories page for the post "${featuredPost3Data.title}" to view more`}
                        >
                            categorized under:
                        </Link>{' '}
                        {featuredPost3Data.catNames}
                    </li>
                )
            }}
        />
    )
}

export default FeaturedPost3

export const featuredPost3Query = graphql`
    query featuredPost3Query {
        imageThree: file(
            relativePath: {eq: "posts/tim-johnson-chv5d04_gwk-unsplash.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
