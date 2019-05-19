import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'
import Layout from '../../components/Layout/Layout'

import gfd from '../../data/gfd'
import {
    WrapperDiv,
    BackDiv,
    H1Style,
    H2Style,
    IconSpan,
    ApproachDiv,
    ApproachSpan,
    IncludesSpan,
} from '../fsjs'

const GitForDevsDiv = styled.div`
    & img {
        width: 100%;
    }
`
export const GFDTagsDiv = styled.div`
    color: rgb(216, 132, 46);
    margin-bottom: 3rem;
`

const GitForDevs = () => {
    return (
        <Layout>
            <WrapperDiv>
                <BackDiv>
                    <Link to="/services">&larr; back</Link>
                </BackDiv>
                <H1Style>
                    <IconSpan>{gfd.icon}</IconSpan> {gfd.title}
                    <br />
                </H1Style>
                <GitForDevsDiv>
                    <img src={gfd.image} alt={gfd.title} />
                    <H2Style>{gfd.shortDescription}</H2Style>
                    <ApproachDiv>
                        <ApproachSpan>background:</ApproachSpan>{' '}
                        {gfd.background}
                    </ApproachDiv>
                    <ApproachDiv>
                        <ApproachSpan>approach:</ApproachSpan> {gfd.approach}
                    </ApproachDiv>
                    <GFDTagsDiv>
                        <IncludesSpan>includes:</IncludesSpan> {gfd.tags} and
                        more
                    </GFDTagsDiv>
                </GitForDevsDiv>
            </WrapperDiv>
        </Layout>
    )
}

export default GitForDevs
