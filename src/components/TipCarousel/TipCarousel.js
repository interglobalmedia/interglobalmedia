import React from 'react'
import styled from '@emotion/styled'
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
    & h2 {
        color: rgb(25, 13, 8);
    }
    & p {
        margin-top: 0.5rem;
        margin-bottom: 1.75rem;
        color: #a7138a;
    }
`

const TipCarousel = () => {
    return (
        <div style={{margin: '0 auto 6rem'}}>
            <Carousel showThumbs={false} showIndicators={false}>
                <TipDiv>
                    <h2>Tip of the Day #1</h2>
                    <p>
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
            </Carousel>
        </div>
    )
}

export default TipCarousel
