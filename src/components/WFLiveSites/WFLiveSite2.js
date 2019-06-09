import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import wfSite2Data from '../../data/wf-live-sites/wf-live-site-2'
import {SiteLi, SpanStyle} from './WFLiveSites'

const WFLiveSite2 = () => {
    return (
        <StaticQuery
            query={wfLiveSite2Query}
            render={data => {
                return (
                    <SiteLi>
                        <SpanStyle>site url: </SpanStyle>
                        <a
                            href={wfSite2Data.liveSiteUrl}
                            alt={wfSite2Data.projectName}
                            title={`visit the ${
                                wfSite2Data.projectName
                            } and development live site to view on Github gh-pages`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            {wfSite2Data.projectName}
                        </a>
                        <br />
                        <br />
                        <Image
                            fluid={data.wfLiveSiteImage2.childImageSharp.fluid}
                            alt={wfSite2Data.projectName}
                        />
                        <br />
                        <SpanStyle>repository: </SpanStyle>
                        <a
                            href={wfSite2Data.siteRepoUrl}
                            title={`visit the ${
                                wfSite2Data.projectName
                            } and development repository to view on Github`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            {wfSite2Data.projectName} on github
                        </a>
                        <br />
                        <SpanStyle>uses: </SpanStyle>
                        {wfSite2Data.tagNames}
                    </SiteLi>
                )
            }}
        />
    )
}

export default WFLiveSite2

export const wfLiveSite2Query = graphql`
    query wfLiveSite2Query {
        wfLiveSiteImage2: file(
            relativePath: {
                eq: "presentations/evolution-design-and-development.jpg"
            }
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
