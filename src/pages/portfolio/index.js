import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../../components/Layout/Layout'
import Img from 'gatsby-image'
import SEO from '../../components/Seo/Seo'
import speechToTextData from '../../data/portfolio/1_speech-to-text'
import theGrooveData from '../../data/portfolio/2_welcome-to-the-groove'
import rockinSynthData from '../../data/portfolio/3_rockin-synth'
import catWhispererData from '../../data/portfolio/4_cat-whisperer-app'
import trumpTalksData from '../../data/portfolio/5_trump-talks-trash'
import chattrboxData from '../../data/portfolio/6_node-chat-app'
import nodeDrawingData from '../../data/portfolio/7_node-drawing-app'
import webAudioApiAjaxData from '../../data/portfolio/8_web-audio-api-ajax'
import omdbApiNodejsData from '../../data/portfolio/9_omdb_api_nodejs'
import customHTML5VideoData from '../../data/portfolio/10_custom_html5_video_player'
import musicInBrowserData from '../../data/portfolio/11_making_music_in_browser'
import weatherAppNodejsData from '../../data/portfolio/12_weather_app_nodejs_server'
import guessTheKeysData from '../../data/portfolio/13_guess_the_keys'

import {
    ColumnsDiv,
    ProjectUl,
    ProjectTitleLi,
    ParaStyle,
    PortfolioSpanStyle,
    MoreP,
} from '../../exports/named-exports'

