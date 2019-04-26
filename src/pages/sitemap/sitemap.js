import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout/Layout"

const SiteMapPage = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      <div
        style={{
          margin: "3rem auto",
          width: "90%",
          maxWidth: "1026px",
          background: "rgba(255,240,216,1)",
          padding: "1.5rem",
          letterSpacing: "0.07em",
        }}
      >
        <h1 style={{ color: "#717171" }}>Sitemap</h1>
        <h2 style={{ color: "#717171" }}>Pages</h2>
        <ul style={{ listStyleType: "square" }}>
          <li style={{ color: "#717171" }}>
            <Link to="/" style={{ boxShadow: "none" }}>
              <span style={{ color: "rgba(82,175,210,1)" }}>Home</span>
            </Link>
          </li>
          <li style={{ color: "#717171" }}>
            <Link to="/blog" style={{ boxShadow: "none" }}>
              <span style={{ color: "rgba(82,175,210,1)" }}>Blog</span>
            </Link>
          </li>
          <li style={{ color: "#717171" }}>
            <Link to="/rss.xml" style={{ boxShadow: "none" }}>
              <span style={{ color: "rgba(82,175,210,1)" }}>RSS</span>
            </Link>
          </li>
        </ul>
        <h2 style={{ color: "#717171" }}>Posts</h2>
        <div>
          {postList.edges.map(({ node }, i) => (
            <Link
              to={node.fields.slug}
              key={i}
              style={{ color: "rgba(82,175,210,1)" }}
            >
              <div>
                <h3>{node.frontmatter.title}</h3>
                <div>
                  by {node.frontmatter.author} on {node.frontmatter.date}
                </div>
                <ul>
                  <li
                    style={{
                      listStyleType: "square",
                      color: "rgba(82,175,210,1)",
                    }}
                  >
                    <span style={{ color: "rgba(82,175,210,1)" }}>
                      {node.excerpt}
                    </span>
                  </li>
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default SiteMapPage

export const sitemapQuery = graphql`
  query sitemapQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
