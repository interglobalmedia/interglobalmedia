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

const PortfolioIndex = props => {
    return (
        <Layout>
            <ColumnsDiv>
                {portfolioData.map((project, index) => (
                    <ProjectDiv key={index}>
                        <Link
                            to={'/portfolio/view'}
                            state={project}
                            key={project.title}
                            style={{boxShadow: 'none'}}
                        >
                            {project.title}
                        </Link>
                        <img
                            src={project.image}
                            alt={project.title}
                            style={{
                                maxWidth: '800px',
                                width: '100%',
                                maxHeight: '800px',
                                height: '100%',
                            }}
                        />
                        <p
                            style={{
                                width: '100%',
                                maxWidth: '800px',
                                display: 'flex',
                                alignItems: 'flex-end',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                marginTop: '-1rem',
                                color: '#717171',
                            }}
                        >
                            {project.shortDescription}
                        </p>
                        <p
                            style={{
                                width: '100%',
                                maxWidth: '800px',
                                display: 'flex',
                                alignItems: 'flex-end',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                marginTop: '-1rem',
                                color: '#717171',
                            }}
                        >
                            {project.shortDescription2}
                        </p>
                        <span style={{color: 'rgb(216, 132, 46)'}}>
                            {project.tags}
                        </span>
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
