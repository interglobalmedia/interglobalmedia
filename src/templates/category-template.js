import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/Seo/Seo'

import {
    TagCategoryWrapper,
    TagsCategoriesH1,
    TagCategoryDiv,
} from '../exports/named-exports'

const Categories = props => {
    const posts = props.data.allMarkdownRemark.edges
    const {category} = props.pageContext
    const title = props.data.site.siteMetadata.title
    const keywords = props.data.site.siteMetadata.keywords
    return (
        <Layout>
            <SEO location={props.location} title={title} keywords={keywords} />
            <TagCategoryWrapper as="div">
                <TagsCategoriesH1 as="h1">{`posts in: ${category}`}</TagsCategoriesH1>
                <TagCategoryDiv as="ul">
                    {posts.map(({node}, i) => (
                        <Link to={node.fields.slug} key={i}>
                            <li key={i}>
                                <span>{node.frontmatter.title}</span>
                            </li>
                        </Link>
                    ))}
                </TagCategoryDiv>
            </TagCategoryWrapper>
        </Layout>
    )
}

export default Categories

export const categoriesQuery = graphql`
    query categoriesQuery($category: String!) {
        allMarkdownRemark(
            limit: 2000
            sort: {fields: [frontmatter___date], order: DESC}
            filter: {frontmatter: {categories: {eq: $category}}}
        ) {
            edges {
                node {
                    frontmatter {
                        title
                    }
                    fields {
                        slug
                    }
                    frontmatter {
                        categories
                    }
                }
            }
        }
        site {
            siteMetadata {
                title
                keywords
            }
        }
    }
`
