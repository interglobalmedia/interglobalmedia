import React from 'react'
import styled from '@emotion/styled'

const ContributeStyle = styled.a`
    font-weight: 400;
    & :hover {
        text-decoration: underline;
    }
`

const Contribute = () => {
    return [
        {
            id: 1,
            url: `https://www.mariadcampbell.com`,
            targetContent: '_new',
            text: `My Dev Blog`,
        },
        {
            id: 2,
            url: 'https://dev.to/letsbsocial1',
            targetContent: '_new',
            text: `The Practical Dev`,
        },
    ].map(contribute => {
        return (
            <li key={contribute.id}>
                <ContributeStyle
                    href={contribute.link}
                    target={contribute.targetContent}
                >
                    {' '}
                    {contribute.text}
                </ContributeStyle>
            </li>
        )
    })
}

export default Contribute
