import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Search from '../Search/Search'
import './Layout.scss'

const Layout = ({children}) => (
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
            <div style={{background: 'rgb(255,227,159)'}}>
                <Header siteTitle={data.site.siteMetadata.title} />
                <div className="Site">
                    <Search />
                    <main className="Site-content">{children}</main>
                    <Footer />
                </div>
            </div>
        )}
    />
)

export default Layout
