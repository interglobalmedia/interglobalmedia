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

import musicInBrowserData from '../../data/portfolio/11_making_music_in_browser'

class PortfolioView11 extends Component {
    render() {
        const {data} = this.props
        const keywords = data.site.siteMetadata.keywords

        return (
            <Layout>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="keywords" content={keywords} />
                    <title>{`${musicInBrowserData.title} | Inter - Global Media Network, Inc.`}</title>
                <meta
                        name="repository"
                        content={musicInBrowserData.repository}
                    />
                    <meta
                        name="description"
                        content={musicInBrowserData.shortDescription}
                    />
                    <meta
                        name="website"
                        content={musicInBrowserData.website}
                    />
                    <meta name="more" content={musicInBrowserData.more} />
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
                        {musicInBrowserData.title}
                    </PortfolioViewH1Style>
                    <Img
                        data-testid="project-image"
                        fluid={data.portfolioImageEleven.childImageSharp.fluid}
                        alt={musicInBrowserData.title}
                    />
                    <br />
                    <ShortDescDiv as="div" data-testid="project-shortDesc">
                        {musicInBrowserData.shortDescription}
                    </ShortDescDiv>
                    <AnchorsUl as="ul">
                        <li>
                            <a
                                href={musicInBrowserData.more}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-more"
                                title={`visit the link to the ${musicInBrowserData.title} write up on the ${musicInBrowserData.title} Github repository README.md to read more`}
                            >
                                Read More About {musicInBrowserData.title}
                            </a>
                        </li>
                        <li>
                            <a
                                href={musicInBrowserData.repository}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-repository"
                                title={`visit link to view ${musicInBrowserData.title} app source code on Github to learn more`}
                            >
                                {musicInBrowserData.title} Source Code
                            </a>
                        </li>
                        <li>
                            <a
                                href={musicInBrowserData.website}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-website"
                                title={`visit link to view ${musicInBrowserData.title} app live site to view more`}
                            >
                                {musicInBrowserData.title} Live Site
                            </a>
                        </li>
                    </AnchorsUl>
                </PortfolioViewDiv>
            </Layout>
        )
    }
}

export default PortfolioView11

export const portfolioView11Query = graphql`
    query portfolioView11Query {
        site {
            siteMetadata {
                title
                keywords
            }
        }
        portfolioImageEleven: file(
            relativePath: {eq: "projects/making-music-in-browser.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`