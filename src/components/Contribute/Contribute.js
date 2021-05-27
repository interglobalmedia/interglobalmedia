import React from 'react'
import {ContributeStyle} from '../../exports/named-exports'

const Contribute = () => {
    return [
        {
            id: 1,
            url: `https://www.mariadcampbell.com`,
            targetContent: '_new',
            relContent: 'noopener noreferrer',
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
                    as="a"
                    href={contribute.url}
                    target={contribute.targetContent}
                    rel={contribute.relContent}
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
