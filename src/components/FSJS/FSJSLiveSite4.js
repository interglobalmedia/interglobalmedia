import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import fsjsLiveSite4Data from '../../data/fsjs-live-sites/fsjs-live-site-4'
import {SiteLi, SpanStyle} from './FSJSLiveSites'

const FSJSLiveSite4 = () => {
    return (
        <StaticQuery
            query={fsjsLiveSite4Query}
            render={data => {
                return (
                    <SiteLi>
                        <SpanStyle>url: </SpanStyle>
                        <a
                            href={fsjsLiveSite4Data.liveSiteUrl}
                            title={`visit the ${
                                fsjsLiveSite4Data.projectName
                            } live site to view on Heroku`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            {fsjsLiveSite4Data.projectName}
                        </a>
                        <br />
                        <br />
                        <Image
                            fluid={
                                data.fsjsLiveSiteImage4.childImageSharp.fluid
                            }
                            alt={fsjsLiveSite4Data.projectName}
                        />
                        <br />
                        <SpanStyle>repository: </SpanStyle>
                        <a
                            href={fsjsLiveSite4Data.siteRepoUrl}
                            title={`visit the ${
                                fsjsLiveSite4Data.projectName
                            } repository to view on Github`}
                            target="_new"
                        >
                            {fsjsLiveSite4Data.projectName} on github
                        </a>
                        <br />
                        <SpanStyle>uses: </SpanStyle>
                        {fsjsLiveSite4Data.tagNames}
                    </SiteLi>
                )
            }}
        />
    )
}

export default FSJSLiveSite4

export const fsjsLiveSite4Query = graphql`
    query fsjsLiveSite4Query {
        fsjsLiveSiteImage4: file(
            relativePath: {eq: "projects/node-collaborative-drawing-app.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
