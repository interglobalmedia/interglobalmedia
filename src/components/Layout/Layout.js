import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import styled from '@emotion/styled'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Search from '../Search/Search'
import './Layout.scss'

export const LayoutContainer = styled.div`
    background: rgb(255, 227, 159);
`

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
            <LayoutContainer>
                <Header siteTitle={data.site.siteMetadata.siteTitle} />
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
