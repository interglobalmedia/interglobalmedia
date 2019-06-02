import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import fsjsLiveSite2Data from '../../data/fsjs-live-sites/fsjs-live-site-2'
import {SiteLi, SpanStyle} from './FSJSLiveSite1'

const FSJSLiveSite2 = () => {
    return (
        <StaticQuery
            query={fsjsLiveSite2Query}
            render={data => {
                return (
                    <SiteLi>
                        <SpanStyle>url: </SpanStyle>
                        <a href={fsjsLiveSite2Data.liveSiteUrl} target="_new">
                            {fsjsLiveSite2Data.projectName} live site
                        </a>
                        <br />
                        <br />
                        <Image
                            fluid={
                                data.fsjsLiveSiteImage2.childImageSharp.fluid
                            }
                            alt={fsjsLiveSite2Data.projectName}
                        />
                        <br />
                        <SpanStyle>repository: </SpanStyle>
                        <a href={fsjsLiveSite2Data.siteRepoUrl} target="_new">
                            {fsjsLiveSite2Data.projectName} on github
                        </a>
                        <br />
                        <SpanStyle>uses: </SpanStyle>
                        {fsjsLiveSite2Data.tagNames}
                    </SiteLi>
                )
            }}
        />
    )
}

export default FSJSLiveSite2

export const fsjsLiveSite2Query = graphql`
    query fsjsLiveSite2Query {
        fsjsLiveSiteImage2: file(relativePath: {eq: "speech-to-text.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
