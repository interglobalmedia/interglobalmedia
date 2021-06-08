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

import guessTheKeysData from '../../data/portfolio/13_guess_the_keys'

class PortfolioView13 extends Component {
    render() {
        const {data} = this.props
        const keywords = data.site.siteMetadata.keywords

        return (
            <Layout>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="keywords" content={keywords} />
                    <title>{`${guessTheKeysData.title} | Inter - Global Media Network, Inc.`}</title>
                <meta
                        name="repository"
                        content={guessTheKeysData.repository}
                    />
                    <meta
                        name="description"
                        content={guessTheKeysData.shortDescription}
                    />
                    <meta
                        name="website"
                        content={guessTheKeysData.website}
                    />
                    <meta name="more" content={guessTheKeysData.more} />
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
                        {guessTheKeysData.title}
                    </PortfolioViewH1Style>
                    <Img
                        data-testid="project-image"
                        fluid={data.portfolioImageThirteen.childImageSharp.fluid}
                        alt={guessTheKeysData.title}
                    />
                    <br />
                    <ShortDescDiv as="div" data-testid="project-shortDesc">
                        {guessTheKeysData.shortDescription}
                    </ShortDescDiv>
                    <AnchorsUl as="ul">
                        <li>
                            <a
                                href={guessTheKeysData.more}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-more"
                                title={`visit the link to the ${guessTheKeysData.title} write up on the ${guessTheKeysData.title} Github repository README.md to read more`}
                            >
                                Read More About {guessTheKeysData.title}
                            </a>
                        </li>
                        <li>
                            <a
                                href={guessTheKeysData.repository}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-repository"
                                title={`visit link to view ${guessTheKeysData.title} app source code on Github to learn more`}
                            >
                                {guessTheKeysData.title} Source Code
                            </a>
                        </li>
                        <li>
                            <a
                                href={guessTheKeysData.website}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-website"
                                title={`visit link to view ${guessTheKeysData.title} app live site to view more`}
                            >
                                {guessTheKeysData.title} Live Site
                            </a>
                        </li>
                    </AnchorsUl>
                </PortfolioViewDiv>
            </Layout>
        )
    }
}

export default PortfolioView13

export const portfolioView13Query = graphql`
    query portfolioView13Query {
        site {
            siteMetadata {
                title
                keywords
            }
        }
        portfolioImageThirteen: file(
            relativePath: {eq: "projects/guess-the-keys.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`