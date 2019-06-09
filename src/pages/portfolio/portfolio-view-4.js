import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import {Link, graphql} from 'gatsby'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import Layout from '../../components/Layout/Layout'
import {
    PortfolioViewDiv,
    PortfolioBackDiv,
    PortfolioViewH1Style,
    ShortDescDiv,
    AnchorsUl,
} from './index.js'
class PortfolioView4 extends Component {
    render() {
        const passedPortfolioData = this.props.location.state || {
            title: 'default title',
            shortDescription: 'default description',
            website: 'https://via.placeholder.com',
        }
        const {
            title,
            repository,
            shortDescription,
            website,
            more,
        } = passedPortfolioData
        const {data} = this.props
        const keywords = data.site.siteMetadata.keywords
        return (
            <Layout>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta name="keywords" content={keywords} />
                    <title>{`${title} | Inter-Global Media Network, Inc.`}</title>
                    <meta name="repository" content={repository} />
                    <meta name="description" content={shortDescription} />
                    <meta name="website" content={website} />
                    <meta name="more" content={more} />
                </Helmet>
                <PortfolioViewDiv>
                    <PortfolioBackDiv>
                        <Link
                            to="/portfolio"
                            title={`go back to main Portfolio page`}
                        >
                            &larr; back
                        </Link>
                    </PortfolioBackDiv>
                    <PortfolioViewH1Style data-testid="project-title">
                        {title}
                    </PortfolioViewH1Style>
                    <Img
                        data-testid="project-image"
                        fluid={data.portfolioImageFour.childImageSharp.fluid}
                        alt={title}
                    />
                    <br />
                    <ShortDescDiv data-testid="project-shortDesc">
                        {shortDescription}
                    </ShortDescDiv>
                    <AnchorsUl>
                        <li>
                            <a
                                href={more}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-more"
                                title={`visit the link to the ${title} write up on our portfolio site built with React to read more`}
                            >
                                Read More About {title}
                            </a>
                        </li>
                        <li>
                            <a
                                href={repository}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-repository"
                                title={`visit the link to the ${title} source code on Github to learn more`}
                            >
                                {title} Source Code
                            </a>
                        </li>
                        <li>
                            <a
                                href={website}
                                target="_new"
                                rel="noopener noreferrer"
                                data-testid="project-website"
                                title={`visit the ${title} live site to view more`}
                            >
                                {title} Live Site
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
