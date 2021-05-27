import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import wfSite1Data from '../../data/wf-live-sites/wf-live-site-1'
import {SiteLi, SpanStyle} from '../../exports/named-exports'

const WFLiveSite1 = () => {
    return (
        <StaticQuery
            query={wfLiveSite1Query}
            render={data => {
                return (
                    <SiteLi as="li">
                        <SpanStyle as="span">site url: </SpanStyle>
                        <a
                            href={wfSite1Data.liveSiteUrl}
                            alt={wfSite1Data.projectName}
                            title={`visit the React ${
                                wfSite1Data.projectName
                            } live site to view on Github gh-pages`}
                            target="_new"
                            rel="noopener noreferrer"
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
                        <SpanStyle as="span">repository: </SpanStyle>
                        <a
                            href={wfSite1Data.siteRepoUrl}
                            title={`visit the React ${
                                wfSite1Data.projectName
                            } repository to view on Github`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            {wfSite1Data.projectName} on github
                        </a>
                        <br />
                        <SpanStyle as="span">uses: </SpanStyle>
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
            relativePath: {eq: "presentations/react-workflows-updated-2018.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
