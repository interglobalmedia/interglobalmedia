import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import fsjsLiveSite2Data from '../../data/fsjs-live-sites/fsjs-live-site-2'
import {SiteLi, SpanStyle} from '../../exports/named-exports'

const FSJSLiveSite2 = () => {
    return (
        <StaticQuery
            query={fsjsLiveSite2Query}
            render={data => {
                return (
                    <SiteLi as="li">
                        <SpanStyle as="span">url: </SpanStyle>
                        <a
                            href={fsjsLiveSite2Data.liveSiteUrl}
                            title={`visit the ${fsjsLiveSite2Data.projectName} live site to view on Github gh-pages`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            {fsjsLiveSite2Data.projectName}
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
                        <SpanStyle as="span">repository: </SpanStyle>
                        <a
                            href={fsjsLiveSite2Data.siteRepoUrl}
                            title={`visit the ${fsjsLiveSite2Data.projectName} repository to view on Github`}
                            target="_new"
                        >
                            {fsjsLiveSite2Data.projectName} on github
                        </a>
                        <br />
                        <SpanStyle as="span">uses: </SpanStyle>
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
        fsjsLiveSiteImage2: file(
            relativePath: {eq: "projects/speech-to-text.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
