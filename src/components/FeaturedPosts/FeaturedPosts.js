import React from 'react'
import {Link} from 'gatsby'
import styled from '@emotion/styled'

import propagationImg from '../../images/mael-balland-1157034-unsplash.jpg'

const PostsDiv = styled.div`
    @media (min-width: 990px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
`

const PostsUl = styled.ul`
    width: 97.5%;
    margin: 0 auto;
    list-style-type: none;
    padding: 5px 10px;
    border: 1px solid gainsboro;
    box-shadow: 0 -1px 4px #ede7e7;
    cursor: pointer;
    & :hover {
        background-color: rgba(255, 153, 0, 0.5);
    }
    & h3 {
        font-weight: normal;
    }
    & li:last-of-type {
        margin-bottom: 0;
    }
    & a {
        box-shadow: none;
    }
    @media (min-width: 990px) {
        display: grid;
    }
`

const blogSlug = '/blog'

const FeaturedPosts = () => {
    return [
        {
            id: 1,
            tagNames: [
                'dns',
                ', ',
                'local hosts file',
                ', ',
                'ip address',
                ', ',
                'site propagation',
                ', ',
                'dns information groping',
            ],
            path: `${blogSlug}/why-your-computer-may-not-point-to-newly-propagated-site/`,
            title:
                'Why Your Local Machine (Computer) May Not be Pointing to Your Newly Propagated Site',
            src: propagationImg,
            excerpt:
                'The other day I moved my business site, interglobalmedianetwork.com, from Github gh-pages to Netlify, where this site resides as well',
        },
    ].map(FeaturedPost => (
        <PostsDiv key={FeaturedPost.id}>
            <PostsUl>
                <li>
                    <a href={FeaturedPost.path} target="_new">
                        {FeaturedPost.title}
                    </a>
                </li>
                <img src={FeaturedPost.src} alt={FeaturedPost.title} />
                <li>{FeaturedPost.excerpt} ...</li>
                <li>
                    <Link to="/tags">
                        <span>tagged in:</span>
                    </Link>{' '}
                    {FeaturedPost.tagNames}
                </li>
            </PostsUl>
        </PostsDiv>
    ))
}

export default FeaturedPosts
