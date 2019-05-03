import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
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
            <div style={{background: '#ffec8f'}}>
                <header>
                    <Header siteTitle={data.site.siteMetadata.title} />
                </header>
                <div className="Site">
                    <main className="Site-content">{children}</main>
                    <Footer />
                </div>
            </div>
        )}
    />
)

export default Layout
