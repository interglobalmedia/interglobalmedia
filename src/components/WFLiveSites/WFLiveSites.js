import React from 'react'
import styled from '@emotion/styled'
import WFLiveSite1 from '../WFLiveSites/WFLiveSite1'
import WFLiveSite2 from '../WFLiveSites/WFLiveSite2'
import WFLiveSite3 from '../WFLiveSites/WFLiveSite3'
import WFLiveSite4 from '../WFLiveSites/WFLiveSite4'

export const SiteWrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    & li {
        list-style-type: none;
    }
    & a {
        box-shadow: none;
    }
    & a:hover {
        text-decoration: underline;
    }
    @media (min-width: 800px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 1.25%;
        width: 100%;
        max-width: 1026px;
    }
`

export const SiteLi = styled.li`
    width: 100%;
    display: block;
    margin: 0 auto;
`

export const SpanStyle = styled.span`
    font-weight: bold;
`

const WFLiveSites = () => {
    return (
        <SiteWrapperDiv>
            <WFLiveSite1 />
            <WFLiveSite2 />
            <WFLiveSite3 />
            <WFLiveSite4 />
        </SiteWrapperDiv>
    )
}

export default WFLiveSites
