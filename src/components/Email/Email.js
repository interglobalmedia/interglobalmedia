import React from 'react'
import {ContributeStyle} from '../../exports/named-exports'

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
                <ContributeStyle as="a" href={email.link} title={`email us`}>
                    {email.text}
                </ContributeStyle>
            </li>
        )
    })
}

export default Email
