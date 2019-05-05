import React from 'react'
import {Link} from 'gatsby'
import Layout from '../../components/Layout/Layout'
import portfolioData from '../../data/portfolio'
import styled from '@emotion/styled'

const ColumnsDiv = styled.div`
    width: 90%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    margin: 3rem auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProjectDiv = styled.div`
    width: 90%;
    max-width: 1026px;
    margin: 0 auto;
    @media (min-width: 990px) {
        columns: 2 auto;
    }
`

const ImgStyle = styled.img`
    max-width: 800px;
    width: 100%;
    max-height: 800px;
    height: 100%;
`

const ParaStyle = styled.p`
    width: 100%;
    max-width: 800px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: -1rem;
    color: rgb(88, 86, 86);
`

const SpanStyle = styled.span`
    color: rgb(216, 132, 46);
`

const PortfolioIndex = props => {
    return (
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
    )
}

export default PortfolioIndex
