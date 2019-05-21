import React from 'react'
import {Link, graphql} from 'gatsby'
import {Helmet} from 'react-helmet'
import Layout from '../components/Layout/Layout'
import styled from '@emotion/styled'

const TagWrapper = styled.div`
    width: 90%;
    margin: 3rem auto;
`

const TagsH1 = styled.h1`
    margin: 0 auto;
    letter-spacing: 0.07em;
`

const TagsDiv = styled.div`
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

const Tags = props => {
    const posts = props.data.allMarkdownRemark.edges
    const {tag} = props.pageContext
    return (
        <Layout>
            <Helmet>
                <title>Tags Page</title>
            </Helmet>
            <TagWrapper>
                <TagsH1>{`posts in: ${tag}`}</TagsH1>
                <TagsDiv>
                    {posts.map(({node}, i) => (
                        <li key={i}>
                            <Link to={node.fields.slug} key={i}>
                                <span>{node.frontmatter.title}</span>
                            </Link>
                        </li>
                    ))}
                </TagsDiv>
            </TagWrapper>
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
