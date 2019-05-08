import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'

const PrevNextUl = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin-right: 1rem;
    width: 100%;
    margin-left: 0;
    & a {
        color: rgba(216, 132, 46, 1);
        box-shadow: none;
    }
`

const PrevNext = props => {
    const {prev, next} = props
    return (
        <PrevNextUl>
            {prev && (
                <li>
                    <Link to={prev.fields.slug}>
                        ← Newer <br />
                    </Link>
                </li>
            )}
            {next && (
                <li>
                    <Link to={next.fields.slug}>
                        Older → <br />
                    </Link>
                </li>
            )}
        </PrevNextUl>
    )
}

export default PrevNext
