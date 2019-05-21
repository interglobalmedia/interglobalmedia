import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'

import chatApp from '../../images/chatterbox.jpg'
import speechToText from '../../images/speech-to-text.jpg'
import nodeDrawingApp from '../../images/node-collaborative-drawing-app.jpg'

const AppsDiv = styled.div`
    margin: 3rem auto;
    @media (min-width: 990px) {
        display: grid;
        width: 90%;
        grid-template-columns: repeat(3, 1fr);
        padding; 0;
    }
`

const AppsUl = styled.ul`
    width: 97.5%;
    margin: 0 auto;
    display: grid;
    list-style-type: none;
    & > li {
        padding: 5px 10px;
        border: 1px solid gainsboro;
        box-shadow: 0 -1px 4px #ede7e7;
        cursor: pointer;
    }
    & h3 {
        font-weight: normal;
    }
    & a {
        box-shadow: none;
    }
    & li:hover {
        background-color: rgba(255, 153, 0, 0.5);
    }
`

const UsesSpan = styled.span`
    font-weight: bold;
`

const FeaturedProjects = () => {
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
                ', ',
                'jquery',
                ', ',
                'geolocation',
                ', ',
                'sass',
                ', ',
                'google maps url api',
            ],
            liveSiteUrl: 'https://pacific-savannah-76659.herokuapp.com/',
            src: chatApp,
            projectName: 'chattrbox',
            more: '/portfolio/portfolio-view',
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
            src: speechToText,
            projectName: 'speech to text',
            more: '',
        },
        {
            id: 3,
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
            src: nodeDrawingApp,
            projectName: 'node drawing',
        },
    ].map(FeaturedProject => (
        <div key={FeaturedProject.id}>
            <AppsUl>
                <li>
                    <h3>
                        <a href={FeaturedProject.liveSiteUrl}>
                            {FeaturedProject.projectName} app
                        </a>
                    </h3>
                    <img
                        src={FeaturedProject.src}
                        alt={FeaturedProject.projectName}
                    />
                    <UsesSpan>application uses:</UsesSpan>{' '}
                    {FeaturedProject.tagNames}
                    <br />
                    <Link to="/portfolio/portfolio-view">learn more</Link>
                </li>
            </AppsUl>
        </div>
    ))
}

export default FeaturedProjects
