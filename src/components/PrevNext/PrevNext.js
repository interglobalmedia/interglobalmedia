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
`

const PrevNext = props => {
    const {prev, next} = props
    return (
        <PrevNextUl>
            {prev && (
                <li>
                    <Link
                        to={prev.fields.slug}
                        style={{
                            color: 'rgba(216,132,46, 1)',
                            boxShadow: 'none',
                        }}
                    >
                        ← Newer <br />
                    </Link>
                </li>
            )}
            {next && (
                <li>
                    <Link
                        to={next.fields.slug}
                        style={{
                            color: 'rgba(216,132,46, 1)',
                            boxShadow: 'none',
                        }}
                    >
                        Older → <br />
                    </Link>
                </li>
            )}
        </PrevNextUl>
    )
}

export default PrevNext
