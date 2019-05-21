import React from 'react'
import styled from '@emotion/styled'
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/Layout/Layout'
import cli from '../../data/cli'
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

import {ATagStyle} from '../git-for-non-devs'

const CLIDiv = styled.div`
    & img {
        width: 100%;
    }
`

const CLIApproachDiv = styled.div`
    width: 100 %;
    margin: 0 auto 3rem;
    max-width: 1026px;
    color: rgb(88, 86, 86);
`

const CLI = props => {
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
                <H1Style>{cli.title}</H1Style>
                <CLIDiv>
                    <Img
                        fluid={props.data.cliImage.childImageSharp.fluid}
                        style={{marginBottom: '1.5rem'}}
                        alt={cli.title}
                    />
                    <H2Style>{cli.shortDescription}</H2Style>
                    <ApproachDiv>
                        <ApproachSpan>background:</ApproachSpan>{' '}
                        {cli.background}
                    </ApproachDiv>
                    <ApproachDiv>
                        <ApproachSpan>approach:</ApproachSpan> {cli.approach}
                    </ApproachDiv>
                    <CLIApproachDiv>
                        <IncludesSpan>more info:</IncludesSpan>{' '}
                        <ATagStyle href={cli.infoUrl1} target="_new">
                            Command Line Interface on Wikipedia
                        </ATagStyle>
                        ,{' '}
                        <ATagStyle href={cli.infoUrl2} target="_new">
                            Refreshable Braille Display on Wikipedia
                        </ATagStyle>
                        ,{' '}
                        <ATagStyle href={cli.infoUrl3} target="_new">
                            Shell Computing On Wikipedia
                        </ATagStyle>
                        ,{' '}
                        <ATagStyle href={cli.infoUrl4} target="_new">
                            What are the advantages and disadvantages of Command
                            Line Interface? on Quora
                        </ATagStyle>
                    </CLIApproachDiv>
                </CLIDiv>
            </WrapperDiv>
        </Layout>
    )
}

export default CLI

export const query = graphql`
    query cliQuery {
        cliImage: file(
            relativePath: {eq: "rohan-makhecha-408608-unsplash.jpg"}
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
