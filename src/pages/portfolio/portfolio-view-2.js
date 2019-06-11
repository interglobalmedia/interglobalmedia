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
import theGrooveData from '../../data/portfolio/2_welcome-to-the-groove'

class PortfolioView2 extends Component {
    render() {
        const {data} = this.props
        const keywords = data.site.siteMetadata.keywords
        return (
            <Layout>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="keywords" content={keywords} />
                    <title>{`${
                        theGrooveData.title
                    } | Inter-Global Media Network, Inc.`}</title>
                    <meta
                        name="repository"
                        content={theGrooveData.repository}
                    />
                    <meta
                        name="description"
                        content={theGrooveData.shortDescription}
                    />
                    <meta name="website" content={theGrooveData.website} />
                    <meta name="more" content={theGrooveData.more} />
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
                        {theGrooveData.title}
                    </PortfolioViewH1Style>
                    <Img
                        data-testid="project-image"
                        fluid={data.portfolioImageTwo.childImageSharp.fluid}
                        alt={theGrooveData.title}
                    />
                    <br />
                    <ShortDescDiv data-testid="project-shortDesc">
                        {theGrooveData.shortDescription}
                    </ShortDescDiv>
                    <AnchorsUl>
                        <li>
                            <a
                                href={theGrooveData.more}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-more"
                                title={`visit the link to the ${
                                    theGrooveData.title
                                } write up on our portfolio site built with React to read more`}
                            >
                                Read More About {theGrooveData.title}
                            </a>
                        </li>
                        <li>
                            <a
                                href={theGrooveData.repository}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-repository"
                                title={`visit the link to the ${
                                    theGrooveData.title
                                } source code on Github to learn more`}
                            >
                                {theGrooveData.title} Source Code
                            </a>
                        </li>
                        <li>
                            <a
                                href={theGrooveData.website}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-website"
                                title={`visit the ${
                                    theGrooveData.title
                                } live site to view more`}
                            >
                                {theGrooveData.title} Live Site
                            </a>
                        </li>
                    </AnchorsUl>
                </PortfolioViewDiv>
            </Layout>
        )
    }
}

export default PortfolioView2

export const portfolioView2Query = graphql`
    query portfolioView2Query {
        site {
            siteMetadata {
                title
                keywords
            }
        }
        portfolioImageTwo: file(
            relativePath: {eq: "projects/welcome-to-the-groove.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
