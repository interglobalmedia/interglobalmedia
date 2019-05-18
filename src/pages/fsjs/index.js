import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'
import Layout from '../../components/Layout/Layout'
import FSJSLiveSites from '../../components/FSJS/FSJSLiveSites'
import fsjs from '../../data/fsjs'

const FullStackWrapperDiv = styled.div`
    margin: 0 auto;
    width: 90%;
    max-width: 1026px;
`

const BackDiv = styled.div`
    margin-top: 1.5rem;
    & a {
        box-shadow: none;
    }
    & a:hover {
        text-decoration: underline;
    }
`

const FullStackH1Style = styled.h1`
    font-weight: normal;
    text-align: center;
    margin-top: 3rem;
    color: rgb(216, 132, 46);
`

const FSIconSpan = styled.span`
    color: #2f0000;
`

const shortDescP = styled.p``

const FullStackDiv = styled.div`
    & img {
        width: 100%;
    }
`

const ApproachDiv = styled.div`
    width: 100%;
    margin: 0 auto 1rem;
    max-width: 1026px;
    color: rgb(88, 86, 86);
`

const ApproachSpan = styled.span`
    font-weight: bold;
    color: #2f0000;
`

const AllTagsDiv = styled.div`
    color: rgb(216, 132, 46);
    margin-bottom: 1rem;
`

const LiveSitesDiv = styled.div`
    margin-bottom: 1rem;
    margin: 0 auto 3rem;
    display: flex;
    flex-direction: column;
    @media (min-width: 800px) {
        display: flex;
        flex-direction: row;
    }
`

const IncludesSpan = styled.span`
    font-weight: bold;
    color: #2f0000;
`

const LiveSitesSpan = styled.div`
    font-weight: bold;
`

const FullStackSJS = props => {
    return (
        <Layout>
            <FullStackWrapperDiv>
                <BackDiv>
                    <Link to="/services">&larr; back</Link>
                </BackDiv>
                <FullStackH1Style>
                    <FSIconSpan>{fsjs.icon}</FSIconSpan> {fsjs.title}
                </FullStackH1Style>
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
            </FullStackWrapperDiv>
        </Layout>
    )
}

export default FullStackSJS
