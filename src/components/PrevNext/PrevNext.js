import React from 'react'
import {Link} from 'gatsby'

import {PrevNextUl} from '../../exports/named-exports'

const PrevNext = props => {
    const {prev, next} = props
    return (
        <PrevNextUl as="ul">
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
