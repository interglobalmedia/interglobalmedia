import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'

import {CarouselWrapper, TipDiv} from '../../exports/named-exports'

const TipCarousel = () => {
    return (
        <CarouselWrapper as="div">
            <Carousel showThumbs={false} showIndicators={false}>
                <TipDiv as="div">
                    <h2>Tip of the Day #1</h2>
                    <p>
                        <strong>GatsbyJS Devs:</strong>{' '}
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
                <TipDiv as="div">
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
                <TipDiv as="div">
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
                <TipDiv as="div">
                    <h2>Tip of the Day #4</h2>
                    <p>
                        <strong>Gatsby Devs:</strong> don't use the
                        <strong>
                            <i> iframe tag</i>
                        </strong>{' '}
                        in your
                        <strong>
                            {' '}
                            <i>
                                <strong>dangerouslySetInnerHTML</strong>
                            </i>
                        </strong>{' '}
                        with <strong>GatsbyJS</strong>. It won't work, and
                        probably a bad idea anyway. Use it in your{' '}
                        <strong>
                            <i>component</i>
                        </strong>
                        .
                    </p>
                </TipDiv>
                <TipDiv as="div">
                    <h2>Tip of the Day #5</h2>
                    <p>
                        Going <strong>serverless</strong> does not mean going{' '}
                        <strong>"databaseless"</strong>.
                    </p>
                </TipDiv>
                <TipDiv as="div">
                    <h2>Tip of the Day #6</h2>
                    <p>
                        Going <strong>serverless</strong> with a{' '}
                        <strong>backend serverless database</strong> does not
                        necessarily mean your app is much more secure.
                    </p>
                </TipDiv>
                <TipDiv as="div">
                    <h2>Tip of the Day #7</h2>
                    <p>
                        if you don't use a tool often and tend to forget a step,
                        set a <strong>daily reminder </strong> to{' '}
                        <strong>remember</strong> it until you get it down.
                    </p>
                </TipDiv>
            </Carousel>
        </CarouselWrapper>
    )
}

export default TipCarousel
