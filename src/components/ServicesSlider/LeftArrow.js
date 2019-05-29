/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import styled from '@emotion/styled'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons'

const SliderLeftArrowStyle = styled.div`
    position: absolute;
    top: 50%;
    left: 5%;
    z-index: 999;
    color: rgb(190, 155, 123);
    background: #fff;
    border-radius: 50%;
    font-size: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`

const LeftArrow = props => {
    return (
        <SliderLeftArrowStyle
            className="slider-left-arrow"
            onClick={props.onClick}
        >
            <FontAwesomeIcon icon={faChevronCircleLeft} className="fa-spin" />
        </SliderLeftArrowStyle>
    )
}

export default LeftArrow
