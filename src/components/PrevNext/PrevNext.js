import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'

const PrevNextUl = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    width: 100%;
    margin-right: 1rem;
    margin-left: 0;
    margin-top: 1.5rem;
`

const PrevNext = props => {
    const {prev, next} = props
    return (
        <PrevNextUl>
            {prev && (
                <li>
                    <Link
                        to={prev.fields.slug}
                        title={`visit link to newer post to read more recent content`}
                    >
                        ← Newer <br />
                    </Link>
                </li>
            )}
            {next && (
                <li>
                    <Link
                        to={next.fields.slug}
                        title={`visit link to older post to read older content`}
                    >
                        Older → <br />
                    </Link>
                </li>
            )}
        </PrevNextUl>
    )
}

export default PrevNext
