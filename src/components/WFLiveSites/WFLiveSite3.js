import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import wfSite3Data from '../../data/wf-live-sites/wf-live-site-3'
import {SiteLi, SpanStyle} from './WFLiveSites'

const WFLiveSite3 = () => {
    return (
        <StaticQuery
            query={wfLiveSite3Query}
            render={data => {
                return (
                    <SiteLi>
                        <SpanStyle>site url: </SpanStyle>
                        <a
                            href={wfSite3Data.liveSiteUrl}
                            alt={wfSite3Data.projectName}
                            target="_new"
                        >
                            {wfSite3Data.projectName}
                        </a>
                        <br />
                        <br />
                        <Image
                            fluid={data.wfLiveSiteImage3.childImageSharp.fluid}
                            alt={wfSite3Data.projectName}
                        />
                        <br />
                        <SpanStyle>repository: </SpanStyle>
                        <a href={wfSite3Data.siteRepoUrl} target="_new">
                            {wfSite3Data.projectName} on github
                        </a>
                        <br />
                        <SpanStyle>uses: </SpanStyle>
                        {wfSite3Data.tagNames}
                    </SiteLi>
                )
            }}
        />
    )
}

export default WFLiveSite3

export const wfLiveSite3Query = graphql`
    query wfLiveSite3Query {
        wfLiveSiteImage3: file(relativePath: {eq: "sites/mariadcampbell.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
