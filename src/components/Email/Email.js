import React from 'react'
import styled from '@emotion/styled'

const EmailStyle = styled.a`
    font-weight: 400;
    & :hover {
        text-decoration: underline;
    }
`

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
                <EmailStyle href={email.link} title={`email us`}>
                    {email.text}
                </EmailStyle>
            </li>
        )
    })
}

export default Email
