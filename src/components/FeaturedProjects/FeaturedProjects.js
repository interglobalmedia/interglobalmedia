import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'

import FeaturedProject1 from './FeaturedProject1'
import FeaturedProject2 from './FeaturedProject2'
import FeaturedProject3 from './FeaturedProject3'

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
    @media (min-width: 990px) {
        width: 90%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 8px;
    }
`

export const UsesSpan = styled.span`
    font-weight: bold;
`

const FeaturedProjects = () => {
    return (
        <AppsUl>
            <FeaturedProject1 />

            <FeaturedProject2 />

            <FeaturedProject3 />
        </AppsUl>
    )
}

export default FeaturedProjects
