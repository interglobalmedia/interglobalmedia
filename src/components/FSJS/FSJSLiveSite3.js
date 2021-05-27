import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import fsjsLiveSite3Data from '../../data/fsjs-live-sites/fsjs-live-site-3'
import {SiteLi, SpanStyle} from '../../exports/named-exports'

const FSJSLiveSite3 = () => {
    return (
        <StaticQuery
            query={fsjsLiveSite3Query}
            render={data => {
                return (
                    <SiteLi as="li">
                        <SpanStyle as="span">url: </SpanStyle>
                        <a
                            href={fsjsLiveSite3Data.liveSiteUrl}
                            title={`visit the ${
                                fsjsLiveSite3Data.projectName
                            } live site to view on Github gh-pages`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            {fsjsLiveSite3Data.projectName}
                        </a>
                        <br />
                        <br />
                        <Image
                            fluid={
                                data.fsjsLiveSiteImage3.childImageSharp.fluid
                            }
                            alt={fsjsLiveSite3Data.projectName}
                        />
                        <br />
                        <SpanStyle as="span">repository: </SpanStyle>
                        <a
                            href={fsjsLiveSite3Data.siteRepoUrl}
                            title={`visit the ${
                                fsjsLiveSite3Data.projectName
                            } repository to view on Github`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            {fsjsLiveSite3Data.projectName} on github
                        </a>
                        <br />
                        <SpanStyle as="span">uses: </SpanStyle>
                        {fsjsLiveSite3Data.tagNames}
                    </SiteLi>
                )
            }}
        />
    )
}

export default FSJSLiveSite3

export const fsjsLiveSite3Query = graphql`
    query fsjsLiveSite3Query {
        fsjsLiveSiteImage3: file(
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
