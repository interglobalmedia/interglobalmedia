import speechToText from '../images/speech-to-text.jpg'
import theGroove from '../images/welcome-to-the-groove.jpg'
import rockinSynth from '../images/rockin-synth.jpg'
import catWhisperer from '../images/cat-whisperer-app.jpg'
import trumpTalks from '../images/trump-talks.jpg'
import chatterbox from '../images/chatterbox.jpg'

const data = [
    {
        title: 'Speech To Text',
        repository: 'https://github.com/interglobalmedia/speech-to-text-app',
        website: 'https://interglobalmedia.github.io/speech-to-text-app/',
        image: speechToText,
        shortDescription: `A voice controlled notes app using the Speech Recognition Api and React.
    
    This little app was built with React, Webpack, The Web Speech Recognition Api, and Session Storage. I also use Babel 7 for JS compilation and Jest for testing.`,
        tags: [
            'web speech recognition api',
            ', ',
            'session storage',
            ', ',
            'react',
            ', ',
            'webpack 4',
            ', ',
            'babel 7',
            ', ',
            'jest testing',
        ],
        more: `https://interglobalmedia.github.io/portfolio/#/work/speech-to-text-app`,
    },
    {
        title: 'Welcome To The Groove',
        repository: 'https://github.com/interglobalmedia/jukebox',
        website: 'https://interglobalmedia.github.io/jukebox/',
        image: theGroove,
        shortDescription: `An audio player app backed by a JS object called Jukebox with methods to play, stop, and load songs. Metadata is extracted from audio files, a progress bar with a thumb slider which displays the duration of songs, and is synched to the audio's current time. There is also a search input and more.`,
        tags: [
            'object oriented javascript',
            ', ',
            'audio web api',
            ', ',
            'metadata',
            ', ',
            'progress bar',
            ', ',
            'thumb slider',
            ', ',
            'search',
        ],
        more: `https://interglobalmedia.github.io/portfolio/#/work/welcome-to-the-groove`,
    },
    {
        title: 'Rockin Synth',
        repository: `https://github.com/interglobalmedia/rockin-synth`,
        website: `https://interglobalmedia.github.io/rockin-synth/`,
        shortDescription: `Long description`,
        image: rockinSynth,
        shortDescription: `When the user presses a key, it creates a musical note corresponding to that of a real piano.
    
    When the user presses a key, a transition is triggered. When the user presses down on the key, it becomes a bit bigger and turns yellow. When the user lifts their finger from the key, the key scales down to its regular size and the yellow background disappears.`,
        tags: [
            'event listeners',
            ', ',
            'e.keyCode',
            ', ',
            'e.which',
            ', ',
            'kbd tags',
            ', ',
            'transitions',
        ],
        more: `https://interglobalmedia.github.io/portfolio/#/work/rockin-synth`,
    },
    {
        title: 'Cat Whisperer App',
        repository: `https://github.com/interglobalmedia/the-cat-whisperer`,
        website: `https://interglobalmedia.github.io/the-cat-whisperer/`,
        image: catWhisperer,
        shortDescription: `A little text to speech app I created so that cat lovers could be inspired to write about their cats using the Speech Synthesis API while being inspired by the app’s cat image slideshow. There is also music if one wants to listen while writing. The user’s text is saved to session storage. If the user reaches the 5mb limit, he/she can save it to a .txt file and download it.`,
        tags: [
            'text to speech',
            ', ',
            'speech synthesis api',
            ', ',
            'audio web api',
            ', ',
            'session storage',
            ', ',
            'file downloads',
        ],
        more: `https://interglobalmedia.github.io/portfolio/#/work/cat-whisperer-app`,
    },
    {
        title: `Trump Talks Trash`,
        repository: `https://github.com/interglobalmedia/trump-talks`,
        website: `https://trump-talks-trash.herokuapp.com/`,
        image: trumpTalks,
        shortDescription: `A Random Quote API Application using the What Does Trump Think? API. I created a Nodejs app using the ejs (embedded javascript) view engine for Express, a minimalist framework for Nodejs. I was only using one image which was not large, and there were no fancy animations involved. I use the fetch() API method instead of AJAX.`,
        tags: [
            'fetch api',
            ', ',
            'nodejs',
            ', ',
            'express',
            ', ',
            'ejs',
            ', ',
            'random quote api',
        ],
        more: `https://interglobalmedia.github.io/portfolio/#/work/trump-talks`,
    },
    {
        title: `Node Chat App`,
        respository: `https://github.com/interglobalmedia/node-chat-app`,
        website: `https://pacific-savannah-76659.herokuapp.com/`,
        image: chatterbox,
        shortDescription: `A real time communications app built with websockets/socket.io websocket library, Node.js, and Express. What is it for? For friends, family, and/or colleagues to connect in real time and communicate with each other. messages are timestamped. chattrbox also uses the geolocation API and Google Maps API Maps Url.`,
        tags: [
            'websockets',
            ', ',
            'socket.io',
            ', ',
            'nodejs',
            ', ',
            'express',
            ', ',
            'geolocation api',
            ', ',
            'google maps api maps url',
        ],
    },
]

export default data
