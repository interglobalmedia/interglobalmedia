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

import omdbApiNodejsData from '../../data/portfolio/9_omdb_api_nodejs'

class PortfolioView9 extends Component {
    render() {
        const {data} = this.props
        const keywords = data.site.siteMetadata.keywords

        return (
            <Layout>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="keywords" content={keywords} />
                    <title>{`${omdbApiNodejsData.title} | Inter - Global Media Network, Inc.`}</title>
                <meta
                        name="repository"
                        content={omdbApiNodejsData.repository}
                    />
                    <meta
                        name="description"
                        content={omdbApiNodejsData.shortDescription}
                    />
                    <meta
                        name="website"
                        content={omdbApiNodejsData.website}
                    />
                    <meta name="more" content={omdbApiNodejsData.more} />
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
                        {omdbApiNodejsData.title}
                    </PortfolioViewH1Style>
                    <Img
                        data-testid="project-image"
                        fluid={data.portfolioImageNine.childImageSharp.fluid}
                        alt={omdbApiNodejsData.title}
                    />
                    <br />
                    <ShortDescDiv as="div" data-testid="project-shortDesc">
                        {omdbApiNodejsData.shortDescription}
                    </ShortDescDiv>
                    <AnchorsUl as="ul">
                        <li>
                            <a
                                href={omdbApiNodejsData.more}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-more"
                                title={`visit the link to the ${omdbApiNodejsData.title} write up on the ${omdbApiNodejsData.title} Github repository README.md to read more`}
                            >
                                Read More About {omdbApiNodejsData.title}
                            </a>
                        </li>
                        <li>
                            <a
                                href={omdbApiNodejsData.repository}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-repository"
                                title={`visit link to view ${omdbApiNodejsData.title} app source code on Github to learn more`}
                            >
                                {omdbApiNodejsData.title} Source Code
                            </a>
                        </li>
                        <li>
                            <a
                                href={omdbApiNodejsData.website}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-website"
                                title={`visit link to view ${omdbApiNodejsData.title} app live site to view more`}
                            >
                                {omdbApiNodejsData.title} Live Site
                            </a>
                        </li>
                    </AnchorsUl>
                </PortfolioViewDiv>
            </Layout>
        )
    }
}

export default PortfolioView9

export const portfolioView9Query = graphql`
    query portfolioView9Query {
        site {
            siteMetadata {
                title
                keywords
            }
        }
        portfolioImageNine: file(
            relativePath: {eq: "projects/omdb-api-nodejs-app.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`