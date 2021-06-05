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

import weatherAppNodejsData from '../../data/portfolio/12_weather_app_nodejs_server'

class PortfolioView12 extends Component {
    render() {
        const {data} = this.props
        const keywords = data.site.siteMetadata.keywords

        return (
            <Layout>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="keywords" content={keywords} />
                    <title>{`${weatherAppNodejsData.title} | Inter - Global Media Network, Inc.`}</title>
                <meta
                        name="repository"
                        content={weatherAppNodejsData.repository}
                    />
                    <meta
                        name="description"
                        content={weatherAppNodejsData.shortDescription}
                    />
                    <meta
                        name="website"
                        content={weatherAppNodejsData.website}
                    />
                    <meta name="more" content={weatherAppNodejsData.more} />
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
                        {weatherAppNodejsData.title}
                    </PortfolioViewH1Style>
                    <Img
                        data-testid="project-image"
                        fluid={data.portfolioImageTwelve.childImageSharp.fluid}
                        alt={weatherAppNodejsData.title}
                    />
                    <br />
                    <ShortDescDiv as="div" data-testid="project-shortDesc">
                        {weatherAppNodejsData.shortDescription}
                    </ShortDescDiv>
                    <AnchorsUl as="ul">
                        <li>
                            <a
                                href={weatherAppNodejsData.more}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-more"
                                title={`visit the link to the ${weatherAppNodejsData.title} write up on the ${weatherAppNodejsData.title} Github repository README.md to read more`}
                            >
                                Read More About {weatherAppNodejsData.title}
                            </a>
                        </li>
                        <li>
                            <a
                                href={weatherAppNodejsData.repository}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-repository"
                                title={`visit link to view ${weatherAppNodejsData.title} app source code on Github to learn more`}
                            >
                                {weatherAppNodejsData.title} Source Code
                            </a>
                        </li>
                        <li>
                            <a
                                href={weatherAppNodejsData.website}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-website"
                                title={`visit link to view ${weatherAppNodejsData.title} app live site to view more`}
                            >
                                {weatherAppNodejsData.title} Live Site
                            </a>
                        </li>
                    </AnchorsUl>
                </PortfolioViewDiv>
            </Layout>
        )
    }
}

export default PortfolioView12

export const portfolioView12Query = graphql`
    query portfolioView12Query {
        site {
            siteMetadata {
                title
                keywords
            }
        }
        portfolioImageTwelve: file(
            relativePath: {eq: "projects/weather-app-nodejs-server.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`