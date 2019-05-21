import React from 'react'
import styled from '@emotion/styled'
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/Layout/Layout'
import gfnd from '../../data/gfnd'
import SEO from '../../components/Seo/Seo'

import {
    WrapperDiv,
    BackDiv,
    H1Style,
    H2Style,
    ApproachDiv,
    ApproachSpan,
    IncludesSpan,
} from '../fsjs'

const GitForNonDevsDiv = styled.div`
    & img {
        width: 100%;
    }
    margin-bottom: 3rem;
`
export const GFNDTagsDiv = styled.div`
    color: rgb(216, 132, 46);
    margin-bottom: 1rem;
`

export const ATagStyle = styled.a`
    box-shadow: none;
    & :hover {
        text-decoration: underline;
    }
`

const GitForNonDevs = props => {
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
                <H1Style>
                    {gfnd.title}
                    <br />
                </H1Style>
                <GitForNonDevsDiv>
                    <Img
                        fluid={
                            props.data.gitForNonDevsImage.childImageSharp.fluid
                        }
                        style={{marginBottom: '1.5rem'}}
                        alt={gfnd.title}
                    />
                    <H2Style>{gfnd.shortDescription}</H2Style>
                    <ApproachDiv>
                        <ApproachSpan>background:</ApproachSpan>{' '}
                        {gfnd.background}
                    </ApproachDiv>
                    <ApproachDiv>
                        <ApproachSpan>approach:</ApproachSpan> {gfnd.approach}
                    </ApproachDiv>
                    <GFNDTagsDiv>
                        <IncludesSpan>includes:</IncludesSpan> {gfnd.tags} and
                        more
                    </GFNDTagsDiv>
                    <ApproachDiv>
                        <IncludesSpan>more info:</IncludesSpan>{' '}
                        <ATagStyle href={gfnd.infoUrl} target="_new">
                            Git Page on Wikipedia
                        </ATagStyle>
                    </ApproachDiv>
                </GitForNonDevsDiv>
            </WrapperDiv>
        </Layout>
    )
}

export default GitForNonDevs

export const query = graphql`
    query gitForNonDevsQuery {
        gitForNonDevsImage: file(
            relativePath: {eq: "roksolana-zasiadko-30856-unsplash.jpg"}
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
            }
        }
    }
`
