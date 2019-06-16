import React from 'react'
import styled from 'styled-components'
import {Carousel} from 'react-responsive-carousel'

const TipDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    margin: 3rem auto;
    background: rgba(235, 181, 135, 0.7);
    padding: 1.5rem;
    border: 6px solid rgba(235, 181, 135, 0.7);
    & h2,
    & p {
        color: rgb(25, 13, 8);
    }
    & p {
        margin-top: 0.5rem;
        margin-bottom: 1.75rem;
    }
`

const DevStrong = styled.strong`
    color: rgb(25, 13, 8);
`

const TipCarousel = () => {
    return (
        <div style={{margin: '0 auto 6rem'}}>
            <Carousel showThumbs={false} showIndicators={false}>
                <TipDiv>
                    <h2>Tip of the Day #1</h2>
                    <p>
                        <DevStrong>GatsbyJS Devs:</DevStrong>{' '}
                        <strong>
                            <i>Don't use</i>
                        </strong>{' '}
                        the <strong>state prop (props.location.state)</strong>.
                        It{' '}
                        <strong>
                            <i>may</i>
                        </strong>{' '}
                        <strong>pass</strong> a <strong>Lighthouse</strong>{' '}
                        audit. It may{' '}
                        <strong>
                            <i>seem</i>
                        </strong>{' '}
                        like a really cool "shortcut" to creating pages, but it
                        will{' '}
                        <strong>
                            <i>kill</i>
                        </strong>{' '}
                        you in <strong>Search</strong>.
                    </p>
                </TipDiv>
                <TipDiv>
                    <h2>Tip of the Day #2</h2>
                    <p>
                        If you are{' '}
                        <strong>
                            <i>offering a course</i>
                        </strong>
                        , make sure that it is <strong>updated</strong> to the{' '}
                        <strong>latest</strong> of whatever. Don't just create
                        it and then forget about it while still offering it (for
                        a hefty price).
                    </p>
                </TipDiv>
                <TipDiv>
                    <h2>Tip of the Day #3</h2>
                    <p>
                        <strong>Gatsby Devs:</strong> don't use{' '}
                        <strong>
                            <i>@emotion/core</i>
                        </strong>{' '}
                        and
                        <strong>
                            {' '}
                            <i>@emotion/styled 10+</i>
                        </strong>{' '}
                        with <strong>GatsbyJs 2</strong>. Too many breaking
                        changes that only complicate matters and also
                        incompatible out of the box. Use{' '}
                        <strong>styled-components</strong> instead.
                    </p>
                </TipDiv>
                <TipDiv>
                    <h2>Tip of the Day #4</h2>
                    <p>
                        <strong>styled-components 4+</strong>{' '}
                        <strong>
                            are <i>not</i>
                        </strong>{' '}
                        <srong>completely compatible</srong> with{' '}
                        <strong>GatsbyJS 2</strong>. A source-map{' '}
                        <strong>
                            <i>hack</i>
                        </strong>{' '}
                        is needed in <strong>gatsby-node.js</strong>.{' '}
                        <strong>
                            <i>Not</i>
                        </strong>{' '}
                        completely <strong>cross-browser compatible</strong>{' '}
                        either.
                    </p>
                </TipDiv>
            </Carousel>
        </div>
    )
}

export default TipCarousel
