/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import {Carousel} from 'react-responsive-carousel'
import styled from 'styled-components'
import Image from 'gatsby-image'
import fullStackJS from '../../data/services/fsjs'
import devWorkflows from '../../data/services/dev-workflows'
import gitForDevs from '../../data/services/gfd'
import gitForNonDevs from '../../data/services/gfnd'
import commandControl from '../../data/services/cli'

const SlideDiv = styled.div`
    width: 97.5%;
    margin: 0 auto;
    & h2,
    & p {
        cursor: pointer;
    }
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
                        <Carousel
                            showArrows={true}
                            showThumbs={false}
                            showStatus={true}
                        >
                            <SlideDiv
                                as="div"
                                title={`A visualization of various ${
                                    fullStackJS.title
                                } Services offered by us to make the visit to this site more fun!`}
                            >
                                <h2
                                    style={{
                                        color: 'rgb(167,19,138)',
                                        fontWeight: '400',
                                    }}
                                    title={`the title for the ${
                                        fullStackJS.title
                                    } Service carousel slide`}
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
                                        color: 'rgb(167,19,138)',
                                        marginTop: '0.5rem',
                                        marginBottom: '1.75rem',
                                    }}
                                    title={`the short description for the ${
                                        fullStackJS.title
                                    } Service carousel slide`}
                                >
                                    {fullStackJS.shortDescription}
                                </p>
                            </SlideDiv>
                            <SlideDiv
                                as="div"
                                title={`A visualization of various ${
                                    devWorkflows.title
                                } Services offered by us to make the visit to this site more fun!`}
                            >
                                <h2
                                    style={{
                                        color: 'rgb(167,19,138)',
                                        fontWeight: '400',
                                    }}
                                    title={`the title for the ${
                                        devWorkflows.title
                                    } Service carousel slide`}
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
                                        color: 'rgb(167,19,138)',
                                    }}
                                    title={`the short description for the ${
                                        devWorkflows.title
                                    } Service carousel slide`}
                                >
                                    {devWorkflows.shortDescription}
                                </p>
                            </SlideDiv>
                            <SlideDiv
                                as="div"
                                title={`A visualization of various ${
                                    gitForDevs.title
                                } Services offered by us to make the visit to this site more fun!`}
                            >
                                <h2
                                    style={{
                                        color: 'rgb(167,19,138)',
                                        fontWeight: '400',
                                    }}
                                    title={`the title for the ${
                                        gitForDevs.title
                                    } Service carousel slide`}
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
                                        color: 'rgb(167,19,138)',
                                    }}
                                    title={`the short description for the ${
                                        gitForDevs.title
                                    } Service carousel slide`}
                                >
                                    {gitForDevs.shortDescription}
                                </p>
                            </SlideDiv>
                            <SlideDiv
                                as="div"
                                title={`A visualization of various ${
                                    gitForNonDevs.title
                                } Services offered by us to make the visit to this site more fun!`}
                            >
                                <h2
                                    style={{
                                        color: 'rgb(167,19,138)',
                                        fontWeight: '400',
                                    }}
                                    title={`the title for the ${
                                        gitForNonDevs.title
                                    } Service carousel slide`}
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
                                        color: 'rgb(167,19,138)',
                                    }}
                                    title={`the short description for the ${
                                        gitForNonDevs.title
                                    } Service carousel slide`}
                                >
                                    {gitForNonDevs.shortDescription}
                                </p>
                            </SlideDiv>
                            <SlideDiv
                                as="div"
                                title={`A visualization of ${
                                    commandControl.title
                                } Services offered by us to make the visit to this site more fun!`}
                            >
                                <h2
                                    style={{
                                        color: 'rgb(167,19,138)',
                                        fontWeight: '400',
                                    }}
                                    title={`the title for the ${
                                        commandControl.title
                                    } Service carousel slide`}
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
                                        color: 'rgb(167,19,138)',
                                    }}
                                    title={`the short description for the ${
                                        commandControl.title
                                    } Service carousel slide`}
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
        imageOne: file(relativePath: {eq: "services/fullstack.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        imageTwo: file(
            relativePath: {eq: "services/martin-w-kirst-1175656-unsplash.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        imageThree: file(
            relativePath: {eq: "services/mimi-thian-737711-unsplash.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        imageFour: file(
            relativePath: {eq: "services/eddy-klaus-33079-unsplash.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        imageFive: file(
            relativePath: {eq: "services/austin-neill-189146-unsplash.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
