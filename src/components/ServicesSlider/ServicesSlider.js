import React, {Component} from 'react'
import styled from '@emotion/styled'
import ServicesSlide from './ServicesSlide'
import ServicesSlideIndicator from './ServicesSlideIndicator'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import '../../style/style.scss'

const SliderStyle = styled.div`
    position: relative;
    background-position: center center;
    height: auto;
    white-space: nowrap;
    display: block;
`
const SlideIndicatorsStyle = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
`

class Slider extends Component {
    state = {
        activeIndex: 0,
    }
    goToSlide = index => {
        this.setState({
            activeIndex: index,
        })
    }
    goToNextSlide = e => {
        e.preventDefault()
        let index = this.state.activeIndex
        let {slides} = this.props
        let slidesLength = slides.length - 1

        if (index === slidesLength) {
            index = -1
        }
        ++index
        this.setState({
            activeIndex: index,
        })
    }
    goToPrevSlide = e => {
        e.preventDefault()
        let index = this.state.activeIndex
        let {slides} = this.props
        let slidesLength = slides.length

        if (index < 1) {
            index = slidesLength
        }
        --index
        this.setState({
            activeIndex: index,
        })
    }
    render() {
        return (
            <SliderStyle className="image-slider">
                <LeftArrow onClick={e => this.goToPrevSlide(e)} />
                <ul className="slides">
                    {this.props.slides.map((slide, index) => (
                        <ServicesSlide
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            slide={slide}
                        />
                    ))}
                </ul>
                <RightArrow onClick={e => this.goToNextSlide(e)} />
                <SlideIndicatorsStyle className="side-indicators">
                    {this.props.slides.map((slide, index) => (
                        <ServicesSlideIndicator
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            onClick={e => this.goToSlide(index)}
                        />
                    ))}
                </SlideIndicatorsStyle>
            </SliderStyle>
        )
    }
}

export default Slider
