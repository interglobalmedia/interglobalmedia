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
} from '../../exports/named-exports'

import customHTML5VideoData from '../../data/portfolio/10_custom_html5_video_player'

class PortfolioView10 extends Component {
    render() {
        const {data} = this.props
        const keywords = data.site.siteMetadata.keywords

        return (
            <Layout>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="keywords" content={keywords} />
                    <title>{`${customHTML5VideoData.title} | Inter - Global Media Network, Inc.`}</title>
                <meta
                        name="repository"
                        content={customHTML5VideoData.repository}
                    />
                    <meta
                        name="description"
                        content={customHTML5VideoData.shortDescription}
                    />
                    <meta
                        name="website"
                        content={customHTML5VideoData.website}
                    />
                    <meta name="more" content={customHTML5VideoData.more} />
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
                    <PortfolioViewH1Style as="h1" data-testid="project-title">
                        {customHTML5VideoData.title}
                    </PortfolioViewH1Style>
                    <Img
                        data-testid="project-image"
                        fluid={data.portfolioImageTen.childImageSharp.fluid}
                        alt={customHTML5VideoData.title}
                    />
                    <br />
                    <ShortDescDiv as="div" data-testid="project-shortDesc">
                        {customHTML5VideoData.shortDescription}
                    </ShortDescDiv>
                    <AnchorsUl as="ul">
                        <li>
                            <a
                                href={customHTML5VideoData.more}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-more"
                                title={`visit the link to the ${customHTML5VideoData.title} write up on the ${customHTML5VideoData.title} Github repository README.md to read more`}
                            >
                                Read More About {customHTML5VideoData.title}
                            </a>
                        </li>
                        <li>
                            <a
                                href={customHTML5VideoData.repository}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-repository"
                                title={`visit link to view ${customHTML5VideoData.title} app source code on Github to learn more`}
                            >
                                {customHTML5VideoData.title} Source Code
                            </a>
                        </li>
                        <li>
                            <a
                                href={customHTML5VideoData.website}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-website"
                                title={`visit link to view ${customHTML5VideoData.title} app live site to view more`}
                            >
                                {customHTML5VideoData.title} Live Site
                            </a>
                        </li>
                    </AnchorsUl>
                </PortfolioViewDiv>
            </Layout>
        )
    }
}

export default PortfolioView10

export const portfolioView10Query = graphql`
    query portfolioView10Query {
        site {
            siteMetadata {
                title
                keywords
            }
        }
        portfolioImageTen: file(
            relativePath: {eq: "projects/custom-html5-video-player.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`