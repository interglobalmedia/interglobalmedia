import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import {Link, graphql} from 'gatsby'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import Layout from '../../components/Layout/Layout'
import {BackDiv} from '../fsjs'

export const PortfolioViewDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3rem auto;
    width: 90%;
    color: rgb(88, 86, 86);
    & a {
        box-shadow: none;
        width: 100%;
        max-width: 1280px;
        margin: 0 auto 1rem;
        cursor: pointer;
    }
    & a:hover {
        text-decoration: underline;
    }
`

const PortfolioBackDiv = styled.div`
    margin-top: -1.5rem;
    margin-bottom: 3rem;
    & a {
        box-shadow: none;
        font-size: 1.2rem;
        color: rgb(39, 74, 169);
    }
    & a:hover {
        text-decoration: underline;
    }
`

export const PortfolioViewH1Style = styled.h1`
    text-align: center;
    font-weight: 400;
    color: rgb(148, 75, 43);
`

export const ShortDescDiv = styled.div``

export const AnchorsUl = styled.ul`
    display: grid;
    margin-top: 1.5rem;
    list-style-type: square;
    & a {
        color: rgb(39, 74, 169);
    }
`

class PortfolioView1 extends Component {
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
                        <Link to="/portfolio">&larr; back</Link>
                    </PortfolioBackDiv>
                    <PortfolioViewH1Style data-testid="project-title">
                        {title}
                    </PortfolioViewH1Style>
                    <Img
                        data-testid="project-image"
                        fluid={data.portfolioImageOne.childImageSharp.fluid}
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
                                data-testid="project-more"
                            >
                                Read More About {title}
                            </a>
                        </li>
                        <li>
                            <a
                                href={repository}
                                target="_new"
                                data-testid="project-repository"
                            >
                                {title} Source Code
                            </a>
                        </li>
                        <li>
                            <a
                                href={website}
                                target="_new"
                                data-testid="project-website"
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
