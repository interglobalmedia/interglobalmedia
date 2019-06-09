import React from 'react'
import styled from '@emotion/styled'
import {ContributeStyle} from '../Contribute/Contribute'

const Email = () => {
    return [
        {
            id: 1,
            link: 'mailto:interglobalmedia@gmail.com',
            text: 'interglobalmedia@gmail.com',
        },
    ].map(email => {
        return (
            <li key={email.id}>
                <ContributeStyle href={email.link} title={`email us`}>
                    {email.text}
                </ContributeStyle>
            </li>
        )
    })
}

export default Email
