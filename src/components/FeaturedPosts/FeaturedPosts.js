import React from 'react'
import styled from 'styled-components'
import FeaturedPost1 from './FeaturedPost1'
import FeaturedPost2 from './FeaturedPost2'

export const PostsUl = styled.ul`
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
        background: rgba(255, 153, 0, 0.5);
    }
    & h3 {
        font-weight: normal;
    }
    & li:last-of-type {
        margin-bottom: 0;
    }
    br {
        line-height: 2.5;
    }
    @media (min-width: 990px) {
        width: 90%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 8px;
    }
`

const FeaturedPosts = () => {
    return (
        <PostsUl as="ul">
            <FeaturedPost1 />
            <FeaturedPost2 />
        </PostsUl>
    )
}

export default FeaturedPosts
