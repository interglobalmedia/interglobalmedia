import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/Layout/Layout'
import {
    PortfolioViewDiv,
    PortfolioBackDiv,
    PortfolioViewH1Style,
    ShortDescDiv,
    AnchorsUl,
} from './index.js'
import nodeDrawingData from '../../data/portfolio/7_node-drawing-app'
class PortfolioView7 extends Component {
    render() {
        const {data} = this.props
        const keywords = data.site.siteMetadata.keywords
        return (
            <Layout>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="keywords" content={keywords} />
                    <title>{`${
                        nodeDrawingData.title
                    } | Inter - Global Media Network, Inc.`}</title>
                    <meta
                        name="repository"
                        content={nodeDrawingData.repository}
                    />
                    <meta
                        name="description"
                        content={nodeDrawingData.shortDescription}
                    />
                    <meta name="website" content={nodeDrawingData.website} />
                    <meta name="more" content={nodeDrawingData.more} />
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
                        {nodeDrawingData.title}
                    </PortfolioViewH1Style>
                    <Img
                        data-testid="project-image"
                        fluid={data.portfolioImageSeven.childImageSharp.fluid}
                        alt={nodeDrawingData.title}
                    />
                    <br />
                    <ShortDescDiv data-testid="project-shortDesc">
                        {nodeDrawingData.shortDescription}
                    </ShortDescDiv>
                    <AnchorsUl>
                        <li>
                            <a
                                href={nodeDrawingData.more}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-more"
                                title={`visit the link to the ${
                                    nodeDrawingData.title
                                } write up on the ${
                                    nodeDrawingData.title
                                } Github repository README.md to read more`}
                            >
                                Read More About {nodeDrawingData.title}
                            </a>
                        </li>
                        <li>
                            <a
                                href={nodeDrawingData.repository}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-repository"
                                title={`visit link to view ${
                                    nodeDrawingData.title
                                } app source code on Github to learn more`}
                            >
                                {nodeDrawingData.title} Source Code
                            </a>
                        </li>
                        <li>
                            <a
                                href={nodeDrawingData.website}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-website"
                                title={`visit link to view ${
                                    nodeDrawingData.title
                                } app live site to view more`}
                            >
                                {nodeDrawingData.title} Live Site
                            </a>
                        </li>
                    </AnchorsUl>
                </PortfolioViewDiv>
            </Layout>
        )
    }
}

export default PortfolioView7

export const portfolioView7Query = graphql`
    query portfolioView7Query {
        site {
            siteMetadata {
                title
                keywords
            }
        }
        portfolioImageSeven: file(
            relativePath: {eq: "projects/node-collaborative-drawing-app.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
