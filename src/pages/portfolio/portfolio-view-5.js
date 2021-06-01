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
import trumpTalksData from '../../data/portfolio/5_trump-talks-trash'

class PortfolioView5 extends Component {
    render() {
        const {data} = this.props
        const keywords = data.site.siteMetadata.keywords
        return (
            <Layout>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="keywords" content={keywords} />
                    <title>{`${trumpTalksData.title} | Inter-Global Media Network, Inc.`}</title>
                    <meta
                        name="repository"
                        content={trumpTalksData.repository}
                    />
                    <meta
                        name="description"
                        content={trumpTalksData.shortDescription}
                    />
                    <meta name="website" content={trumpTalksData.website} />
                    <meta name="more" content={trumpTalksData.more} />
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
                        {trumpTalksData.title}
                    </PortfolioViewH1Style>
                    <Img
                        data-testid="project-image"
                        fluid={data.portfolioImageFive.childImageSharp.fluid}
                        alt={trumpTalksData.title}
                    />
                    <br />
                    <ShortDescDiv as="div" data-testid="project-shortDesc">
                        {trumpTalksData.shortDescription}
                    </ShortDescDiv>
                    <AnchorsUl as="ul">
                        <li>
                            <a
                                href={trumpTalksData.more}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-more"
                                title={`visit the link to the ${trumpTalksData.title} write up on our portfolio site built with React to read more`}
                            >
                                Read More About {trumpTalksData.title}
                            </a>
                        </li>
                        <li>
                            <a
                                href={trumpTalksData.repository}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-repository"
                                title={`visit the link to the ${trumpTalksData.title} source code on Github to learn more`}
                            >
                                {trumpTalksData.title} Source Code
                            </a>
                        </li>
                        <li>
                            <a
                                href={trumpTalksData.website}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-website"
                                title={`visit the link to the ${trumpTalksData.title} live site to view more`}
                            >
                                {trumpTalksData.title} Live Site
                            </a>
                        </li>
                    </AnchorsUl>
                </PortfolioViewDiv>
            </Layout>
        )
    }
}

export default PortfolioView5

export const portfolioView5Query = graphql`
    query portfolioView5Query {
        site {
            siteMetadata {
                title
                keywords
            }
        }
        portfolioImageFive: file(
            relativePath: {eq: "projects/trump-talks.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
