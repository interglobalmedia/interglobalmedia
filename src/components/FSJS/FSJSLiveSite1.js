import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import fsjsLiveSite1Data from '../../data/fsjs-live-sites/fsjs-live-site-1'
import {SiteLi, SpanStyle} from '../../exports/named-exports'

const FSJSLiveSite1 = () => {
    return (
        <StaticQuery
            query={fsjsLiveSite1Query}
            render={data => {
                return (
                    <SiteLi as="li">
                        <SpanStyle as="span">url: </SpanStyle>
                        <a
                            href={fsjsLiveSite1Data.liveSiteUrl}
                            title={`visit the ${
                                fsjsLiveSite1Data.projectName
                            } live site to view on Heroku`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            {fsjsLiveSite1Data.projectName}
                        </a>
                        <br />
                        <br />
                        <Image
                            fluid={
                                data.fsjsLiveSiteImage1.childImageSharp.fluid
                            }
                            alt={fsjsLiveSite1Data.projectName}
                        />
                        <br />
                        <SpanStyle as="span">repository: </SpanStyle>
                        <a
                            href={fsjsLiveSite1Data.siteRepoUrl}
                            title={`visit the ${
                                fsjsLiveSite1Data.projectName
                            } repository to view on Github`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            {fsjsLiveSite1Data.projectName} on github
                        </a>
                        <br />
                        <SpanStyle as="span">uses: </SpanStyle>
                        {fsjsLiveSite1Data.tagNames}
                    </SiteLi>
                )
            }}
        />
    )
}

export default FSJSLiveSite1

export const fsjsLiveSite1Query = graphql`
    query fsjsLiveSite1Query {
        fsjsLiveSiteImage1: file(
            relativePath: {eq: "projects/chatterbox.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
