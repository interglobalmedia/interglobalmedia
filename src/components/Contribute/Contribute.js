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
            title: `read our posts on our Developer Blog`,
        },
        {
            id: 2,
            url: 'https://dev.to/letsbsocial1',
            targetContent: '_new',
            text: `The Practical Dev`,
            title: `read our posts on The Practical Dev`,
        },
    ].map(contribute => {
        return (
            <li key={contribute.id}>
                <ContributeStyle
                    href={contribute.link}
                    target={contribute.targetContent}
                    title={contribute.title}
                >
                    {' '}
                    {contribute.text}
                </ContributeStyle>
            </li>
        )
    })
}

export default Contribute
