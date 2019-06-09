import React from 'react'
import styled from '@emotion/styled'
import FSJSLiveSite1 from './FSJSLiveSite1'
import FSJSLiveSite2 from './FSJSLiveSite2'
import FSJSLiveSite3 from './FSJSLiveSite3'
import FSJSLiveSite4 from './FSJSLiveSite4'

export const SiteWrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    & li {
        list-style-type: none;
    }
    @media (min-width: 800px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 1.25%;
        max-width: 1026px;
    }
`

export const SiteLi = styled.li`
    width: 100%;
    display: block;
    margin: 0.5rem auto 1.5rem;
    &:last-of-type {
        margin-bottom: 0;
    }
`

export const SpanStyle = styled.span`
    font-weight: bold;
`

const FSJSLiveSites = () => {
    return (
        <SiteWrapperDiv>
            <FSJSLiveSite1 />
            <FSJSLiveSite2 />
            <FSJSLiveSite3 />
            <FSJSLiveSite4 />
        </SiteWrapperDiv>
    )
}

export default FSJSLiveSites
