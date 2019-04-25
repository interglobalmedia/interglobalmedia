import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from '../Header/Header'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query siteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <header>
          <Header siteTitle={data.site.siteMetadata.title} />
        </header>
        <div className="Site">
          <main className="Site-content">{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
          {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    )}
  />
)

export default Layout
