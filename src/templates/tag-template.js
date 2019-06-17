import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/Layout/Layout'
import {
    TagCategoryWrapper,
    TagsCategoriesH1,
    TagCategoryDiv,
} from './category-template'
import SEO from '../components/Seo/Seo'

const Tags = props => {
    const posts = props.data.allMarkdownRemark.edges
    const {tag} = props.pageContext
    const title = props.data.site.siteMetadata.title
    const keywords = props.data.site.siteMetadata.keywords
    return (
        <Layout>
            <SEO location={props.location} title={title} keywords={keywords} />
            <TagCategoryWrapper as="div">
                <TagsCategoriesH1 as="h1">{`posts in: ${tag}`}</TagsCategoriesH1>
                <TagCategoryDiv as="div">
                    {posts.map(({node}, i) => (
                        <li key={i}>
                            <Link to={node.fields.slug} key={i}>
                                <span>{node.frontmatter.title}</span>
                            </Link>
                        </li>
                    ))}
                </TagCategoryDiv>
            </TagCategoryWrapper>
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
        site {
            siteMetadata {
                title
                keywords
            }
        }
    }
`
