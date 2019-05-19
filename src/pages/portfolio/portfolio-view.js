import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import {Link, graphql} from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../../components/Layout/Layout'

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

export const PortfolioViewH2Style = styled.h2`
    text-align: center;
    font-weight: 400;
    color: rgb(216, 132, 46);
`

export const ShortDescDiv = styled.div`
    // display: flex;
`

export const AnchorsUl = styled.ul`
    display: grid;
    margin-top: 1.5rem;
    list-style-type: square;
`

class PortfolioView extends Component {
    render() {
        const passedPortfolioData = this.props.location.state || {
            title: 'default title',
            shortDescription: 'default description',
            image: 'https://via.placeholder.com/350',
            website: 'https://via.placeholder.com',
        }
        const {
            title,
            repository,
            shortDescription,
            image,
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
                    <meta name="image" content={image} />
                    <meta name="website" content={website} />
                    <meta name="more" content={more} />
                </Helmet>
                <PortfolioViewDiv>
                    <Link to="/portfolio">&larr; back</Link>
                    <PortfolioViewH2Style data-testid="project-title">
                        {title}
                    </PortfolioViewH2Style>
                    <img data-testid="project-image" src={image} alt={title} />
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

export default PortfolioView

export const portfolioViewQuery = graphql`
    query portfolioViewQuery {
        site {
            siteMetadata {
                title
                keywords
            }
        }
    }
`
