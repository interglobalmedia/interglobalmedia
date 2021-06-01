import React from 'react'
import FSJSLiveSite1 from './FSJSLiveSite1'
import FSJSLiveSite2 from './FSJSLiveSite2'
import FSJSLiveSite3 from './FSJSLiveSite3'
import FSJSLiveSite4 from './FSJSLiveSite4'

import {SiteWrapperDiv} from '../../exports/named-exports'

const FSJSLiveSites = () => {
    return (
        <SiteWrapperDiv as="div">
            <FSJSLiveSite1 />
            <FSJSLiveSite2 />
            <FSJSLiveSite3 />
            <FSJSLiveSite4 />
        </SiteWrapperDiv>
    )
}

export default FSJSLiveSites
