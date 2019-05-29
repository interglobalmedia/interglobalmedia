import React from 'react'
import styled from '@emotion/styled'

const PhoneStyle = styled.a`
    font-weight: 400;
    & :hover {
        text-decoration: underline;
    }
`

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
                <PhoneStyle href={phone.link}>{phone.text}</PhoneStyle>
            </li>
        )
    })
}

export default Phone
