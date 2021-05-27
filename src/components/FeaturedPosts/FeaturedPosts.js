import React from 'react'
import FeaturedPost1 from './FeaturedPost1'
import FeaturedPost2 from './FeaturedPost2'

import {PostsUl} from '../../exports/named-exports'

const FeaturedPosts = () => {
    return (
        <PostsUl as="ul">
            <FeaturedPost1 />
            <FeaturedPost2 />
        </PostsUl>
    )
}

export default FeaturedPosts
