import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../../components/Layout/Layout'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import SEO from '../../components/Seo/Seo'
import speechToTextData from '../../data/portfolio/1_speech-to-text'
import theGrooveData from '../../data/portfolio/2_welcome-to-the-groove'
import rockinSynthData from '../../data/portfolio/3_rockin-synth'
import catWhispererData from '../../data/portfolio/4_cat-whisperer-app'
import trumpTalksData from '../../data/portfolio/5_trump-talks-trash'
import chattrboxData from '../../data/portfolio/6_node-chat-app'
import nodeDrawingData from '../../data/portfolio/7_node-drawing-app'

export const ColumnsDiv = styled.div`
    width: 90%;
    margin: 3rem auto;
    display: grid;
    @media (min-width: 990px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`

export const ProjectUl = styled.div`
    width: 90%;
    max-width: 1026px;
    margin: 1rem auto;
    list-style-type: none;
    & a {
        box-shadow: none !important;
        color: rgb(39, 74, 169);
    }
    & a:hover {
        text-decoration: underline;
    }
    & li:last-child {
        margin-top: 0.5rem;
    }
    @media (min-width: 990px) {
        margin: 0.5rem auto;
    }
`

export const ProjectTitleLi = styled.li`
    font-size: 1.1rem;
`

export const ImgStyle = styled.img`
    max-width: 800px;
    width: 100%;
`

export const ParaStyle = styled.p`
    width: 100%;
    max-width: 800px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: flex-start;
    color: rgb(88, 86, 86);
`

export const SpanStyle = styled.span`
    color: rgb(148, 75, 43);
`

const MoreP = styled.p`
    font-size: 1.1rem;
`

