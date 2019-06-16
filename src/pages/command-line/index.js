import React from 'react'
import styled from 'styled-components'
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/Layout/Layout'
import cli from '../../data/services/cli'
import SEO from '../../components/Seo/Seo'

import {
    WrapperDiv,
    BackDiv,
    H1Style,
    H2Style,
    ApproachDiv,
    ApproachIncludesSpan,
    ServiceDiv,
} from '../fsjs'

const CLIATagDiv = styled.div`
    width: 100%;
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
                    <Link
                        to="/services"
                        title={`go back to the main Services page`}
                    >
                        &larr; back
                    </Link>
                </BackDiv>
                <H1Style>{cli.title}</H1Style>
                <ServiceDiv>
                    <Img
                        fluid={props.data.cliImage.childImageSharp.fluid}
                        style={{marginBottom: '1.5rem'}}
                        alt={cli.title}
                    />
                    <H2Style>{cli.shortDescription}</H2Style>
                    <ApproachDiv>
                        <ApproachIncludesSpan>background:</ApproachIncludesSpan>{' '}
                        {cli.background}
                    </ApproachDiv>
                    <ApproachDiv>
                        <ApproachIncludesSpan>approach:</ApproachIncludesSpan>{' '}
                        {cli.approach}
                    </ApproachDiv>
                    <CLIATagDiv>
                        <ApproachIncludesSpan>more info:</ApproachIncludesSpan>{' '}
                        <a
                            href={cli.infoUrl1}
                            title={`visit the Command Line Interface page on Wikipedia to learn more about the Command Line Interface`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            Command Line Interface on Wikipedia
                        </a>
                        ,{' '}
                        <a
                            href={cli.infoUrl2}
                            title={`visit the Refreshable Braille Display page on Wikipedia to learn more about the Refreshable Braille Display`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            Refreshable Braille Display on Wikipedia
                        </a>
                        ,{' '}
                        <a
                            href={cli.infoUrl3}
                            title={`visit the Shell Computing page on Wikipedia to learn more about Shell Computing`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            Shell Computing On Wikipedia
                        </a>
                        ,{' '}
                        <a
                            href={cli.infoUrl4}
                            title={`visit the Advantages and Disadvantages of the Command Line Interface thread on Quora to learn more about the Command Line Interface`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            What are the advantages and disadvantages of Command
                            Line Interface? on Quora
                        </a>
                    </CLIATagDiv>
                </ServiceDiv>
            </WrapperDiv>
        </Layout>
    )
}

export default CLI

export const query = graphql`
    query cliQuery {
        cliImage: file(
            relativePath: {eq: "services/rohan-makhecha-408608-unsplash.jpg"}
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
