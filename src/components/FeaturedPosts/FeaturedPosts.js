import React from 'react'
import FeaturedPost5 from './FeaturedPost5'
import FeaturedPost4 from './FeaturedPost4'
import FeaturedPost3 from './FeaturedPost3'

import {PostsUl} from '../../exports/named-exports'

const FeaturedPosts = () => {
    return (
        <PostsUl as="ul">
            <FeaturedPost5 />
            <FeaturedPost4 />
            <FeaturedPost3 />
        </PostsUl>
    )
}

export default FeaturedPosts
