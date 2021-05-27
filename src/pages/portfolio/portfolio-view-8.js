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

import webAudioApiAjaxData from '../../data/portfolio/8_web-audio-api-ajax'

class PortfolioView8 extends Component {
    render() {
        const {data} = this.props
        const keywords = data.site.siteMetadata.keywords
        return (
            <Layout>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="keywords" content={keywords} />
                    <title>{`${webAudioApiAjaxData.title} | Inter - Global Media Network, Inc.`}</title>
                    <meta
                        name="repository"
                        content={webAudioApiAjaxData.repository}
                    />
                    <meta
                        name="description"
                        content={webAudioApiAjaxData.shortDescription}
                    />
                    <meta
                        name="website"
                        content={webAudioApiAjaxData.website}
                    />
                    <meta name="more" content={webAudioApiAjaxData.more} />
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
                        {webAudioApiAjaxData.title}
                    </PortfolioViewH1Style>
                    <Img
                        data-testid="project-image"
                        fluid={data.portfolioImageEight.childImageSharp.fluid}
                        alt={webAudioApiAjaxData.title}
                    />
                    <br />
                    <ShortDescDiv as="div" data-testid="project-shortDesc">
                        {webAudioApiAjaxData.shortDescription}
                    </ShortDescDiv>
                    <AnchorsUl as="ul">
                        <li>
                            <a
                                href={webAudioApiAjaxData.more}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-more"
                                title={`visit the link to the ${webAudioApiAjaxData.title} write up on the ${webAudioApiAjaxData.title} Github repository README.md to read more`}
                            >
                                Read More About {webAudioApiAjaxData.title}
                            </a>
                        </li>
                        <li>
                            <a
                                href={webAudioApiAjaxData.repository}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-repository"
                                title={`visit link to view ${webAudioApiAjaxData.title} app source code on Github to learn more`}
                            >
                                {webAudioApiAjaxData.title} Source Code
                            </a>
                        </li>
                        <li>
                            <a
                                href={webAudioApiAjaxData.website}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-website"
                                title={`visit link to view ${webAudioApiAjaxData.title} app live site to view more`}
                            >
                                {webAudioApiAjaxData.title} Live Site
                            </a>
                        </li>
                    </AnchorsUl>
                </PortfolioViewDiv>
            </Layout>
        )
    }
}

export default PortfolioView8

export const portfolioView8Query = graphql`
    query portfolioView8Query {
        site {
            siteMetadata {
                title
                keywords
            }
        }
        portfolioImageEight: file(
            relativePath: {eq: "projects/web-audio-api-ajax.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
