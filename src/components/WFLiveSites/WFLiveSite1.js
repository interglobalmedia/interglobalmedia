import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import wfSite1Data from '../../data/wf-live-sites/wf-live-site-1'
import {SiteLi, SpanStyle} from './WFLiveSites'

const WFLiveSite1 = () => {
    return (
        <StaticQuery
            query={wfLiveSite1Query}
            render={data => {
                return (
                    <SiteLi>
                        <SpanStyle>site url: </SpanStyle>
                        <a
                            href={wfSite1Data.liveSiteUrl}
                            alt={wfSite1Data.projectName}
                            target="_new"
                        >
                            {wfSite1Data.projectName}
                        </a>
                        <br />
                        <br />
                        <Image
                            fluid={data.wfLiveSiteImage1.childImageSharp.fluid}
                            alt={wfSite1Data.projectName}
                        />
                        <br />
                        <SpanStyle>repository: </SpanStyle>
                        <a href={wfSite1Data.siteRepoUrl} target="_new">
                            {wfSite1Data.projectName} on github
                        </a>
                        <br />
                        <SpanStyle>uses: </SpanStyle>
                        {wfSite1Data.tagNames}
                    </SiteLi>
                )
            }}
        />
    )
}

export default WFLiveSite1

export const wfLiveSite1Query = graphql`
    query wfLiveSite1Query {
        wfLiveSiteImage1: file(
            relativePath: {eq: "react-workflows-updated-2018.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
