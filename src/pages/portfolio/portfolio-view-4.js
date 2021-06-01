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
import catWhispererData from '../../data/portfolio/4_cat-whisperer-app'
class PortfolioView4 extends Component {
    render() {
        const {data} = this.props
        const keywords = data.site.siteMetadata.keywords
        return (
            <Layout>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="keywords" content={keywords} />
                    <title>{`${catWhispererData.title} | Inter-Global Media Network, Inc.`}</title>
                    <meta
                        name="repository"
                        content={catWhispererData.repository}
                    />
                    <meta
                        name="description"
                        content={catWhispererData.shortDescription}
                    />
                    <meta name="website" content={catWhispererData.website} />
                    <meta name="more" content={catWhispererData.more} />
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
                        {catWhispererData.title}
                    </PortfolioViewH1Style>
                    <Img
                        data-testid="project-image"
                        fluid={data.portfolioImageFour.childImageSharp.fluid}
                        alt={catWhispererData.title}
                    />
                    <br />
                    <ShortDescDiv as="div" data-testid="project-shortDesc">
                        {catWhispererData.shortDescription}
                    </ShortDescDiv>
                    <AnchorsUl as="ul">
                        <li>
                            <a
                                href={catWhispererData.more}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-more"
                                title={`visit the link to the ${catWhispererData.title} write up on our portfolio site built with React to read more`}
                            >
                                Read More About {catWhispererData.title}
                            </a>
                        </li>
                        <li>
                            <a
                                href={catWhispererData.repository}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-repository"
                                title={`visit the link to the ${catWhispererData.title} source code on Github to learn more`}
                            >
                                {catWhispererData.title} Source Code
                            </a>
                        </li>
                        <li>
                            <a
                                href={catWhispererData.website}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-website"
                                title={`visit the ${catWhispererData.title} live site to view more`}
                            >
                                {catWhispererData.title} Live Site
                            </a>
                        </li>
                    </AnchorsUl>
                </PortfolioViewDiv>
            </Layout>
        )
    }
}

export default PortfolioView4

export const portfolioView4Query = graphql`
    query portfolioView4Query {
        site {
            siteMetadata {
                title
                keywords
            }
        }
        portfolioImageFour: file(
            relativePath: {eq: "projects/cat-whisperer-app.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
