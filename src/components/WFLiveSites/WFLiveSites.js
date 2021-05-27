import React from 'react'
import WFLiveSite1 from '../WFLiveSites/WFLiveSite1'
import WFLiveSite2 from '../WFLiveSites/WFLiveSite2'
import WFLiveSite3 from '../WFLiveSites/WFLiveSite3'
import WFLiveSite4 from '../WFLiveSites/WFLiveSite4'

import {SiteWrapperDiv} from '../../exports/named-exports'

const WFLiveSites = () => {
    return (
        <SiteWrapperDiv as="div">
            <WFLiveSite1 />
            <WFLiveSite2 />
            <WFLiveSite3 />
            <WFLiveSite4 />
        </SiteWrapperDiv>
    )
}

export default WFLiveSites
