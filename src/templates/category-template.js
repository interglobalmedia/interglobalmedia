import React from 'react'
import {Link, graphql} from 'gatsby'
import {Helmet} from 'react-helmet'
import Layout from '../components/Layout/Layout'
import styled from '@emotion/styled'

const CategoryWrapper = styled.div`
    width: 90%;
    margin: 3rem auto;
`

const CategoriesH1 = styled.h1`
    margin: 0 auto;
    letter-spacing: 0.07em;
`

const CategoriesDiv = styled.div`
    margin: 0.75rem auto 4rem;
    width: 100%;
    & h1 {
        color: rgb(47, 0, 0);
    }
    & li {
        list-style-type: square;
        color: rgb(47, 0, 0);
    }
    & a {
        box-shadow: none;
    }
    & a:hover {
        text-decoration: underline;
    }
    & span {
        color: rgba(88, 86, 86, 0.7);
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
            <CategoryWrapper>
                <CategoriesH1>{`posts in: ${category}`}</CategoriesH1>
                <CategoriesDiv>
                    {posts.map(({node}, i) => (
                        <Link to={node.fields.slug} key={i}>
                            <li key={i}>
                                <span>{node.frontmatter.title}</span>
                            </li>
                        </Link>
                    ))}
                </CategoriesDiv>
            </CategoryWrapper>
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
