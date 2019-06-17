import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import SEO from '../components/Seo/Seo'

export const TagCategoryWrapper = styled.div`
    width: 90%;
    margin: 3rem auto;
`

export const TagsCategoriesH1 = styled.h1`
    margin: 0 auto;
    letter-spacing: 0.07em;
`

export const TagCategoryDiv = styled.div`
    margin: 0.75rem auto 4rem;
    width: 100%;
    & h1 {
        color: rgb(47, 0, 0);
    }
    & li {
        list-style-type: square;
        list-style-position: inside;
        text-indent: -1em;
        margin-left: 1em;
        color: rgb(47, 0, 0);
    }
    & span {
        color: rgb(88, 86, 86);
    }
`

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
                <TagCategoryDiv as="div">
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
