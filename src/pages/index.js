import React from 'react'
import {Link, graphql} from 'gatsby'
import styled from 'styled-components'
import Search from '../components/Search/Search'
import SEO from '../components/Seo/Seo'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faRss,
    faDirections,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import ScrollUpButton from 'react-scroll-up-button'
import CookieConsent from 'react-cookie-consent'
import Header from '../components/Header/Header'
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects'
import FeaturedPosts from '../components/FeaturedPosts/FeaturedPosts'
import ServicesCarousel from '../components/ServicesCarousel/ServicesCarousel'
import {SiteCredsDiv, AnchorDiv} from '../components/Footer/Footer'
import TipCarousel from '../components/TipCarousel/TipCarousel'

const Container = styled.div`
    background: rgb(255, 227, 159);
    width: 100%;
`

const H1Style = styled.h1`
    text-align: center;
    font-weight: 400;
    &:first-of-type {
        margin: 3rem auto;
    }
    &:nth-of-type(2) {
        margin: 3rem auto;
    }
    &:nth-of-type(3) {
        margin: 0 auto;
        width: 97.5%;
        @media (min-width: 990px) {
            width: 90%;
        }
    }
    & a {
        color: rgb(148, 75, 43);
    }
`

const AppsDiv = styled.div`
    margin: 3rem auto 2rem;
`

const PostsDiv = styled.div`
    margin: 3rem auto;
`
const PodDiv = styled.div`
    margin: 3rem auto;
    & h1 {
        color: rgb(148, 75, 43);
    }
    & iframe {
        margin: 3rem auto;
        display: flex;
        width: 100%;
        max-width: 400px;
        height: 102px;
    }
`

const CarouselDiv = styled.div`
    margin: 0 3rem;
`

const IndexFooterStyle = styled.footer`
    text-align: center;
    padding-bottom: 0.7rem;
    letter-spacing: 0.07em;
    height: 30px;
    width: 100%;
    margin: 0 auto;
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    & a {
        margin-bottom: 3rem;
    }
`

const IndexPage = props => {
    const {data} = props
    const title = data.site.siteMetadata.title
    const keywords = data.site.siteMetadata.keywords
    return (
        <Container as="div">
            <SEO location={props.location} title={title} keywords={keywords} />
            <div className="Site">
                <Header />
                <Search />
                <div className="Site-content">
                    <PodDiv as="div">
                        <H1Style as="h1">
                            <a
                                href="https://anchor.fm/maria-campbell/episodes/The-Dawning-of-a-New-Era-and-a-new-set-of-Audio-Podcast-Tools-e4crl0"
                                target="_new"
                                rel="noopener noreferrer"
                                title="click on link to visit original podcast page on anchor.fm"
                            >
                                Latest Podcast
                            </a>
                        </H1Style>
                        <iframe
                            src="https://anchor.fm/maria-campbell/embed/episodes/GatsbyJS-and-Security-e4d5ms"
                            frameBorder="0"
                            scrolling="no"
                            title="GatsbyJS and Security"
                        />
                    </PodDiv>
                    <H1Style as="h1">
                        <Link
                            to="/services"
                            title={`visit the main Services page to learn more about the various services offered`}
                        >
                            Services
                        </Link>
                    </H1Style>
                    <ServicesCarousel />
                    <H1Style as="h1">
                        <Link
                            to="/portfolio"
                            title={`visit the main Portfolio page to learn more about various apps which have been built`}
                        >
                            Portfolio
                        </Link>
                    </H1Style>
                    <AppsDiv as="div">
                        <FeaturedProjects />
                    </AppsDiv>
                    <H1Style as="h1">
                        <Link
                            to="/blog"
                            title={`visit the main Blog page to read the various posts which have been published`}
                        >
                            Blog
                        </Link>
                    </H1Style>
                    <PostsDiv as="div">
                        <FeaturedPosts />
                    </PostsDiv>
                    <CarouselDiv as="div">
                        <TipCarousel />
                    </CarouselDiv>
                </div>
                <IndexFooterStyle as="footer">
                    <AnchorDiv as="div">
                        <ScrollUpButton
                            style={{background: 'transparent', outline: 'none'}}
                        />
                        <Link
                            to="/contact"
                            title={`visit the main Contact page to learn how to connect with us`}
                        >
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                style={{marginRight: '0.25rem'}}
                            />
                            Contact
                        </Link>
                        <Link
                            to="/sitemap"
                            title={`visit the Sitemap page to get an overview of the entire site`}
                        >
                            <FontAwesomeIcon
                                icon={faDirections}
                                transform="flip-v flip-h"
                                style={{marginRight: '0.25rem'}}
                            />
                            Sitemap
                        </Link>
                        <a
                            href="http://www.interglobalmedianetwork.com/rss.xml"
                            title={`visit the RSS Feed page to view or subscribe to our RSS Feed`}
                            target="_new"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faRss}
                                style={{marginRight: '0.25rem'}}
                            />
                            RSS
                        </a>
                        <br />
                    </AnchorDiv>
                    <SiteCredsDiv as="div">
                        © {new Date().getFullYear()}
                        {` `}
                        Inter-Global Media Network, Inc.
                    </SiteCredsDiv>
                    <CookieConsent
                        location="bottom"
                        buttonText="Accept"
                        declineButtonText="Decline"
                        cookieName="MDCDevBlogCookieConsent"
                        style={{background: 'rgba(0,0,0,1)', paddingTop: '5px'}}
                        buttonStyle={{color: '#4e503b', fontSize: '1rem'}}
                        declineButtonStyle={{fontSize: '1rem'}}
                        expires={150}
                        onAccept={() => {
                            alert('Great!')
                        }}
                        enableDeclineButton
                        onDecline={() => {
                            alert('Sorry to hear that!')
                        }}
                    >
                        <div style={{textAlign: 'left'}}>
                            <p>
                                This website uses cookies to enhance the user
                                experience.{' '}
                                <a
                                    href="https://cookiesandyou.com/"
                                    target="_new"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: 'rgb(255,187,187)',
                                    }}
                                >
                                    Learn more
                                </a>
                            </p>
                        </div>
                    </CookieConsent>
                </IndexFooterStyle>
            </div>
        </Container>
    )
}

export default IndexPage

export const indexPageQuery = graphql`
    query indexPageQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
