import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import wfSite4Data from '../../data/wf-live-sites/wf-live-site-4'
import {SiteLi, SpanStyle} from './WFLiveSites'

const WFLiveSite4 = () => {
    return (
        <StaticQuery
            query={wfLiveSite4Query}
            render={data => {
                return (
                    <SiteLi>
                        <SpanStyle>site url: </SpanStyle>
                        <a
                            href={wfSite4Data.liveSiteUrl}
                            alt={wfSite4Data.projectName}
                            title={`visit the ${
                                wfSite4Data.projectName
                            } live site to view on Github gh-pages`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            {wfSite4Data.projectName}
                        </a>
                        <br />
                        <br />
                        <Image
                            fluid={data.wfLiveSiteImage4.childImageSharp.fluid}
                            alt={wfSite4Data.projectName}
                        />
                        <br />
                        <SpanStyle>repository: </SpanStyle>
                        <a
                            href={wfSite4Data.siteRepoUrl}
                            title={`visit the ${
                                wfSite4Data.projectName
                            } repository to view on Github`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            {wfSite4Data.projectName} on github
                        </a>
                        <br />
                        <SpanStyle>uses: </SpanStyle>
                        {wfSite4Data.tagNames}
                    </SiteLi>
                )
            }}
        />
    )
}

export default WFLiveSite4

export const wfLiveSite4Query = graphql`
    query wfLiveSite4Query {
        wfLiveSiteImage4: file(
            relativePath: {eq: "projects/client-canvas-art.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