const PortfolioIndex = props => {
    const title = props.data.site.siteMetadata.title
    const keywords = props.data.site.siteMetadata.keywords
    return (
        <Layout>
            <SEO location={props.location} title={title} keywords={keywords} />
            <ColumnsDiv as="div">
                <ProjectUl as="ul" key={guessTheKeysData.id}>
                    <ProjectTitleLi as="li">
                        <Link
                            to={'/portfolio/portfolio-view-13'}
                            title={`visit the link to the ${guessTheKeysData.title} app page to learn more`}
                        >
                            {guessTheKeysData.title}
                        </Link>
                    </ProjectTitleLi>
                    <Img
                        fluid={
                            props.data.portfolioImageThirteen.childImageSharp.fluid
                        }
                        alt={guessTheKeysData.title}
                    />
                    <br />
                    <ParaStyle as="p">
                        {guessTheKeysData.shortDescription}
                    </ParaStyle>
                    <PortfolioSpanStyle as="span">
                        {guessTheKeysData.tags}
                    </PortfolioSpanStyle>
                    <br />
                    <li>
                        <Link
                            to={'/portfolio/portfolio-view-13'}
                            title={`visit the link to the ${guessTheKeysData.title} app page to learn more`}
                        >
                            <MoreP as="p">view more</MoreP>
                        </Link>
                    </li>
                </ProjectUl>
                <ProjectUl as="ul" key={weatherAppNodejsData.id}>
                    <ProjectTitleLi as="li">
                        <Link
                            to={'/portfolio/portfolio-view-12'}
                            title={`visit the link to the ${weatherAppNodejsData.title} app page to learn more`}
                        >
                            {weatherAppNodejsData.title}
                        </Link>
                    </ProjectTitleLi>
                    <Img
                        fluid={
                            props.data.portfolioImageTwelve.childImageSharp.fluid
                        }
                        alt={weatherAppNodejsData.title}
                    />
                    <br />
                    <ParaStyle as="p">
                        {weatherAppNodejsData.shortDescription}
                    </ParaStyle>
                    <PortfolioSpanStyle as="span">
                        {weatherAppNodejsData.tags}
                    </PortfolioSpanStyle>
                    <br />
                    <li>
                        <Link
                            to={'/portfolio/portfolio-view-12'}
                            title={`visit the link to the ${weatherAppNodejsData.title} app page to learn more`}
                        >
                            <MoreP as="p">view more</MoreP>
                        </Link>
                    </li>
                </ProjectUl>
                <ProjectUl as="ul" key={musicInBrowserData.id}>
                    <ProjectTitleLi as="li">
                        <Link
                            to={'/portfolio/portfolio-view-11'}
                            title={`visit the link to the ${musicInBrowserData.title} app page to learn more`}
                        >
                            {musicInBrowserData.title}
                        </Link>
                    </ProjectTitleLi>
                    <Img
                        fluid={
                            props.data.portfolioImageEleven.childImageSharp.fluid
                        }
                        alt={musicInBrowserData.title}
                    />
                    <br />
                    <ParaStyle as="p">
                        {musicInBrowserData.shortDescription}
                    </ParaStyle>
                    <PortfolioSpanStyle as="span">
                        {musicInBrowserData.tags}
                    </PortfolioSpanStyle>
                    <br />
                    <li>
                        <Link
                            to={'/portfolio/portfolio-view-11'}
                            title={`visit the link to the ${musicInBrowserData.title} app page to learn more`}
                        >
                            <MoreP as="p">view more</MoreP>
                        </Link>
                    </li>
                </ProjectUl>
                <ProjectUl as="ul" key={customHTML5VideoData.id}>
                    <ProjectTitleLi as="li">
                        <Link
                            to={'/portfolio/portfolio-view-10'}
                            title={`visit the link to the ${customHTML5VideoData.title} app page to learn more`}
                        >
                            {customHTML5VideoData.title}
                        </Link>
                    </ProjectTitleLi>
                    <Img
                        fluid={
                            props.data.portfolioImageTen.childImageSharp.fluid
                        }
                        alt={customHTML5VideoData.title}
                    />
                    <br />
                    <ParaStyle as="p">
                        {customHTML5VideoData.shortDescription}
                    </ParaStyle>
                    <PortfolioSpanStyle as="span">
                        {customHTML5VideoData.tags}
                    </PortfolioSpanStyle>
                    <br />
                    <li>
                        <Link
                            to={'/portfolio/portfolio-view-10'}
                            title={`visit the link to the ${customHTML5VideoData.title} app page to learn more`}
                        >
                            <MoreP as="p">view more</MoreP>
                        </Link>
                    </li>
                </ProjectUl>
                <ProjectUl as="ul" key={omdbApiNodejsData.id}>
                    <ProjectTitleLi as="li">
                        <Link
                            to={'/portfolio/portfolio-view-9'}
                            title={`visit the link to the ${omdbApiNodejsData.title} app page to learn more`}
                        >
                            {omdbApiNodejsData.title}
                        </Link>
                    </ProjectTitleLi>
                    <Img
                        fluid={
                            props.data.portfolioImageNine.childImageSharp.fluid
                        }
                        alt={omdbApiNodejsData.title}
                    />
                    <br />
                    <ParaStyle as="p">
                        {omdbApiNodejsData.shortDescription}
                    </ParaStyle>
                    <PortfolioSpanStyle as="span">
                        {omdbApiNodejsData.tags}
                    </PortfolioSpanStyle>
                    <br />
                    <li>
                        <Link
                            to={'/portfolio/portfolio-view-9'}
                            title={`visit the link to the ${omdbApiNodejsData.title} app page to learn more`}
                        >
                            <MoreP as="p">view more</MoreP>
                        </Link>
                    </li>
                </ProjectUl>
                <ProjectUl as="ul" key={webAudioApiAjaxData.id}>
                    <ProjectTitleLi as="li">
                        <Link
                            to={'/portfolio/portfolio-view-8'}
                            title={`visit the link to the ${webAudioApiAjaxData.title} app page to learn more`}
                        >
                            {webAudioApiAjaxData.title}
                        </Link>
                    </ProjectTitleLi>
                    <Img
                        fluid={
                            props.data.portfolioImageEight.childImageSharp.fluid
                        }
                        alt={webAudioApiAjaxData.title}
                    />
                    <br />
                    <ParaStyle as="p">
                        {webAudioApiAjaxData.shortDescription}
                    </ParaStyle>
                    <PortfolioSpanStyle as="span">
                        {webAudioApiAjaxData.tags}
                    </PortfolioSpanStyle>
                    <br />
                    <li>
                        <Link
                            to={'/portfolio/portfolio-view-8'}
                            title={`visit the link to the ${webAudioApiAjaxData.title} app page to learn more`}
                        >
                            <MoreP as="p">view more</MoreP>
                        </Link>
                    </li>
                </ProjectUl>
                <ProjectUl as="ul" key={nodeDrawingData.id}>
                    <ProjectTitleLi as="li">
                        <Link
                            to={'/portfolio/portfolio-view-7'}
                            title={`visit the link to the ${nodeDrawingData.title} app page to learn more`}
                        >
                            {nodeDrawingData.title}
                        </Link>
                    </ProjectTitleLi>
                    <Img
                        fluid={
                            props.data.portfolioImageSeven.childImageSharp.fluid
                        }
                        alt={nodeDrawingData.title}
                    />
                    <br />
                    <ParaStyle as="p">
                        {nodeDrawingData.shortDescription}
                    </ParaStyle>
                    <PortfolioSpanStyle as="span">
                        {nodeDrawingData.tags}
                    </PortfolioSpanStyle>
                    <br />
                    <li>
                        <Link
                            to={'/portfolio/portfolio-view-7'}
                            title={`visit the link to the ${nodeDrawingData.title} app page to learn more`}
                        >
                            <MoreP as="p">view more</MoreP>
                        </Link>
                    </li>
                </ProjectUl>
                <ProjectUl as="ul" key={speechToTextData.id}>
                    <ProjectTitleLi as="li">
                        <Link
                            to={'/portfolio/portfolio-view-1'}
                            title={`visit the link to the ${speechToTextData.title} app page to learn more`}
                        >
                            {speechToTextData.title}
                        </Link>
                    </ProjectTitleLi>
                    <Img
                        fluid={
                            props.data.portfolioImageOne.childImageSharp.fluid
                        }
                        alt={speechToTextData.title}
                    />
                    <br />
                    <ParaStyle as="p">
                        {speechToTextData.shortDescription}
                    </ParaStyle>
                    <PortfolioSpanStyle as="span">
                        {speechToTextData.tags}
                    </PortfolioSpanStyle>
                    <br />
                    <li>
                        <Link
                            to={'/portfolio/portfolio-view-1'}
                            title={`visit the link to the ${speechToTextData.title} app page to learn more`}
                        >
                            <MoreP>view more</MoreP>
                        </Link>
                    </li>
                </ProjectUl>
                <ProjectUl as="ul" key={theGrooveData.id}>
                    <ProjectTitleLi as="li">
                        <Link
                            to={'/portfolio/portfolio-view-2'}
                            title={`visit the link to the ${theGrooveData.title} app page to learn more`}
                        >
                            {theGrooveData.title}
                        </Link>
                    </ProjectTitleLi>
                    <Img
                        fluid={
                            props.data.portfolioImageTwo.childImageSharp.fluid
                        }
                        alt={theGrooveData.title}
                    />
                    <br />
                    <ParaStyle as="p">
                        {theGrooveData.shortDescription}
                    </ParaStyle>
                    <PortfolioSpanStyle as="span">
                        {theGrooveData.tags}
                    </PortfolioSpanStyle>
                    <br />
                    <li>
                        <Link
                            to={'/portfolio/portfolio-view-2'}
                            state={theGrooveData}
                            title={`visit the link to the ${theGrooveData.title} app page to learn more`}
                        >
                            <MoreP as="p">view more</MoreP>
                        </Link>
                    </li>
                </ProjectUl>
                <ProjectUl as="ul" key={rockinSynthData.id}>
                    <ProjectTitleLi as="li">
                        <Link
                            to={'/portfolio/portfolio-view-3'}
                            title={`visit the link to the ${rockinSynthData.title} app page to learn more`}
                        >
                            {rockinSynthData.title}
                        </Link>
                    </ProjectTitleLi>
                    <Img
                        fluid={
                            props.data.portfolioImageThree.childImageSharp.fluid
                        }
                        alt={rockinSynthData.title}
                    />
                    <br />
                    <ParaStyle as="p">
                        {rockinSynthData.shortDescription}
                    </ParaStyle>
                    <PortfolioSpanStyle as="span">
                        {rockinSynthData.tags}
                    </PortfolioSpanStyle>
                    <br />
                    <li>
                        <Link
                            to={'/portfolio/portfolio-view-3'}
                            title={`visit the link to the ${rockinSynthData.title} app page to learn more`}
                        >
                            <MoreP as="p">view more</MoreP>
                        </Link>
                    </li>
                </ProjectUl>
                <ProjectUl as="ul" key={catWhispererData.id}>
                    <ProjectTitleLi as="li">
                        <Link
                            to={'/portfolio/portfolio-view-4'}
                            title={`visit the link to the ${catWhispererData.title} app page to learn more`}
                        >
                            {catWhispererData.title}
                        </Link>
                    </ProjectTitleLi>
                    <Img
                        fluid={
                            props.data.portfolioImageFour.childImageSharp.fluid
                        }
                        alt={catWhispererData.title}
                    />
                    <br />
                    <ParaStyle as="p">
                        {catWhispererData.shortDescription}
                    </ParaStyle>
                    <PortfolioSpanStyle as="span">
                        {catWhispererData.tags}
                    </PortfolioSpanStyle>
                    <br />
                    <li>
                        <Link
                            to={'/portfolio/portfolio-view-4'}
                            title={`visit the link to the ${catWhispererData.title} app page to learn more`}
                        >
                            <MoreP as="p">view more</MoreP>
                        </Link>
                    </li>
                </ProjectUl>
                <ProjectUl as="ul" key={trumpTalksData.id}>
                    <ProjectTitleLi as="li">
                        <Link
                            to={'/portfolio/portfolio-view-5'}
                            title={`visit the link to the ${trumpTalksData.title} app page to learn more`}
                        >
                            {trumpTalksData.title}
                        </Link>
                    </ProjectTitleLi>
                    <Img
                        fluid={
                            props.data.portfolioImageFive.childImageSharp.fluid
                        }
                        alt={trumpTalksData.title}
                    />
                    <br />
                    <ParaStyle as="p">
                        {trumpTalksData.shortDescription}
                    </ParaStyle>
                    <PortfolioSpanStyle as="span">
                        {trumpTalksData.tags}
                    </PortfolioSpanStyle>
                    <br />
                    <li>
                        <Link
                            to={'/portfolio/portfolio-view-5'}
                            title={`visit the link to the ${trumpTalksData.title} app page to learn more`}
                        >
                            <MoreP as="p">view more</MoreP>
                        </Link>
                    </li>
                </ProjectUl>
                <ProjectUl as="ul" key={chattrboxData.id}>
                    <ProjectTitleLi as="li">
                        <Link
                            to={'/portfolio/portfolio-view-6'}
                            title={`visit the link to the ${chattrboxData.title} app page to learn more`}
                        >
                            {chattrboxData.title}
                        </Link>
                    </ProjectTitleLi>
                    <Img
                        fluid={
                            props.data.portfolioImageSix.childImageSharp.fluid
                        }
                        alt={chattrboxData.title}
                    />
                    <br />
                    <ParaStyle as="p">
                        {chattrboxData.shortDescription}
                    </ParaStyle>
                    <PortfolioSpanStyle as="span">
                        {chattrboxData.tags}
                    </PortfolioSpanStyle>
                    <br />
                    <li>
                        <Link
                            to={'/portfolio/portfolio-view-6'}
                            title={`visit the link to the ${chattrboxData.title} app page to learn more`}
                        >
                            <MoreP as="p">view more</MoreP>
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
        portfolioImageEight: file(
            relativePath: {eq: "projects/web-audio-api-ajax.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        portfolioImageNine: file(
            relativePath: {eq: "projects/omdb-api-nodejs-app.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        portfolioImageTen: file(
            relativePath: {eq: "projects/custom-html5-video-player.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        portfolioImageEleven: file(
            relativePath: {eq: "projects/making-music-in-browser.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        portfolioImageTwelve: file(
            relativePath: {eq: "projects/weather-app-nodejs-server.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        portfolioImageThirteen: file(
            relativePath: {eq: "projects/guess-the-keys.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
