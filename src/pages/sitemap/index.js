import React from 'react'
import {graphql, Link} from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../../components/Layout/Layout'
import SEO from '../../components/Seo/Seo'

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
    & ul li a {
        box-shadow: none;
    }
    & a:hover h3 {
        text-decoration: underline;
    }
`

const SitemapUl = styled.ul`
    list-style-type: square;
    list-style-position: outside;
    & li {
        color: rgb(133, 68, 66);
    }
    & a:hover {
        text-decoration: underline;
    }
`

const MetaDiv = styled.div`
    box-shadow: none;
    color: #a7138a;
`

const SitemapSpan = styled.span`
    color: rgba(88, 86, 86, 1);
`

const SiteMapPage = props => {
    const postList = props.data.allMarkdownRemark
    const {data} = props
    const title = data.site.siteMetadata.title
    const keywords = data.site.siteMetadata.keywords
    return (
        <Layout>
            <SEO location={props.location} title={title} keywords={keywords} />
            <SitemapDiv>
                <h1>Sitemap</h1>
                <h2>Pages</h2>
                <SitemapUl>
                    <li>
                        <Link
                            to="/"
                            title={`visit the link to the Home Page to view our featured projects, posts, and an introduction to our services`}
                        >
                            <SitemapSpan>Home</SitemapSpan>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blog"
                            title={`visit the link to the Blog Page to read our posts`}
                        >
                            <SitemapSpan>Blog</SitemapSpan>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            title={`visit the link to the Contact Page to connect with us`}
                        >
                            <SitemapSpan>Contact</SitemapSpan>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/portfolio"
                            title={`visit the link to the Portfolio Page to view various projects we have built`}
                        >
                            <SitemapSpan>Portfolio</SitemapSpan>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            title={`visit the link to the Services Page to learn about the various services we offer`}
                        >
                            <SitemapSpan>Services</SitemapSpan>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/categories"
                            title={`visit the link to our Categories Page to view the various categories our Blog contains`}
                        >
                            <SitemapSpan>Categories</SitemapSpan>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/tags"
                            title={`visit the link to our Tags Page to view the various tags our Blog contains`}
                        >
                            <SitemapSpan>Tags</SitemapSpan>
                        </Link>
                    </li>
                    <li>
                        <a
                            href="http://www.interglobalmedianetwork.com/rss.xml"
                            title={`visit the link to our RSS Feed to view our complete site content`}
                        >
                            <SitemapSpan>RSS</SitemapSpan>
                        </a>
                    </li>
                </SitemapUl>
                <h2>Posts</h2>
                {postList.edges.map(({node}, i) => (
                    <Link
                        to={node.fields.slug}
                        key={i}
                        title={`visit the link to the post entitled "${
                            node.frontmatter.title
                        }" to read more`}
                    >
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
        site {
            siteMetadata {
                title
                keywords
            }
        }
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
