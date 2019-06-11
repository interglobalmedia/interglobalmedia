import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import {Link, graphql} from 'gatsby'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import Layout from '../../components/Layout/Layout'
import {
    PortfolioViewDiv,
    PortfolioBackDiv,
    PortfolioViewH1Style,
    ShortDescDiv,
    AnchorsUl,
} from './index.js'
import rockinSynthData from '../../data/portfolio/3_rockin-synth'

class PortfolioView3 extends Component {
    render() {
        const {data} = this.props
        const keywords = data.site.siteMetadata.keywords
        return (
            <Layout>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="keywords" content={keywords} />
                    <title>{`${
                        rockinSynthData.title
                    } | Inter-Global Media Network, Inc.`}</title>
                    <meta
                        name="repository"
                        content={rockinSynthData.repository}
                    />
                    <meta
                        name="description"
                        content={rockinSynthData.shortDescription}
                    />
                    <meta name="website" content={rockinSynthData.website} />
                    <meta name="more" content={rockinSynthData.more} />
                </Helmet>
                <PortfolioViewDiv>
                    <PortfolioBackDiv>
                        <Link
                            to="/portfolio"
                            title={`go back to main Portfolio page`}
                        >
                            &larr; back
                        </Link>
                    </PortfolioBackDiv>
                    <PortfolioViewH1Style data-testid="project-title">
                        {rockinSynthData.title}
                    </PortfolioViewH1Style>
                    <Img
                        data-testid="project-image"
                        fluid={data.portfolioImageThree.childImageSharp.fluid}
                        alt={rockinSynthData.title}
                    />
                    <br />
                    <ShortDescDiv data-testid="project-shortDesc">
                        {rockinSynthData.shortDescription}
                    </ShortDescDiv>
                    <AnchorsUl>
                        <li>
                            <a
                                href={rockinSynthData.more}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-more"
                                title={`visit the link to the ${
                                    rockinSynthData.title
                                } write up on our portfolio site built with React to read more`}
                            >
                                Read More About {rockinSynthData.title}
                            </a>
                        </li>
                        <li>
                            <a
                                href={rockinSynthData.repository}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-repository"
                                title={`visit the link to the ${
                                    rockinSynthData.title
                                } source code on Github to learn more`}
                            >
                                {rockinSynthData.title} Source Code
                            </a>
                        </li>
                        <li>
                            <a
                                href={rockinSynthData.website}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-website"
                                title={`visit the ${
                                    rockinSynthData.title
                                } live site to view more`}
                            >
                                {rockinSynthData.title} Live Site
                            </a>
                        </li>
                    </AnchorsUl>
                </PortfolioViewDiv>
            </Layout>
        )
    }
}

export default PortfolioView3

export const portfolioView3Query = graphql`
    query portfolioView3Query {
        site {
            siteMetadata {
                title
                keywords
            }
        }
        portfolioImageThree: file(
            relativePath: {eq: "projects/rockin-synth.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
