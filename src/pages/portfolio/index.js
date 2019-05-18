import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../../components/Layout/Layout'
import portfolioData from '../../data/portfolio'
import styled from '@emotion/styled'
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
    color: rgb(216, 132, 46);
`

const PortfolioIndex = props => {
    const {data} = props
    const title = data.site.siteMetadata.title
    const keywords = data.site.siteMetadata.keywords
    return (
        <Layout>
            <SEO location={props.location} title={title} keywords={keywords} />
            <ColumnsDiv>
                {portfolioData.map((project, index) => (
                    <ProjectUl key={index}>
                        <li>
                            <Link
                                to={'/portfolio/portfolio-view'}
                                state={project}
                                key={project.title}
                            >
                                {project.title}
                            </Link>
                        </li>
                        <ImgStyle src={project.image} alt={project.title} />
                        <ParaStyle>{project.shortDescription}</ParaStyle>
                        <SpanStyle>{project.tags}</SpanStyle>
                        <br />
                        <li>
                            <Link
                                to={'/portfolio/portfolio-view'}
                                state={project}
                                key={project.title}
                            >
                                <p>view more</p>
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
