import React from 'react'
import styled from '@emotion/styled'

import chatApp from '../../images/chatterbox.jpg'
import speechToText from '../../images/speech-to-text.jpg'
import canvasArt from '../../images/client-canvas-art.jpg'
import nodeDrawingApp from '../../images/node-collaborative-drawing-app.jpg'

export const SiteWrapperDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin: 1rem auto;
max-width: 1026px;
& li {
        list-style-type: none;
    }
    & a {
        box-shadow: none;
    }
    & a:hover {
        text-decoration: underline;
    }
    @media (min-width: 800px) {
        display: grid;
        grid-template-columns: repeat(min-max((350px, 1fr));
        column-gap: 2.5%;
    }
    @media (min-width: 1068px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        column-gap: 2.5%;
    }
`

export const SiteLi = styled.li`
    width: 90%;
    display: block;
    margin: 0 auto;
    @media (min-width: 1068px) {
        display: flex;
        flex-direction: column;
        & img {
            width: 100%;
            max-width: 799px;
        }
    }
    & img {
        width: 100%;
    }
`

export const SpanStyle = styled.span`
    font-weight: bold;
`

const FSJSLiveSites = () => {
    return [
        {
            id: 1,
            tagNames: [
                'nodejs',
                ', ',
                'npm',
                ', ',
                'websockets',
                ', ',
                'socket.io',
                ', ',
                'expressjs',
                ', ',
                'js',
                'jquery',
                ', ',
                'geolocation',
                ', ',
                'sass',
                ', ',
                'google maps url api',
            ],
            liveSiteUrl: 'https://pacific-savannah-76659.herokuapp.com/',
            siteRepoUrl: 'https://github.com/interglobalmedia/node-chat-app',
            src: chatApp,
            projectName: 'chattrbox',
        },
        {
            id: 2,
            tagNames: [
                'code refactoring',
                ', ',
                'workflow refactoring',
                ', ',
                'react',
                ', ',
                'webpack 4+',
                ', ',
                'babel 7',
                ', ',
                'scss',
                ', ',
                'mini css extract plugin',
                ', ',
                'js',
                ', ',
                'npm',
                ', ',
                'localstorage to file download',
                ', ',
                'react-fontawesome',
                ', ',
                'jest',
                ', ',
                'eslint config react',
                ', ',
                'service worker',
                ', ',
                'asset manifest',
                ', ',
                'precache manifest',
                ', ',
                'workbox webpack plugin',
                ', ',
                'webpack visualizer plugin',
                ', ',
                'speech recognition',
                ', ',
                'voice commands',
                ', ',
                'session storage',
            ],
            liveSiteUrl:
                'https://interglobalmedia.github.io/speech-to-text-app/',
            siteRepoUrl:
                'https://github.com/interglobalmedia/speech-to-text-app',
            src: speechToText,
            projectName: 'speech to text app',
        },
        {
            id: 3,
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
        {
            id: 4,
            tagNames: [
                'nodejs',
                ', ',
                'serve favicon',
                ', ',
                'socket.io',
                ', ',
                'websockets',
                ', ',
                'expressjs',
                ', ',
                'node canvas',
                ', ',
                'collaboration',
            ],
            liveSiteUrl:
                'https://node-collaborative-drawing-app.herokuapp.com/',
            siteRepoUrl:
                'https://github.com/interglobalmedia/node-collaborative-drawing-app',
            src: nodeDrawingApp,
            projectName: 'node drawing app',
        },
    ].map(FSJSSite => {
        return (
            <SiteWrapperDiv key={FSJSSite.id}>
                <SiteLi>
                    <SpanStyle>url: </SpanStyle>
                    <a href={FSJSSite.liveSiteUrl} target="_new">
                        {FSJSSite.projectName} live site
                    </a>
                    <br />
                    <img src={FSJSSite.src} alt={FSJSSite.projectName} />
                    <SpanStyle>repository: </SpanStyle>
                    <a href={FSJSSite.siteRepoUrl} target="_new">
                        {FSJSSite.projectName} on github
                    </a>
                    <br />
                    <SpanStyle>uses: </SpanStyle>
                    {FSJSSite.tagNames}
                </SiteLi>
            </SiteWrapperDiv>
        )
    })
}

export default FSJSLiveSites
