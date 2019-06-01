/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import {Carousel} from 'react-responsive-carousel'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import fullStackJS from '../../data/fsjs'
import devWorkflows from '../../data/dev-workflows'
import gitForDevs from '../../data/gfd'
import gitForNonDevs from '../../data/gfnd'
import commandControl from '../../data/cli'
import '../../style/style.scss'

const SlideDiv = styled.div`
    width: 97.5%;
    margin: 0 auto;
    @media (min-width: 990px) {
        width: 90%;
    }
`

const ServicesCarousel = () => {
    return (
        <StaticQuery
            query={carouselQuery}
            render={data => {
                return (
                    <div>
                        <Carousel showArrows={true} showThumbs={false}>
                            <SlideDiv>
                                <h2
                                    style={{
                                        color: 'rgb(93,20,14)',
                                        fontWeight: '400',
                                    }}
                                >
                                    {fullStackJS.title}
                                </h2>
                                <Image
                                    fluid={data.imageOne.childImageSharp.fluid}
                                    alt={fullStackJS.title}
                                    style={{
                                        height: '400px',
                                    }}
                                />
                                <p
                                    style={{
                                        color: 'rgb(227,71,153)',
                                        marginTop: '0.5rem',
                                        marginBottom: '1.75rem',
                                    }}
                                >
                                    {fullStackJS.shortDescription}
                                </p>
                            </SlideDiv>
                            <SlideDiv>
                                <h2
                                    style={{
                                        color: 'rgb(93,20,14)',
                                        fontWeight: '400',
                                    }}
                                >
                                    {devWorkflows.title}
                                </h2>
                                <Image
                                    fluid={data.imageTwo.childImageSharp.fluid}
                                    style={{
                                        height: '400px',
                                    }}
                                />
                                <p
                                    style={{
                                        marginTop: '0.5rem',
                                        marginBottom: '1.75rem',
                                        color: 'rgb(227,71,153)',
                                    }}
                                >
                                    {devWorkflows.shortDescription}
                                </p>
                            </SlideDiv>
                            <SlideDiv>
                                <h2
                                    style={{
                                        color: 'rgb(93,20,14)',
                                        fontWeight: '400',
                                    }}
                                >
                                    {gitForDevs.title}
                                </h2>
                                <Image
                                    fluid={
                                        data.imageThree.childImageSharp.fluid
                                    }
                                    style={{
                                        height: '400px',
                                    }}
                                />
                                <p
                                    style={{
                                        marginTop: '0.5rem',
                                        marginBottom: '1.75rem',
                                        color: 'rgb(227,71,153)',
                                    }}
                                >
                                    {gitForDevs.shortDescription}
                                </p>
                            </SlideDiv>
                            <SlideDiv>
                                <h2
                                    style={{
                                        color: 'rgb(93,20,14)',
                                        fontWeight: '400',
                                    }}
                                >
                                    {gitForNonDevs.title}
                                </h2>
                                <Image
                                    fluid={data.imageFour.childImageSharp.fluid}
                                    style={{
                                        height: '400px',
                                    }}
                                />
                                <p
                                    style={{
                                        marginTop: '0.5rem',
                                        marginBottom: '1.75rem',
                                        color: 'rgb(227,71,153)',
                                    }}
                                >
                                    {gitForNonDevs.shortDescription}
                                </p>
                            </SlideDiv>
                            <SlideDiv>
                                <h2
                                    style={{
                                        color: 'rgb(93,20,14)',
                                        fontWeight: '400',
                                    }}
                                >
                                    {commandControl.title}
                                </h2>
                                <Image
                                    fluid={data.imageFive.childImageSharp.fluid}
                                    style={{
                                        height: '400px',
                                    }}
                                />
                                <p
                                    style={{
                                        marginTop: '0.5rem',
                                        marginBottom: '1.75rem',
                                        color: 'rgb(227,71,153)',
                                    }}
                                >
                                    {commandControl.shortDescription}
                                </p>
                            </SlideDiv>
                        </Carousel>
                    </div>
                )
            }}
        />
    )
}

export default ServicesCarousel

export const carouselQuery = graphql`
    query carouselQuery {
        imageOne: file(relativePath: {eq: "fullstack.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        imageTwo: file(
            relativePath: {eq: "martin-w-kirst-1175656-unsplash.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        imageThree: file(relativePath: {eq: "mimi-thian-737711-unsplash.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        imageFour: file(relativePath: {eq: "eddy-klaus-33079-unsplash.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        imageFive: file(
            relativePath: {eq: "austin-neill-189146-unsplash.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
