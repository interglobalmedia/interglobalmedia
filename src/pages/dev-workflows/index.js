import React from 'react'
import styled from '@emotion/styled'
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/Layout/Layout'
import devFlowStrats from '../../data/dev-workflows'
import {
    WrapperDiv,
    BackDiv,
    H1Style,
    H2Style,
    ApproachDiv,
    ApproachSpan,
    AllTagsDiv,
    IncludesSpan,
    LiveSitesDiv,
    LiveSitesSpan,
} from '../fsjs'
import WFLiveSites from '../../components/WFLiveSites/WFLiveSites'
import SEO from '../../components/Seo/Seo'

const WorkflowDiv = styled.div`
    & img {
        width: 100%;
    }
`

const DevWorkFlows = props => {
    const {data} = props
    const title = data.site.siteMetadata.title
    const keywords = data.site.siteMetadata.keywords
    return (
        <Layout>
            <SEO location={props.location} title={title} keywords={keywords} />
            <WrapperDiv>
                <BackDiv>
                    <Link to="/services">&larr; back</Link>
                </BackDiv>
                <H1Style>{devFlowStrats.title}</H1Style>
                <WorkflowDiv>
                    <Img
                        fluid={props.data.workflowImage.childImageSharp.fluid}
                        style={{marginBottom: '1.5rem'}}
                        alt={devFlowStrats.title}
                    />
                    <H2Style>{devFlowStrats.shortDescription}</H2Style>
                    <ApproachDiv>
                        <ApproachSpan>background:</ApproachSpan>{' '}
                        {devFlowStrats.background}
                    </ApproachDiv>
                    <ApproachDiv>
                        <ApproachSpan>approach:</ApproachSpan>{' '}
                        {devFlowStrats.approach}
                    </ApproachDiv>
                    <AllTagsDiv>
                        <IncludesSpan>includes:</IncludesSpan>{' '}
                        {devFlowStrats.tags} and more
                    </AllTagsDiv>
                    <LiveSitesSpan>sites:</LiveSitesSpan>
                    <br />
                    <LiveSitesDiv>
                        <WFLiveSites />
                    </LiveSitesDiv>
                </WorkflowDiv>
            </WrapperDiv>
        </Layout>
    )
}

export default DevWorkFlows

export const query = graphql`
    query workflowQuery {
        workflowImage: file(
            relativePath: {eq: "martin-w-kirst-1175656-unsplash.jpg"}
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
