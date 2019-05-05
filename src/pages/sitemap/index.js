import React from 'react'
import {graphql, Link} from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../../components/Layout/Layout'

const SitemapDiv = styled.div`
    margin: 3rem auto;
    width: 90%;
    max-width: 1026px;
    background: rgba(235, 181, 135, 0.7);
    padding: 1.5rem;
    letter-spacing: 0.07em;
    & h1,
    h2,
    h3 {
        color: rgb(133, 68, 66);
    }
`

const SitemapUl = styled.ul`
    list-style-type: square;
    list-style-position: outside;
    & li {
        color: rgb(133, 68, 66);
    }
`

const MetaDiv = styled.div`
    box-shadow: none;
    color: rgba(153, 170, 181, 1);
`

const SitemapSpan = styled.span`
    color: rgba(88, 86, 86, 0.7);
`

const SiteMapPage = props => {
    const postList = props.data.allMarkdownRemark
    return (
        <Layout>
            <SitemapDiv>
                <h1>Sitemap</h1>
                <h2>Pages</h2>
                <SitemapUl>
                    <li>
                        <Link to="/" style={{boxShadow: 'none'}}>
                            <SitemapSpan>Home</SitemapSpan>
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" style={{boxShadow: 'none'}}>
                            <SitemapSpan>Blog</SitemapSpan>
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio" style={{boxShadow: 'none'}}>
                            <SitemapSpan>Portfolio</SitemapSpan>
                        </Link>
                    </li>
                    <li>
                        <Link to="/rss.xml" style={{boxShadow: 'none'}}>
                            <SitemapSpan>RSS</SitemapSpan>
                        </Link>
                    </li>
                </SitemapUl>
                <h2>Posts</h2>

                {postList.edges.map(({node}, i) => (
                    <Link to={node.fields.slug} key={i}>
                        <h3>{node.frontmatter.title}</h3>
                        <MetaDiv>
                            by {node.frontmatter.author} on{' '}
                            {node.frontmatter.date}
                        </MetaDiv>
                        <SitemapUl>
                            <li>
                                <SitemapSpan>{node.excerpt}</SitemapSpan>
                            </li>
                        </SitemapUl>
                    </Link>
                ))}
            </SitemapDiv>
        </Layout>
    )
}

export default SiteMapPage

export const sitemapQuery = graphql`
    query sitemapQuery {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            edges {
                node {
                    fields {
                        slug
                    }
                    excerpt(pruneLength: 150)
                    frontmatter {
                        date(formatString: "DD MMMM, YYYY")
                        title
                        author
                    }
                }
            }
        }
    }
`
