import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLink} from '@fortawesome/free-solid-svg-icons'
import Layout from '../../components/Layout/Layout'
import gfnd from '../../data/gfnd'

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

const GitForNonDevsDiv = styled.div`
    & img {
        width: 100%;
    }
    margin-bottom: 3rem;
`
export const GFNDTagsDiv = styled.div`
    color: rgb(216, 132, 46);
    margin-bottom: 1rem;
`

export const ATagStyle = styled.a`
    box-shadow: none;
    & :hover {
        text-decoration: underline;
    }
`

const GitForNonDevs = () => {
    return (
        <Layout>
            <WrapperDiv>
                <BackDiv>
                    <Link to="/services">&larr; back</Link>
                </BackDiv>
                <H1Style>
                    <IconSpan>{gfnd.icon}</IconSpan> {gfnd.title}
                    <br />
                </H1Style>
                <GitForNonDevsDiv>
                    <img src={gfnd.image} alt={gfnd.title} />
                    <H2Style>{gfnd.shortDescription}</H2Style>
                    <ApproachDiv>
                        <ApproachSpan>background:</ApproachSpan>{' '}
                        {gfnd.background}
                    </ApproachDiv>
                    <ApproachDiv>
                        <ApproachSpan>approach:</ApproachSpan> {gfnd.approach}
                    </ApproachDiv>
                    <GFNDTagsDiv>
                        <IncludesSpan>includes:</IncludesSpan> {gfnd.tags} and
                        more
                    </GFNDTagsDiv>
                    <ApproachDiv>
                        <IncludesSpan>more info:</IncludesSpan>{' '}
                        <ATagStyle href={gfnd.infoUrl} target="_new">
                            <FontAwesomeIcon icon={faLink} /> Git Page on
                            Wikipedia
                        </ATagStyle>
                    </ApproachDiv>
                </GitForNonDevsDiv>
            </WrapperDiv>
        </Layout>
    )
}

export default GitForNonDevs
