/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import styled from '@emotion/styled'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'

const SliderRightArrowStyle = styled.div`
    position: absolute;
    top: 50%;
    right: 5%;
    z-index: 999;
    color: rgb(190, 155, 123);
    background: #fff;
    border-radius: 50%;
    font-size: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const RightArrow = props => {
    return (
        <SliderRightArrowStyle
            onClick={props.onClick}
            className="slider-right-arrow"
        >
            <FontAwesomeIcon icon={faChevronCircleRight} className="fa-spin" />
        </SliderRightArrowStyle>
    )
}

export default RightArrow
