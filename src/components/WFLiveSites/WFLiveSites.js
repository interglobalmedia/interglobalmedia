import React from 'react'
import WFLiveSite1 from '../WFLiveSites/WFLiveSite1'
import WFLiveSite2 from '../WFLiveSites/WFLiveSite2'
import WFLiveSite3 from '../WFLiveSites/WFLiveSite3'
import WFLiveSite4 from '../WFLiveSites/WFLiveSite4'

import {SiteWrapperUl} from '../../exports/named-exports'

const WFLiveSites = () => {
    return (
        <SiteWrapperUl as="ul">
            <WFLiveSite1 />
            <WFLiveSite2 />
            <WFLiveSite3 />
            <WFLiveSite4 />
        </SiteWrapperUl>
    )
}

export default WFLiveSites
