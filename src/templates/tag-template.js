import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import styled from "@emotion/styled"

const Tags = props => {
  const posts = props.data.allMarkdownRemark.edges
  const { tag } = props.pageContext
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "3rem auto",
        }}
      >
        <h1 style={{ color: "#717171" }}>{`posts in: ${tag}`}</h1>
        <div>
          {posts.map(({ node }, i) => (
            <Link to={node.fields.slug} key={i}>
              <ul style={{ marginLeft: "-8rem" }}>
                <li style={{ listStyleType: "square" }}>
                  {node.frontmatter.title}
                </li>
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Tags

export const query = graphql`
  query TagsQuery($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
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
