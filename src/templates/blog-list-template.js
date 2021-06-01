import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/Layout/Layout'
import Img from 'gatsby-image'
import SEO from '../components/Seo/Seo'

import {
    PostDiv,
    PostListDiv,
    PostListTitle,
    ExcerptWrapUl,
    PostListMetaDiv,
    BLPrevNextUl,
} from '../exports/named-exports'

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
                            <li>
                                {node.timeToRead} minute read{' '}
                                <span role="img" aria-label="book">
                                    📗
                                </span>
                            </li>
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
                <BLPrevNextUl as="ul">
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
                </BLPrevNextUl>
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
                        date(formatString: "MM DD YYYY")
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
