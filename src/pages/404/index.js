import React from 'react'
import {graphql} from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../../components/Layout/Layout'
import SEO from '../../components/Seo/Seo'

const NotFoundDiv = styled.div`
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

class NotFoundPage extends React.Component {
    render() {
        const {data} = this.props
        const title = data.site.siteMetadata.title

        return (
            <Layout location={this.props.location} title={title}>
                <NotFoundDiv>
                    <SEO title="404: Not Found" />
                    <h1>Not Found</h1>
                    <p>
                        You just hit a route that doesn&#39;t exist... the
                        sadness.
                    </p>
                </NotFoundDiv>
            </Layout>
        )
    }
}

export default NotFoundPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
