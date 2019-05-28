/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import styled from '@emotion/styled'

const StyleLi = styled.li`
    list-style-type: none;
    & a {
        margin-right: 1rem;
    }
    & :first-of-type {
        margin-left: -0.5rem;
    }
`

const ServicesSlideIndicator = props => {
    return (
        <StyleLi>
            <a
                className={
                    props.index === props.activeIndex
                        ? 'slide-indicator slide-indicator-active'
                        : 'slide-indicator'
                }
                onClick={props.onClick}
            />
        </StyleLi>
    )
}

export default ServicesSlideIndicator
