import React from 'react'
import {Link, graphql} from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../../components/Layout/Layout'
import portfolioData from '../../data/portfolio'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import SEO from '../../components/Seo/Seo'

export const ColumnsDiv = styled.div`
    width: 90%;
    margin: 3rem auto;
    display: grid;
    @media (min-width: 990px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`

export const ProjectUl = styled.div`
    width: 90%;
    max-width: 1026px;
    margin: 1rem auto;
    list-style-type: none;
    & a {
        box-shadow: none !important;
        color: rgb(39, 74, 169);
    }
    & a:hover {
        text-decoration: underline;
    }
    & li:last-child {
        margin-top: 0.5rem;
    }
    @media (min-width: 990px) {
        margin: 0.5rem auto;
    }
`

const ProjectTitleLi = styled.li`
    font-size: 1.1rem;
`

export const ImgStyle = styled.img`
    max-width: 800px;
    width: 100%;
`

export const ParaStyle = styled.p`
    width: 100%;
    max-width: 800px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: -1rem;
    color: rgb(88, 86, 86);
`

export const SpanStyle = styled.span`
    color: rgb(148, 75, 43);
`

const MoreP = styled.p`
    font-size: 1.1rem;
`

const PortfolioIndex = props => {
    const {data} = props
    const title = props.data.site.siteMetadata.title
    const keywords = props.data.site.siteMetadata.keywords
    return (
        <Layout>
            <SEO location={props.location} title={title} keywords={keywords} />
            <ColumnsDiv>
                {portfolioData.map(project => (
                    <ProjectUl key={project.id}>
                        <ProjectTitleLi>
                            <Link
                                to={'/portfolio/portfolio-view'}
                                state={project}
                                key={project.title}
                                title={`visit the ${
                                    project.title
                                } page to learn more about the app`}
                            >
                                {project.title}
                            </Link>
                        </ProjectTitleLi>
                        <img
                            src={project.image}
                            alt={project.title}
                            key={project.id}
                        />
                        <ParaStyle>{project.shortDescription}</ParaStyle>
                        <SpanStyle>{project.tags}</SpanStyle>
                        <br />
                        <li>
                            <Link
                                to={'/portfolio/portfolio-view'}
                                state={project}
                                key={project.title}
                                title={`visit the ${
                                    project.title
                                } page to view more about the app`}
                            >
                                <MoreP>view more</MoreP>
                            </Link>
                        </li>
                    </ProjectUl>
                ))}
            </ColumnsDiv>
        </Layout>
    )
}

export default PortfolioIndex

export const indexQuery = graphql`
    query indexQuery {
        site {
            siteMetadata {
                title
                keywords
            }
        }
    }
`
