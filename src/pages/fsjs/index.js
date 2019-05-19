import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'
import Layout from '../../components/Layout/Layout'
import FSJSLiveSites from '../../components/FSJS/FSJSLiveSites'
import fsjs from '../../data/fsjs'

export const WrapperDiv = styled.div`
    margin: 0 auto;
    width: 90%;
    max-width: 1026px;
`

export const BackDiv = styled.div`
    margin-top: 1.5rem;
    & a {
        box-shadow: none;
    }
    & a:hover {
        text-decoration: underline;
    }
`

export const H1Style = styled.h1`
    font-weight: normal;
    text-align: center;
    margin-top: 3rem;
    color: rgb(216, 132, 46);
`

export const IconSpan = styled.span`
    color: #2f0000;
`

const FullStackDiv = styled.div`
    & img {
        width: 100%;
    }
`

export const H2Style = styled.h2`
    font-weight: normal;
    text-align: center;
    color: rgb(216, 132, 46);
`

export const ApproachDiv = styled.div`
    width: 100%;
    margin: 0 auto 1rem;
    max-width: 1026px;
    color: rgb(88, 86, 86);
`

export const ApproachSpan = styled.span`
    font-weight: bold;
    color: #2f0000;
`

export const AllTagsDiv = styled.div`
    color: rgb(216, 132, 46);
    margin-bottom: 1rem;
`

export const LiveSitesDiv = styled.div`
    margin-bottom: 1rem;
    margin: 0 auto 3rem;
    display: flex;
    flex-direction: column;
    @media (min-width: 800px) {
        display: flex;
        flex-direction: row;
    }
`

export const IncludesSpan = styled.span`
    font-weight: bold;
    color: #2f0000;
`

export const LiveSitesSpan = styled.div`
    font-weight: bold;
`

const FullStackSJS = props => {
    return (
        <Layout>
            <WrapperDiv>
                <BackDiv>
                    <Link to="/services">&larr; back</Link>
                </BackDiv>
                <H1Style>
                    <IconSpan>{fsjs.icon}</IconSpan> {fsjs.title}
                </H1Style>
                <FullStackDiv>
                    <img src={fsjs.image} alt={fsjs.title} />
                    <ApproachDiv>
                        <ApproachSpan>approach: </ApproachSpan>
                        {fsjs.approach}
                    </ApproachDiv>
                    <AllTagsDiv>
                        <IncludesSpan>includes:</IncludesSpan> {fsjs.allTags}{' '}
                        and more
                    </AllTagsDiv>
                    <LiveSitesSpan>sites:</LiveSitesSpan>
                    <br />
                    <LiveSitesDiv>
                        <FSJSLiveSites />
                    </LiveSitesDiv>
                </FullStackDiv>
            </WrapperDiv>
        </Layout>
    )
}

export default FullStackSJS