const PortfolioIndex = props => {
    const title = props.data.site.siteMetadata.title
    const keywords = props.data.site.siteMetadata.keywords
    return (
        <Layout>
            <SEO location={props.location} title={title} keywords={keywords} />
            <ColumnsDiv>
                <ProjectUl key={speechToTextData.id}>
                    <ProjectTitleLi>
                        <Link
                            to={'/portfolio/portfolio-view-1'}
                            state={speechToTextData}
                            key={speechToTextData.id}
                        >
                            {speechToTextData.title}
                        </Link>
                    </ProjectTitleLi>
                    <Img
                        fluid={
                            props.data.portfolioImageOne.childImageSharp.fluid
                        }
                        alt={speechToTextData.title}
                        key={speechToTextData.id}
                    />
                    <br />
                    <ParaStyle>{speechToTextData.shortDescription}</ParaStyle>
                    <SpanStyle>{speechToTextData.tags}</SpanStyle>
                    <br />
                    <li>
                        <Link
                            to={'/portfolio/portfolio-view-1'}
                            state={speechToTextData}
                            key={speechToTextData.title}
                        >
                            <MoreP>view more</MoreP>
                        </Link>
                    </li>
                </ProjectUl>
                <ProjectUl>
                    <ProjectTitleLi>
                        <Link
                            to={'/portfolio/portfolio-view-2'}
                            state={theGrooveData}
                            key={theGrooveData.id}
                        >
                            {theGrooveData.title}
                        </Link>
                    </ProjectTitleLi>
                    <Img
                        fluid={
                            props.data.portfolioImageTwo.childImageSharp.fluid
                        }
                        alt={theGrooveData.title}
                        key={theGrooveData.id}
                    />
                    <br />
                    <ParaStyle>{theGrooveData.shortDescription}</ParaStyle>
                    <SpanStyle>{theGrooveData.tags}</SpanStyle>
                    <br />
                    <li>
                        <Link
                            to={'/portfolio/portfolio-view-2'}
                            state={theGrooveData}
                            key={theGrooveData.title}
                        >
                            <MoreP>view more</MoreP>
                        </Link>
                    </li>
                </ProjectUl>
                <ProjectUl>
                    <ProjectTitleLi>
                        <Link
                            to={'/portfolio/portfolio-view-3'}
                            state={rockinSynthData}
                            key={theGrooveData.id}
                        >
                            {rockinSynthData.title}
                        </Link>
                    </ProjectTitleLi>
                    <Img
                        fluid={
                            props.data.portfolioImageThree.childImageSharp.fluid
                        }
                        alt={rockinSynthData.title}
                        key={rockinSynthData.id}
                    />
                    <br />
                    <ParaStyle>{rockinSynthData.shortDescription}</ParaStyle>
                    <SpanStyle>{rockinSynthData.tags}</SpanStyle>
                    <br />
                    <li>
                        <Link
                            to={'/portfolio/portfolio-view-3'}
                            state={rockinSynthData}
                            key={rockinSynthData.title}
                        >
                            <MoreP>view more</MoreP>
                        </Link>
                    </li>
                </ProjectUl>
                <ProjectUl>
                    <ProjectTitleLi>
                        <Link
                            to={'/portfolio/portfolio-view-4'}
                            state={catWhispererData}
                            key={catWhispererData.id}
                        >
                            {catWhispererData.title}
                        </Link>
                    </ProjectTitleLi>
                    <Img
                        fluid={
                            props.data.portfolioImageFour.childImageSharp.fluid
                        }
                        alt={catWhispererData.title}
                        key={catWhispererData.id}
                    />
                    <br />
                    <ParaStyle>{catWhispererData.shortDescription}</ParaStyle>
                    <SpanStyle>{catWhispererData.tags}</SpanStyle>
                    <br />
                    <li>
                        <Link
                            to={'/portfolio/portfolio-view-4'}
                            state={catWhispererData}
                            key={catWhispererData.title}
                        >
                            <MoreP>view more</MoreP>
                        </Link>
                    </li>
                </ProjectUl>
                <ProjectUl>
                    <ProjectTitleLi>
                        <Link
                            to={'/portfolio/portfolio-view-5'}
                            state={trumpTalksData}
                            key={trumpTalksData.id}
                        >
                            {trumpTalksData.title}
                        </Link>
                    </ProjectTitleLi>
                    <Img
                        fluid={
                            props.data.portfolioImageFive.childImageSharp.fluid
                        }
                        alt={trumpTalksData.title}
                        key={trumpTalksData.id}
                    />
                    <br />
                    <ParaStyle>{trumpTalksData.shortDescription}</ParaStyle>
                    <SpanStyle>{trumpTalksData.tags}</SpanStyle>
                    <br />
                    <li>
                        <Link
                            to={'/portfolio/portfolio-view-5'}
                            state={trumpTalksData}
                            key={trumpTalksData.title}
                        >
                            <MoreP>view more</MoreP>
                        </Link>
                    </li>
                </ProjectUl>
                <ProjectUl>
                    <ProjectTitleLi>
                        <Link
                            to={'/portfolio/portfolio-view-6'}
                            state={chattrboxData}
                            key={chattrboxData.id}
                        >
                            {chattrboxData.title}
                        </Link>
                    </ProjectTitleLi>
                    <Img
                        fluid={
                            props.data.portfolioImageSix.childImageSharp.fluid
                        }
                        alt={chattrboxData.title}
                        key={chattrboxData.id}
                    />
                    <br />
                    <ParaStyle>{chattrboxData.shortDescription}</ParaStyle>
                    <SpanStyle>{chattrboxData.tags}</SpanStyle>
                    <br />
                    <li>
                        <Link
                            to={'/portfolio/portfolio-view-6'}
                            state={chattrboxData}
                            key={chattrboxData.title}
                        >
                            <MoreP>view more</MoreP>
                        </Link>
                    </li>
                </ProjectUl>
                <ProjectUl>
                    <ProjectTitleLi>
                        <Link
                            to={'/portfolio/portfolio-view-7'}
                            state={nodeDrawingData}
                            key={nodeDrawingData.id}
                        >
                            {nodeDrawingData.title}
                        </Link>
                    </ProjectTitleLi>
                    <Img
                        fluid={
                            props.data.portfolioImageSeven.childImageSharp.fluid
                        }
                        alt={nodeDrawingData.title}
                        key={nodeDrawingData.id}
                    />
                    <br />
                    <ParaStyle>{nodeDrawingData.shortDescription}</ParaStyle>
                    <SpanStyle>{nodeDrawingData.tags}</SpanStyle>
                    <br />
                    <li>
                        <Link
                            to={'/portfolio/portfolio-view-7'}
                            state={nodeDrawingData}
                            key={nodeDrawingData.title}
                        >
                            <MoreP>view more</MoreP>
                        </Link>
                    </li>
                </ProjectUl>
            </ColumnsDiv>
        </Layout>
    )
}

export default PortfolioIndex

export const indexQuery = graphql`
    query indexQuery {
        site {
            siteMetadata {
                title
                keywords
            }
        }
        portfolioImageOne: file(
            relativePath: {eq: "projects/speech-to-text.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        portfolioImageTwo: file(
            relativePath: {eq: "projects/welcome-to-the-groove.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        portfolioImageThree: file(
            relativePath: {eq: "projects/rockin-synth.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        portfolioImageFour: file(
            relativePath: {eq: "projects/cat-whisperer-app.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        portfolioImageFive: file(
            relativePath: {eq: "projects/trump-talks.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        portfolioImageSix: file(relativePath: {eq: "projects/chatterbox.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        portfolioImageSeven: file(
            relativePath: {eq: "projects/node-collaborative-drawing-app.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
