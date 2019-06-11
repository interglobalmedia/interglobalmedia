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
import nodeChatData from '../../data/projects/node-chat'
class PortfolioView6 extends Component {
    render() {
        const {data} = this.props
        const keywords = data.site.siteMetadata.keywords
        return (
            <Layout>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="keywords" content={keywords} />
                    <title>{`${
                        nodeChatData.title
                    } | Inter-Global Media Network, Inc.`}</title>
                    <meta name="repository" content={nodeChatData.repository} />
                    <meta
                        name="description"
                        content={nodeChatData.shortDescription}
                    />
                    <meta name="website" content={nodeChatData.website} />
                    <meta name="more" content={nodeChatData.more} />
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
                        {nodeChatData.title}
                    </PortfolioViewH1Style>
                    <Img
                        data-testid="project-image"
                        fluid={data.portfolioImageSix.childImageSharp.fluid}
                        alt={nodeChatData.title}
                    />
                    <br />
                    <ShortDescDiv data-testid="project-shortDesc">
                        {nodeChatData.shortDescription}
                    </ShortDescDiv>
                    <AnchorsUl>
                        <li>
                            <a
                                href={nodeChatData.more}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-more"
                                title={`visit the link to the ${
                                    nodeChatData.title
                                } write up on the ${
                                    nodeChatData.title
                                } Github repository README.md to read more`}
                            >
                                Read More About {nodeChatData.title}
                            </a>
                        </li>
                        <li>
                            <a
                                href={nodeChatData.repository}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-repository"
                                title={`visit link to view ${
                                    nodeChatData.title
                                } app source code on Github to learn more`}
                            >
                                {nodeChatData.title} Source Code
                            </a>
                        </li>
                        <li>
                            <a
                                href={nodeChatData.website}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-website"
                                title={`visit link to the ${
                                    nodeChatData.title
                                } live site to view more`}
                            >
                                {nodeChatData.title} Live Site
                            </a>
                        </li>
                    </AnchorsUl>
                </PortfolioViewDiv>
            </Layout>
        )
    }
}

export default PortfolioView6

export const portfolioView6Query = graphql`
    query portfolioView6Query {
        site {
            siteMetadata {
                title
                keywords
            }
        }
        portfolioImageSix: file(relativePath: {eq: "projects/chatterbox.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
