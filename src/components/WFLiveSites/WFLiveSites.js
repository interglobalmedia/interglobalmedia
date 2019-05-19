import React from 'react'
import styled from '@emotion/styled'
import {SiteWrapperDiv, SiteLi, SpanStyle} from '../FSJS/FSJSLiveSites'

import evolutionDesignDev from '../../images/evolution-design-and-development.jpg'
import reactFlowUpdated2018 from '../../images/react-workflows-updated-2018.jpg'
import canvasArt from '../../images/client-canvas-art.jpg'
import mariadcampbell from '../../images/mariadcampbell.jpg'

const WFLiveSites = () => {
    return [
        {
            id: 1,
            tagNames: [
                'react js',
                ', ',
                'babel 7',
                ', ',
                'eslint',
                ', ',
                'webpack 4+',
                ', ',
                'jest',
                ', ',
                'es6 javascript',
                ', ',
                'dynamic imports',
                ', ',
                'css modules',
                ', ',
                'scss',
                ', ',
                'mini css extract plugin',
                ', ',
                'webpack dev server',
                ', ',
                'webpack dev middleware',
                'gh pages',
            ],
            liveSiteUrl:
                'https://interglobalmedia.github.io/react-workflow-updated-2018/#/',
            siteRepoUrl:
                'https://github.com/interglobalmedia/react-workflow-updated-2018',
            src: reactFlowUpdated2018,
            projectName: 'react workflow 2018',
        },
        {
            id: 2,
            tagNames: [
                'react js',
                ', ',
                'mdx deck',
                ', ',
                'babel 7',
                ', ',
                'gh pages',
            ],
            liveSiteUrl:
                'https://interglobalmedia.github.io/evolution-in-design-and-development/#0',
            siteRepoUrl:
                'https://github.com/interglobalmedia/evolution-in-design-and-development',
            src: evolutionDesignDev,
            projectName: 'evolution in design',
        },
        {
            id: 3,
            tagNames: [
                'netlify',
                ', ',
                'netlify forms',
                ', ',
                'gtags',
                ', ',
                'sitemap xml',
                ', ',
                'custom sitemap',
                ', ',
                'emotion styled components',
                ', ',
                'rss feed',
                ', ',
                'jira',
                ', ',
                'jira plugin',
                ', ',
                'jira github integration',
                ', ',
                'jamstack site',
                ', ',
                'lint staged',
                ', ',
                'husky',
                ', ',
                'prettier',
                ', ',
                'eslint',
                ', ',
                'eslint config prettier',
                ', ',
                'react testing library',
                ', ',
                'gatsbyjs 2',
                ', ',
                'google custom search',
                ', ',
                'gatsbyjs blog',
            ],
            liveSiteUrl: 'https://www.mariadcampbell.com/',
            liveRepoUrl: 'https://github.com/interglobalmedia/mariadcampbell',
            src: mariadcampbell,
            projectName: 'maria d campbell',
        },
        {
            id: 4,
            tagNames: [
                'code refactoring',
                ', ',
                'workflow refactoring',
                ', ',
                'canvas 2d',
                ', ',
                'canvas animation',
                ', ',
                'babel 7',
                ', ',
                'webpack 4+',
                ', ',
                'prettier',
            ],
            liveSiteUrl:
                'https://interglobalmedia.github.io/client-canvas-art/',
            siteRepoUrl:
                'https://github.com/interglobalmedia/client-canvas-art',
            src: canvasArt,
            projectName: 'client canvas art',
        },
    ].map(WFLiveSite => {
        return (
            <SiteWrapperDiv key={WFLiveSite.id}>
                <SiteLi>
                    <SpanStyle>site url: </SpanStyle>
                    <a
                        href={WFLiveSite.liveSiteUrl}
                        alt={WFLiveSite.projectName}
                        target="_new"
                    >
                        {WFLiveSite.projectName}
                    </a>
                    <br />
                    <img src={WFLiveSite.src} alt={WFLiveSite.projectName} />
                    <SpanStyle>repository: </SpanStyle>
                    <a href={WFLiveSite.siteRepoUrl} target="_new">
                        {WFLiveSite.projectName} on github
                    </a>
                    <br />
                    <SpanStyle>uses: </SpanStyle>
                    {WFLiveSite.tagNames}
                </SiteLi>
            </SiteWrapperDiv>
        )
    })
}

export default WFLiveSites
