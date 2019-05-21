import React from 'react'
import styled from '@emotion/styled'
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/Layout/Layout'
import SEO from '../../components/Seo/Seo'
import gfd from '../../data/gfd'
import {
    WrapperDiv,
    BackDiv,
    H1Style,
    H2Style,
    ApproachDiv,
    ApproachSpan,
    IncludesSpan,
} from '../fsjs'

const GitForDevsDiv = styled.div`
    & img {
        width: 100%;
    }
`
export const GFDTagsDiv = styled.div`
    color: rgb(216, 132, 46);
    margin-bottom: 3rem;
`

const GitForDevs = props => {
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
                <H1Style>{gfd.title}</H1Style>
                <GitForDevsDiv>
                    <Img
                        fluid={props.data.gitForDevsImage.childImageSharp.fluid}
                        style={{marginBottom: '1.5rem'}}
                        alt={gfd.title}
                    />
                    <H2Style>{gfd.shortDescription}</H2Style>
                    <ApproachDiv>
                        <ApproachSpan>background:</ApproachSpan>{' '}
                        {gfd.background}
                    </ApproachDiv>
                    <ApproachDiv>
                        <ApproachSpan>approach:</ApproachSpan> {gfd.approach}
                    </ApproachDiv>
                    <GFDTagsDiv>
                        <IncludesSpan>includes:</IncludesSpan> {gfd.tags} and
                        more
                    </GFDTagsDiv>
                </GitForDevsDiv>
            </WrapperDiv>
        </Layout>
    )
}

export default GitForDevs

export const query = graphql`
    query gitForDevsQuery {
        gitForDevsImage: file(
            relativePath: {eq: "mimi-thian-737711-unsplash.jpg"}
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
