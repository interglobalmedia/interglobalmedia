import React from 'react'
import {Link, graphql} from 'gatsby'
import {Helmet} from 'react-helmet'
import Layout from '../../components/Layout/Layout'
import portfolioData from '../../data/portfolio'
import styled from '@emotion/styled'
import SEO from '../../components/Seo/Seo'

export const ColumnsDiv = styled.div`
    width: 90%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    margin: 3rem auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ProjectDiv = styled.div`
    width: 90%;
    max-width: 1026px;
    margin: 0 auto;
    @media (min-width: 990px) {
        columns: 2 auto;
    }
`

export const ImgStyle = styled.img`
    max-width: 800px;
    width: 100%;
    max-height: 800px;
    height: 100%;
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
    const title = data.site.siteMetadata.siteTitle
    const keywords = data.site.siteMetadata.keywords
    return (
        <>
            <SEO location={props.location} title={title} keywords={keywords} />
            <Helmet>
                <meta charset="utf-8" />
                <title>Portfolio Page</title>
            </Helmet>
            <Layout>
                <ColumnsDiv>
                    {portfolioData.map((project, index) => (
                        <ProjectDiv key={index}>
                            <SpanStyle>{project.title}</SpanStyle>
                            <ImgStyle src={project.image} alt={project.title} />
                            <ParaStyle>{project.shortDescription}</ParaStyle>
                            <SpanStyle>{project.tags}</SpanStyle>
                            <br />
                            <Link
                                to={'/portfolio/view'}
                                state={project}
                                key={project.title}
                                style={{boxShadow: 'none'}}
                            >
                                <p>view more</p>
                            </Link>
                        </ProjectDiv>
                    ))}
                </ColumnsDiv>
            </Layout>
        </>
    )
}

export default PortfolioIndex

export const indexQuery = graphql`
    query indexQuery {
        site {
            siteMetadata {
                siteTitle
                keywords
            }
        }
    }
`
