import React from 'react'
import {Link} from 'gatsby'
import styled from '@emotion/styled'

import propagationImg from '../../images/mael-balland-1157034-unsplash.jpg'
import outdatedContent from '../../images/fredy-jacob-764477-unsplash.jpg'

const PostsDiv = styled.div`
    @media (min-width: 990px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
`

const PostsUl = styled.ul`
    width: 97.5%;
    margin: 0 auto 0.75rem;
    list-style-type: none;
    & > li {
        padding: 5px 10px;
        border: 1px solid gainsboro;
        box-shadow: 0 -1px 4px #ede7e7;
        cursor: pointer;
    }
    & li:hover {
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
    & a:hover {
        text-decoration: underline;
    }
    & img {
        margin-bottom: 1rem;
        margin-top: 0.25rem;
    }
    @media (min-width: 990px) {
        display: grid;
    }
`

const blogSlug = '/blog'

const id1Slug = '/why-your-computer-may-not-point-to-newly-propagated-site/'
const id2Slug = '/outdated-content-and-google-custom-search/'

const FeaturedPosts = () => {
    return [
        {
            id: 1,
            tagNames: [
                'google search',
                ', ',
                'google custom search',
                ', ',
                'outdated content',
                ', ',
                'seo',
            ],
            catNames: ['outdated content'],
            path: `${blogSlug}${id2Slug}`,
            title: 'Outdated Content And Google Custom Search',
            src: outdatedContent,
            excerpt:
                "Yesterday I pretty much completed this site ... But there was still one very important thing I hadn't addressed",
        },
        {
            id: 2,
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
            catNames: ['web hosting', ', ', 'changing web hosts'],
            path: `${blogSlug}${id1Slug}`,
            title:
                'Why Your Local Machine (Computer) May Not be Pointing to Your Newly Propagated Site',
            src: propagationImg,
            excerpt:
                'The other day I moved my business site, interglobalmedianetwork.com, from Github gh-pages to Netlify, where this site resides as well',
        },
    ].map(FeaturedPost => (
        <div key={FeaturedPost.id}>
            <PostsUl>
                <li>
                    <a href={FeaturedPost.path} target="_new">
                        {FeaturedPost.title}
                    </a>
                    <img src={FeaturedPost.src} alt={FeaturedPost.title} />
                    {FeaturedPost.excerpt} ...
                    <br />
                    <Link to="/tags">
                        <span>tagged in:</span>
                    </Link>{' '}
                    {FeaturedPost.tagNames}
                    <br />
                    <Link to="/categories">
                        <span>categorized under:</span>
                    </Link>{' '}
                    {FeaturedPost.catNames}
                </li>
            </PostsUl>
        </div>
    ))
}

export default FeaturedPosts
