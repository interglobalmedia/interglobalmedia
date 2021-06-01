import React from 'react'
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/Layout/Layout'
import FSJSLiveSites from '../../components/FSJS/FSJSLiveSites'
import fsjs from '../../data/services/fsjs'
import SEO from '../../components/Seo/Seo'

import {
    WrapperDiv,
    BackDiv,
    H1Style,
    ServiceDiv,
    H2Style,
    ApproachDiv,
    ApproachIncludesSpan,
    AllTagsDiv,
    LiveSitesDiv,
    LiveSitesSpan,
} from '../../exports/named-exports'

const FullStackSJS = props => {
    const {data} = props
    const title = data.site.siteMetadata.title
    const keywords = data.site.siteMetadata.keywords
    return (
        <Layout>
            <SEO location={props.location} title={title} keywords={keywords} />
            <WrapperDiv as="div">
                <BackDiv as="div">
                    <Link
                        to="/services"
                        title={`go back to the main Services page`}
                    >
                        &larr; back
                    </Link>
                </BackDiv>
                <H1Style as="h1">{fsjs.title}</H1Style>
                <ServiceDiv as="div">
                    <Img
                        fluid={props.data.fullstackImage.childImageSharp.fluid}
                        style={{marginBottom: '1.5rem'}}
                        alt={fsjs.title}
                    />
                    <H2Style>{fsjs.shortDescription}</H2Style>
                    <ApproachDiv as="div">
                        <ApproachIncludesSpan as="span">
                            approach:{' '}
                        </ApproachIncludesSpan>
                        {fsjs.approach}
                    </ApproachDiv>
                    <AllTagsDiv as="div">
                        <ApproachIncludesSpan as="span">
                            includes:
                        </ApproachIncludesSpan>{' '}
                        {fsjs.allTags} and more
                    </AllTagsDiv>
                    <LiveSitesSpan as="span">sites:</LiveSitesSpan>
                    <br />
                    <LiveSitesDiv as="div">
                        <FSJSLiveSites />
                    </LiveSitesDiv>
                </ServiceDiv>
            </WrapperDiv>
        </Layout>
    )
}

export default FullStackSJS

export const query = graphql`
    query fullstackQuery {
        fullstackImage: file(relativePath: {eq: "services/fullstack.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`
