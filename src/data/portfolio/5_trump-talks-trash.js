import trumpTalks from '../../images/projects/trump-talks.jpg'

const trumpTalksData = {
    id: 5,
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
}

export default trumpTalksData
