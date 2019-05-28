import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'

import chatApp from '../../images/chatterbox.jpg'
import speechToText from '../../images/speech-to-text.jpg'
import nodeDrawingApp from '../../images/node-collaborative-drawing-app.jpg'

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
    & a:hover {
        text-decoration: underline;
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
            shortDescription: `A real time communications app built with websockets/socket.io websocket library, Node.js, and Express. What is it for? For friends, family, and/or colleagues to connect in real time and communicate with each other. messages are timestamped. chattrbox also uses the geolocation API and Google Maps API Maps Url.`,
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
            image: chatApp,
            title: 'Node Chat',
            more: '/portfolio/portfolio-view',
        },
        {
            id: 2,
            shortDescription: `A voice controlled notes app using the Speech Recognition Api and React.
    
            This little app was built with React, Webpack, The Web Speech Recognition Api, and Session Storage. I also use Babel 7 for JS compilation and Jest for testing.`,
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
            image: speechToText,
            title: 'Speech to Text',
            more: '',
        },
        {
            id: 3,
            shortDescription: `A real time collaborative drawing app built with websockets/socket.io websocket library, express, and node canvas. What is it for? For friends and family or colleagues to connect in real time and draw collaboratively with each other.`,
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
            image: nodeDrawingApp,
            title: 'Node Drawing',
        },
    ].map(FeaturedProject => (
        <div key={FeaturedProject.id}>
            <AppsUl>
                <li>
                    <h3>
                        <a href={FeaturedProject.liveSiteUrl}>
                            {FeaturedProject.title} app
                        </a>
                    </h3>
                    <img
                        src={FeaturedProject.image}
                        alt={FeaturedProject.title}
                    />
                    <UsesSpan>application uses:</UsesSpan>{' '}
                    {FeaturedProject.tagNames}
                    <br />
                    <Link
                        state={FeaturedProject}
                        to="/portfolio/portfolio-view"
                    >
                        learn more
                    </Link>
                </li>
            </AppsUl>
        </div>
    ))
}

export default FeaturedProjects
