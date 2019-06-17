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
import chattrboxData from '../../data/portfolio/6_node-chat-app'
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
                        chattrboxData.title
                    } | Inter-Global Media Network, Inc.`}</title>
                    <meta
                        name="repository"
                        content={chattrboxData.repository}
                    />
                    <meta
                        name="description"
                        content={chattrboxData.shortDescription}
                    />
                    <meta name="website" content={chattrboxData.website} />
                    <meta name="more" content={chattrboxData.more} />
                </Helmet>
                <PortfolioViewDiv as="div">
                    <PortfolioBackDiv as="div">
                        <Link
                            to="/portfolio"
                            title={`go back to main Portfolio page`}
                        >
                            &larr; back
                        </Link>
                    </PortfolioBackDiv>
                    <PortfolioViewH1Style
                        as="h1"
                        as="h1"
                        data-testid="project-title"
                    >
                        {chattrboxData.title}
                    </PortfolioViewH1Style>
                    <Img
                        data-testid="project-image"
                        fluid={data.portfolioImageSix.childImageSharp.fluid}
                        alt={chattrboxData.title}
                    />
                    <br />
                    <ShortDescDiv as="div" data-testid="project-shortDesc">
                        {chattrboxData.shortDescription}
                    </ShortDescDiv>
                    <AnchorsUl as="ul">
                        <li>
                            <a
                                href={chattrboxData.more}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-more"
                                title={`visit the link to the ${
                                    chattrboxData.title
                                } write up on the ${
                                    chattrboxData.title
                                } Github repository README.md to read more`}
                            >
                                Read More About {chattrboxData.title}
                            </a>
                        </li>
                        <li>
                            <a
                                href={chattrboxData.repository}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-repository"
                                title={`visit link to view ${
                                    chattrboxData.title
                                } app source code on Github to learn more`}
                            >
                                {chattrboxData.title} Source Code
                            </a>
                        </li>
                        <li>
                            <a
                                href={chattrboxData.website}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-website"
                                title={`visit link to the ${
                                    chattrboxData.title
                                } live site to view more`}
                            >
                                {chattrboxData.title} Live Site
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
