import React from 'react'

import FeaturedProject1 from './FeaturedProject1'
import FeaturedProject2 from './FeaturedProject2'
import FeaturedProject3 from './FeaturedProject3'

import {AppsUl} from '../../exports/named-exports'

const FeaturedProjects = () => {
    return (
        <AppsUl as="ul">
            <FeaturedProject1 />
            <FeaturedProject2 />
            <FeaturedProject3 />
        </AppsUl>
    )
}

export default FeaturedProjects
