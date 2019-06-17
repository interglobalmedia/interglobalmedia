import React from 'react'
import styled from 'styled-components'
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/Layout/Layout'
import FSJSLiveSites from '../../components/FSJS/FSJSLiveSites'
import fsjs from '../../data/services/fsjs'
import SEO from '../../components/Seo/Seo'

export const WrapperDiv = styled.div`
    margin: 3rem auto;
    width: 90%;
    max-width: 1026px;
`

export const BackDiv = styled.div`
    margin-bottom: 3rem;
    & a {
        font-size: 1.3rem;
    }
`

export const H1Style = styled.h1`
    font-weight: normal;
    text-align: center;
    color: rgb(148, 75, 43);
`

export const ServiceDiv = styled.div`
    & img {
        width: 100%;
    }
`

export const H2Style = styled.h2`
    font-weight: normal;
    text-align: center;
    color: rgb(148, 75, 43);
`

export const ApproachDiv = styled.div`
    width: 100%;
    margin: 0 auto 1rem;
    max-width: 1026px;
    color: rgb(88, 86, 86);
`

export const ApproachIncludesSpan = styled.span`
    font-weight: bold;
    color: #2f0000;
`

export const AllTagsDiv = styled.div`
    color: rgb(148, 75, 43);
    margin-bottom: 1rem;
`

export const LiveSitesDiv = styled.div`
    margin: 0 auto 3rem;
`

export const LiveSitesSpan = styled.div`
    font-weight: bold;
`

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
