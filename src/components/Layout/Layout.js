import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Search from '../Search/Search'
import './Layout.css'

import {LayoutContainer} from '../../exports/named-exports'

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
            <LayoutContainer as="div">
                <Header title={data.site.siteMetadata.title} />
                <div className="Site">
                    <Search />
                    <main className="Site-content">{children}</main>
                    <Footer />
                </div>
            </LayoutContainer>
        )}
    />
)

export default Layout
