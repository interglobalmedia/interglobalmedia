import React from 'react'
import styled from '@emotion/styled'
import {ContributeStyle} from '../Contribute/Contribute'

const Phone = () => {
    return [
        {
            id: 1,
            link: 'tel:+1-646-820-7539',
            text: '+1-646-820-7539',
        },
    ].map(phone => {
        return (
            <li key={phone.id}>
                <ContributeStyle href={phone.link} title={`call us`}>
                    {phone.text}
                </ContributeStyle>
            </li>
        )
    })
}

export default Phone
