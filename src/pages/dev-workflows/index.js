import React from 'react'
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/Layout/Layout'
import devFlowStrats from '../../data/services/dev-workflows'
import {
    WrapperDiv,
    BackDiv,
    H1Style,
    H2Style,
    ApproachDiv,
    ApproachIncludesSpan,
    AllTagsDiv,
    LiveSitesDiv,
    LiveSitesSpan,
    ServiceDiv,
} from '../fsjs'
import WFLiveSites from '../../components/WFLiveSites/WFLiveSites'
import SEO from '../../components/Seo/Seo'

const DevWorkFlows = props => {
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
                <H1Style as="h1">{devFlowStrats.title}</H1Style>
                <ServiceDiv>
                    <Img
                        fluid={props.data.workflowImage.childImageSharp.fluid}
                        style={{marginBottom: '1.5rem'}}
                        alt={devFlowStrats.title}
                    />
                    <H2Style>{devFlowStrats.shortDescription}</H2Style>
                    <ApproachDiv>
                        <ApproachIncludesSpan>background:</ApproachIncludesSpan>{' '}
                        {devFlowStrats.background}
                    </ApproachDiv>
                    <ApproachDiv>
                        <ApproachIncludesSpan>approach:</ApproachIncludesSpan>{' '}
                        {devFlowStrats.approach}
                    </ApproachDiv>
                    <AllTagsDiv>
                        <ApproachIncludesSpan>includes:</ApproachIncludesSpan>{' '}
                        {devFlowStrats.tags} and more
                    </AllTagsDiv>
                    <LiveSitesSpan>sites:</LiveSitesSpan>
                    <br />
                    <LiveSitesDiv>
                        <WFLiveSites />
                    </LiveSitesDiv>
                </ServiceDiv>
            </WrapperDiv>
        </Layout>
    )
}

export default DevWorkFlows

export const query = graphql`
    query workflowQuery {
        workflowImage: file(
            relativePath: {eq: "services/martin-w-kirst-1175656-unsplash.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        site {
            siteMetadata {
                title
                keywords
            }
        }
    }
`
