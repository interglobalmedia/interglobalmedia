import React from 'react'
import {Link, graphql} from 'gatsby'
import {Helmet} from 'react-helmet'
import Layout from '../components/Layout/Layout'
import styled from '@emotion/styled'

const TagsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem auto;
    & h1 {
        color: rgb(47, 0, 0);
    }
    & ul {
        margin-left: -8rem;
    }
    & li {
        list-style-type: square;
        color: rgb(47, 0, 0);
    }
    & span {
        color: rgba(88, 86, 86, 0.7);
    }
`

const TagDiv = styled.div`
    & a:hover {
        text-decoration: underline;
    }
`

const Tags = props => {
    const posts = props.data.allMarkdownRemark.edges
    const {tag} = props.pageContext
    return (
        <Layout>
            <Helmet>
                <title>Categories Page</title>
            </Helmet>
            <TagsDiv>
                <h1>{`posts in: ${tag}`}</h1>
                <TagDiv>
                    {posts.map(({node}, i) => (
                        <Link to={node.fields.slug} key={i}>
                            <ul>
                                <li>
                                    <span>{node.frontmatter.title}</span>
                                </li>
                            </ul>
                        </Link>
                    ))}
                </TagDiv>
            </TagsDiv>
        </Layout>
    )
}

export default Tags

export const query = graphql`
    query TagsQuery($tag: String!) {
        allMarkdownRemark(
            limit: 2000
            sort: {fields: [frontmatter___date], order: DESC}
            filter: {frontmatter: {tags: {eq: $tag}}}
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
                        tags
                    }
                }
            }
        }
    }
`
