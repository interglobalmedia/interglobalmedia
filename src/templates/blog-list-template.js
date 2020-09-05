import React from 'react'
import {Link, graphql} from 'gatsby'
import {rhythm} from '../utils/typography'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import Img from 'gatsby-image'
import SEO from '../components/Seo/Seo'

export const PostDiv = styled.div`
    width: 90%;
    max-width: 1026px;
    margin: 3rem auto;
`

export const PostListDiv = styled.div`
    position: relative;
    border: 1px solid gainsboro;
    padding: 1rem 1rem 0;
    box-shadow: 0 -1px 4px #ede7e7;
    margin: 1rem 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: rgba(0, 0, 0, 0.8);
    letter-spacing: 0.07em;
    &:hover {
        background: rgba(255, 153, 0, 0.5);
    }
`

export const PostListTitle = styled.h1`
    font-size: 1.3rem;
    font-weight: normal;
    margin-bottom: 0.25rem;
    line-height: 1.3;
    color: rgb(39, 74, 169);
`

export const ExcerptWrapUl = styled.ul`
    display: flex;
    flex-direction: column;
    margin-left: 0;
    color: rgb(161, 141, 104);
    & li {
        list-style-type: none;
        color: rgba(88, 86, 86, 1);
    }
    & img {
        padding-right: ${rhythm(1 / 2)};
        padding-top: ${rhythm(1 / 2)};
    }
    @media (min-width: 600px) {
        flex-direction: row;
        align-items: flex-start;
        & li:nth-of-type(2) {
            padding-top: ${rhythm(1 / 2)};
        }
    }
`

export const PostListMetaDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    color: rgba(47, 0, 0);
`

export const PrevNextUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1026px;
    margin: 1.5rem auto;
    padding: 0 0.5rem 0;
`

const BlogPage = props => {
    const postList = props.data.allMarkdownRemark
    const {currentPage, numPages} = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
        currentPage - 1 === 1
            ? '/blog/'
            : `/blog/${(currentPage - 1).toString()}`
    const nextPage = `/blog/${(currentPage + 1).toString()}`
    const {data} = props
    const title = data.site.siteMetadata.title
    const keywords = data.site.siteMetadata.keywords
    return (
        <Layout>
            <SEO location={props.location} title={title} keywords={keywords} />
            <PostDiv as="div">
                {postList.edges.map(({node}, i) => (
                    <PostListDiv key={i} as="div">
                        <Link
                            to={node.fields.slug}
                            key={i}
                            title={`visit link to the post entitled "${node.frontmatter.title}" to read more`}
                        >
                            <PostListTitle as="h1">
                                {node.frontmatter.title}
                            </PostListTitle>
                        </Link>
                        <PostListMetaDiv as="div">
                            by {node.frontmatter.author} {node.frontmatter.date}
                        </PostListMetaDiv>
                        <PostListMetaDiv as="div">
                            <li>{node.timeToRead} minute read 📗</li>
                        </PostListMetaDiv>
                        <ExcerptWrapUl as="ul">
                            <li>
                                <Img
                                    fixed={
                                        node.frontmatter.image.childImageSharp
                                            .fixed
                                    }
                                />
                            </li>
                        </ExcerptWrapUl>
                    </PostListDiv>
                ))}
                <PrevNextUl as="ul">
                    {!isFirst && (
                        <Link
                            to={prevPage}
                            rel="prev"
                            style={{
                                color: prevPage
                                    ? 'color: rgb(47, 0, 0);'
                                    : 'color: rgb(47, 0, 0)',
                                letterSpacing: '0.07em',
                                marginLeft: '0.25rem',
                            }}
                            title={`go to previous ${prevPage} blog page to view newer posts`}
                        >
                            ← Newer
                        </Link>
                    )}
                    {!isLast && (
                        <Link
                            to={nextPage}
                            rel="next"
                            style={{
                                color: nextPage
                                    ? 'color: rgb(47, 0, 0)'
                                    : 'color: rgb(47, 0, 0)',
                                letterSpacing: '0.07em',
                                marginLeft: '0.5rem',
                            }}
                            title={`go to next ${nextPage} blog page to view older posts`}
                        >
                            Older →
                        </Link>
                    )}
                </PrevNextUl>
            </PostDiv>
        </Layout>
    )
}

export default BlogPage

export const blogListQuery = graphql`
    query blogListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}
            filter: {frontmatter: {date: {ne: null}}}
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    timeToRead
                    excerpt(pruneLength: 150)
                    frontmatter {
                        date(fromNow: true)
                        title
                        author
                        image {
                            childImageSharp {
                                fixed(width: 200) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
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
