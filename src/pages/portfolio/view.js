import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import {Link, graphql} from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../../components/Layout/Layout'

const ViewDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3rem auto;
    width: 90%;
    color: rgb(88, 86, 86);
`

const TitleH2Style = styled.h2`
    text-align: center;
    font-weight: 400;
    color: rgb(216, 132, 46);
`

const ShortDescDiv = styled.div`
    display: flex;
`

const AnchorsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & a {
        box-shadow: none;
    }
    & a:first-of-type {
        margin-bottom: -1.25rem;
        margin-top: 1rem;
    }
    & a:nth-of-type(2) {
        margin-bottom: -1.25rem;
    }
    & a:nth-of-type(3) {
        margin-bottom: 1rem;
    }
`

export class view extends Component {
    render() {
        const passedData = this.props.location.state || {
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
        } = passedData
        return (
            <>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta
                        name="keywords"
                        content="web development, react, gatsbyjs, google custom search, mongodb, postgresql, nodejs, npm, office 365, dropbox paper, trello, jsx, css in js, styled components, jira, atlassian, git, distributed version control, github, development, production, feature branches, continuous deployment, aws amplify, git integration, css3, html5, audio, video, full stack development, front end development, back end development, automated workflows, aws, netlify, gh pages, heroku, command line, osx, serverless stack, cross browser compatibility, shadow dom, testing, jest testing, html5 canvas, webgl, linting, eslint, prettier, babel, webpack, css modules, sass, node sass, homebrew, responsive design, es6, modern javascript, node security, npm audit fix, snyk"
                    />
                    <title>{`${title} | Inter-Global Media Network, Inc.`}</title>
                </Helmet>
                <Layout>
                    <ViewDiv>
                        <Link
                            to="/portfolio"
                            style={{
                                boxShadow: 'none',
                                width: '100%',
                                maxWidth: '1280px',
                                margin: '0 auto 1rem',
                            }}
                        >
                            &larr; back
                        </Link>

                        <TitleH2Style>{title}</TitleH2Style>
                        <img src={image} alt={title} />
                        <ShortDescDiv>{shortDescription}</ShortDescDiv>
                        <AnchorsDiv>
                            <a href={more} alt={title} target="_new">
                                Read More About {title}
                            </a>
                            <br />
                            <a href={repository} alt={title} target="_new">
                                {title} Source Code
                            </a>
                            <br />
                            <a href={website} alt={title} target="_new">
                                {title} Live Site
                            </a>
                        </AnchorsDiv>
                    </ViewDiv>
                </Layout>
            </>
        )
    }
}

export default view

export const viewQuery = graphql`
    query viewQuery {
        site {
            siteMetadata {
                title
                keywords
            }
        }
    }
`
