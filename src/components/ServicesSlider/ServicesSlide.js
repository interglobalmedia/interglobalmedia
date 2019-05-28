import React, {Component} from 'react'
import styled from '@emotion/styled'

const SlideStyle = styled.div`
    width: 100%;
    & h3 {
        white-space: normal;
        font-weight: 400;
        margin-left: -0.75rem;
        word-wrap: break-word;
        text-align: center;
        width: 100%;
    }
    & p {
        white-space: normal;
        color: rgb(163, 74, 40);
        margin-left: -0.75rem;
        word-wrap: break-word;
        width: 100%;
    }
`

const SlideSrcStyle = styled.img`
    width: 100%;
    height: 400px;
    display: flex;
    margin-left: -0.75rem;
`

const Slide = props => {
    return (
        <SlideStyle
            className={
                props.index === props.activeIndex
                    ? 'slide slide-active'
                    : 'slide'
            }
        >
            <h3>{props.slide.title}</h3>
            <SlideSrcStyle
                className="slide-src"
                src={props.slide.image}
                alt={props.title}
            />
            <p>{props.slide.shortDescription}</p>
        </SlideStyle>
    )
}

export default Slide
