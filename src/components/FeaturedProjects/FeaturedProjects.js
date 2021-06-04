import React from 'react'

import FeaturedProject4 from './FeaturedProject4'
import FeaturedProject5 from './FeaturedProject5'
import FeaturedProject6 from './FeaturedProject6'

import {AppsUl} from '../../exports/named-exports'

const FeaturedProjects = () => {
    return (
        <AppsUl as="ul">
            <FeaturedProject4 />
            <FeaturedProject5 />
            <FeaturedProject6 />
        </AppsUl>
    )
}

export default FeaturedProjects
