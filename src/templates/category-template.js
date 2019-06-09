import React from 'react'
import {Link, graphql} from 'gatsby'
import {Helmet} from 'react-helmet'
import Layout from '../components/Layout/Layout'
import styled from '@emotion/styled'

export const TagCategoryWrapper = styled.div`
    width: 90%;
    margin: 3rem auto;
`

export const TagsCategoriesH1 = styled.h1`
    margin: 0 auto;
    letter-spacing: 0.07em;
`

export const TagsCategoriesDiv = styled.div`
    margin: 0.75rem auto 4rem;
    width: 100%;
    & h1 {
        color: rgb(47, 0, 0);
    }
    & li {
        list-style-type: square;
        color: rgb(47, 0, 0);
    }
    & span {
        color: rgb(88, 86, 86);
    }
`

const Categories = props => {
    const posts = props.data.allMarkdownRemark.edges
    const {category} = props.pageContext
    return (
        <Layout>
            <Helmet>
                <title>Categories Page</title>
            </Helmet>
            <TagCategoryWrapper>
                <TagsCategoriesH1>{`posts in: ${category}`}</TagsCategoriesH1>
                <TagsCategoriesDiv>
                    {posts.map(({node}, i) => (
                        <Link to={node.fields.slug} key={i}>
                            <li key={i}>
                                <span>{node.frontmatter.title}</span>
                            </li>
                        </Link>
                    ))}
                </TagsCategoriesDiv>
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
    }
`
