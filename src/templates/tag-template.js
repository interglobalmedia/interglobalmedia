import React from 'react'
import {Link, graphql} from 'gatsby'
import {Helmet} from 'react-helmet'
import Layout from '../components/Layout/Layout'
import {
    TagCategoryWrapper,
    TagsCategoriesH1,
    TagsCategoriesDiv,
} from './category-template'

const Tags = props => {
    const posts = props.data.allMarkdownRemark.edges
    const {tag} = props.pageContext
    return (
        <Layout>
            <Helmet>
                <title>Tags Page</title>
            </Helmet>
            <TagCategoryWrapper>
                <TagsCategoriesH1>{`posts in: ${tag}`}</TagsCategoriesH1>
                <TagsCategoriesDiv>
                    {posts.map(({node}, i) => (
                        <li key={i}>
                            <Link to={node.fields.slug} key={i}>
                                <span>{node.frontmatter.title}</span>
                            </Link>
                        </li>
                    ))}
                </TagsCategoriesDiv>
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
    }
`
