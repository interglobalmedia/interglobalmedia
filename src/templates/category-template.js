import React from 'react'
import {Link, graphql} from 'gatsby'
import {Helmet} from 'react-helmet'
import Layout from '../components/Layout/Layout'
import styled from '@emotion/styled'

const CategoryDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem auto;
    & h1 {
        color: rgb(47, 0, 0);
    }
    & ul {
        margin-left: -7rem;
    }
    & li {
        list-style-type: square;
        color: rgba(47, 0, 0);
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
            <CategoryDiv>
                <h1>{`posts in: ${category}`}</h1>
                <div>
                    {posts.map(({node}, i) => (
                        <Link to={node.fields.slug} key={i}>
                            <ul>
                                <li>
                                    <span>{node.frontmatter.title}</span>
                                </li>
                            </ul>
                        </Link>
                    ))}
                </div>
            </CategoryDiv>
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
