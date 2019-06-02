import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import fsjsLiveSite3Data from '../../data/fsjs-live-sites/fsjs-live-site-3'
import {SiteLi, SpanStyle} from './FSJSLiveSite1'

const FSJSLiveSite3 = () => {
    return (
        <StaticQuery
            query={fsjsLiveSite3Query}
            render={data => {
                return (
                    <SiteLi>
                        <SpanStyle>url: </SpanStyle>
                        <a href={fsjsLiveSite3Data.liveSiteUrl} target="_new">
                            {fsjsLiveSite3Data.projectName} live site
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
                        <SpanStyle>repository: </SpanStyle>
                        <a href={fsjsLiveSite3Data.siteRepoUrl} target="_new">
                            {fsjsLiveSite3Data.projectName} on github
                        </a>
                        <br />
                        <SpanStyle>uses: </SpanStyle>
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
        fsjsLiveSiteImage3: file(relativePath: {eq: "client-canvas-art.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
