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
import speechToTextData from '../../data/portfolio/1_speech-to-text'

class PortfolioView1 extends Component {
    render() {
        const {data} = this.props
        const keywords = data.site.siteMetadata.keywords
        return (
            <Layout>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="keywords" content={keywords} />
                    <title>{`${
                        speechToTextData.title
                    } | Inter-Global Media Network, Inc.`}</title>
                    <meta
                        name="repository"
                        content={speechToTextData.repository}
                    />
                    <meta
                        name="description"
                        content={speechToTextData.shortDescription}
                    />
                    <meta name="website" content={speechToTextData.website} />
                    <meta name="more" content={speechToTextData.more} />
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
                        {speechToTextData.title}
                    </PortfolioViewH1Style>
                    <Img
                        data-testid="project-image"
                        fluid={data.portfolioImageOne.childImageSharp.fluid}
                        alt={speechToTextData.title}
                    />
                    <br />
                    <ShortDescDiv as="div" data-testid="project-shortDesc">
                        {speechToTextData.shortDescription}
                    </ShortDescDiv>
                    <AnchorsUl as="ul">
                        <li>
                            <a
                                href={speechToTextData.more}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-more"
                                title={`visit the link to the ${
                                    speechToTextData.title
                                } write up on our portfolio site built with React to read more`}
                            >
                                Read More About {speechToTextData.title}
                            </a>
                        </li>
                        <li>
                            <a
                                href={speechToTextData.repository}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-repository"
                                title={`visit the link to the ${
                                    speechToTextData.title
                                } source code on Github to learn more`}
                            >
                                {speechToTextData.title} Source Code
                            </a>
                        </li>
                        <li>
                            <a
                                href={speechToTextData.website}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-website"
                                title={`visit the ${
                                    speechToTextData.title
                                } live site to view more`}
                            >
                                {speechToTextData.title} Live Site
                            </a>
                        </li>
                    </AnchorsUl>
                </PortfolioViewDiv>
            </Layout>
        )
    }
}

export default PortfolioView1

export const portfolioView1Query = graphql`
    query portfolioView1Query {
        site {
            siteMetadata {
                title
                keywords
            }
        }
        portfolioImageOne: file(
            relativePath: {eq: "projects/speech-to-text.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
