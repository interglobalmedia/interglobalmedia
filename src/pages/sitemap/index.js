import React from 'react'
import {graphql, Link} from 'gatsby'
import styled from 'styled-components'
import Layout from '../../components/Layout/Layout'
import SEO from '../../components/Seo/Seo'

const SitemapDiv = styled.div`
    margin: 3rem auto;
    width: 90%;
    max-width: 1026px;
    background: rgba(235, 181, 135, 0.7);
    padding: 1.5rem;
    letter-spacing: 0.07em;
    & h1 {
        font-weight: 600;
    }
    & h1,
    h2,
    h4 {
        color: rgb(133, 68, 66);
    }
    & h4 {
        text-transform: capitalize;
        font-size: 1.2rem;
    }
    & a:hover h4 {
        text-decoration: underline;
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
    color: #a7138a;
`

const SitemapSpan = styled.span`
    color: rgb(88, 86, 86);
`

const SiteMapPage = props => {
    const postList = props.data.allMarkdownRemark
    const {data} = props
    const title = data.site.siteMetadata.title
    const keywords = data.site.siteMetadata.keywords
    return (
        <Layout>
            <SEO location={props.location} title={title} keywords={keywords} />
            <SitemapDiv as="div">
                <h1>Sitemap</h1>
                <h2>Pages</h2>
                <SitemapUl as="ul">
                    <li>
                        <Link
                            to="/"
                            title={`visit the link to the Home Page to view our featured projects, posts, and an introduction to our services`}
                        >
                            <SitemapSpan as="span">Home</SitemapSpan>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blog"
                            title={`visit the link to the Blog Page to read our posts`}
                        >
                            <SitemapSpan as="span">Blog</SitemapSpan>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            title={`visit the link to the Contact Page to connect with us`}
                        >
                            <SitemapSpan as="span">Contact</SitemapSpan>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/portfolio"
                            title={`visit the link to the Portfolio Page to view various projects we have built`}
                        >
                            <SitemapSpan as="span">Portfolio</SitemapSpan>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            title={`visit the link to the Services Page to learn about the various services we offer`}
                        >
                            <SitemapSpan as="span">Services</SitemapSpan>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/categories"
                            title={`visit the link to our Categories Page to view the various categories our Blog contains`}
                        >
                            <SitemapSpan as="span">Categories</SitemapSpan>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/tags"
                            title={`visit the link to our Tags Page to view the various tags our Blog contains`}
                        >
                            <SitemapSpan as="span">Tags</SitemapSpan>
                        </Link>
                    </li>
                    <li>
                        <a
                            href="http://www.interglobalmedianetwork.com/rss.xml"
                            title={`visit the link to our RSS Feed to view our complete site content`}
                        >
                            <SitemapSpan as="span">RSS</SitemapSpan>
                        </a>
                    </li>
                </SitemapUl>
                <h2>Posts</h2>
                {postList.edges.map(({node}, i) => (
                    <div key={i}>
                        <Link
                            to={node.fields.slug}
                            key={i}
                            title={`visit the link to the post entitled "${
                                node.frontmatter.title
                            }" to read more`}
                        >
                            <h4>{node.frontmatter.title}</h4>
                        </Link>
                        <MetaDiv as="div">
                            by {node.frontmatter.author} on{' '}
                            {node.frontmatter.date}
                        </MetaDiv>
                        <SitemapUl as="ul">
                            <li>
                                <SitemapSpan as="span">
                                    {node.excerpt}
                                </SitemapSpan>
                            </li>
                        </SitemapUl>
                    </div>
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
