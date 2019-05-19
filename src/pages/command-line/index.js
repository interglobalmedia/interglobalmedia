import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLink} from '@fortawesome/free-solid-svg-icons'
import Layout from '../../components/Layout/Layout'
import cli from '../../data/cli'

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

import {ATagStyle} from '../git-for-non-devs'

const CLIDiv = styled.div`
    & img {
        width: 100%;
    }
`

const CLIApproachDiv = styled.div`
    width: 100 %;
    margin: 0 auto 3rem;
    max- width: 1026px;
    color: rgb(88, 86, 86);
`

const CLI = () => {
    return (
        <Layout>
            <WrapperDiv>
                <BackDiv>
                    <Link to="/services">&larr; back</Link>
                </BackDiv>
                <H1Style>
                    <IconSpan>{cli.icon}</IconSpan> {cli.title}
                    <br />
                </H1Style>
                <CLIDiv>
                    <img src={cli.image} alt={cli.title} />
                    <H2Style>{cli.shortDescription}</H2Style>
                    <ApproachDiv>
                        <ApproachSpan>background:</ApproachSpan>{' '}
                        {cli.background}
                    </ApproachDiv>
                    <ApproachDiv>
                        <ApproachSpan>approach:</ApproachSpan> {cli.approach}
                    </ApproachDiv>
                    <CLIApproachDiv>
                        <IncludesSpan>more info:</IncludesSpan>{' '}
                        <ATagStyle href={cli.infoUrl1} target="_new">
                            <FontAwesomeIcon icon={faLink} /> Command Line
                            Interface on Wikipedia
                        </ATagStyle>
                        ,{' '}
                        <ATagStyle href={cli.infoUrl2} target="_new">
                            <FontAwesomeIcon icon={faLink} /> Refreshable
                            Braille Display on Wikipedia
                        </ATagStyle>
                        ,{' '}
                        <ATagStyle href={cli.infoUrl3} target="_new">
                            <FontAwesomeIcon icon={faLink} /> Shell Computing On
                            Wikipedia
                        </ATagStyle>
                        ,{' '}
                        <ATagStyle href={cli.infoUrl4} target="_new">
                            <FontAwesomeIcon icon={faLink} /> What are the
                            advantages and disadvantages of Command Line
                            Interface? on Quora
                        </ATagStyle>
                    </CLIApproachDiv>
                </CLIDiv>
            </WrapperDiv>
        </Layout>
    )
}

export default CLI
