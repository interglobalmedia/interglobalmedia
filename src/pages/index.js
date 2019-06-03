import React from 'react'
import {Link, graphql} from 'gatsby'
import styled from '@emotion/styled'
import Search from '../components/Search/Search'
import SEO from '../components/Seo/Seo'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faRss,
    faDirections,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import ScrollUpButton from 'react-scroll-up-button'
import CookieConsent, {Cookies} from 'react-cookie-consent'
import IndexHeader from '../components/IndexHeader/IndexHeader'
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects'
import FeaturedPosts from '../components/FeaturedPosts/FeaturedPosts'
import ServicesCarousel from '../components/ServicesCarousel/ServicesCarousel'

const Container = styled.div`
    background: rgb(255, 227, 159);
    width: 100%;
`

const IndexFooterStyle = styled.footer`
    text-align: center;
    padding-bottom: 0.5rem;
    letter-spacing: 0.07em;
    color: rgb(47, 0, 0);
    height: 30px;
    width: 100%;
    margin: 0 auto;
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    & a {
        box-shadow: none;
        margin-bottom: 3rem;
        & :hover {
            text-decoration: underline;
        }
    }
`

const AnchorDiv = styled.div`
    text-align: center;
    margin-bottom: 1rem;
    color: rgb(216, 132, 46);
    font-size: 0.9rem;
    & a {
        box-shadow: none;
        color: rgb(39, 74, 169);
    }
    a:nth-of-type(1) {
        margin-right: 1rem;
    }
    & a:nth-of-type(2) {
        margin-right: 1rem;
    }
    & a:hover {
        text-decoration: underline;
    }
    @media (min-width: 375px) {
        font-size: 1.2rem;
    }
    & ul:last-of-type {
        color: rgb(216, 132, 46);
        & li:last-of-type {
            font-style: normal;
        }
    }
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
        box-shadow: none;
        color: rgb(148, 75, 43);
    }
    & a:hover {
        text-decoration: underline;
    }
`

const AppsDiv = styled.div`
    margin: 3rem auto 2rem;
`

const PostsDiv = styled.div`
    margin: 3rem auto 6rem;
`

export const SiteCredsDiv = styled.div`
    color: rgb(255, 165, 79);
    margin-top: 1rem;
    text-align: center;
`

const IndexPage = props => {
    const {data} = props
    const title = data.site.siteMetadata.title
    const keywords = data.site.siteMetadata.keywords
    return (
        <Container>
            <SEO location={props.location} title={title} keywords={keywords} />
            <div className="Site">
                <IndexHeader />
                <Search />
                <div className="Site-content">
                    <H1Style>
                        <Link to="/services">Services</Link>
                    </H1Style>
                    <ServicesCarousel />
                    <H1Style>
                        <Link to="/portfolio">Portfolio</Link>
                    </H1Style>
                    <AppsDiv>
                        <FeaturedProjects />
                    </AppsDiv>
                    <H1Style>
                        <Link to="/blog">Blog</Link>
                    </H1Style>
                    <PostsDiv>
                        <FeaturedPosts />
                    </PostsDiv>
                </div>
                <IndexFooterStyle>
                    <AnchorDiv>
                        <ScrollUpButton
                            style={{background: 'transparent', outline: 'none'}}
                        />
                        <Link to="/contact">
                            <FontAwesomeIcon icon={faEnvelope} />
                            Contact
                        </Link>
                        <Link to="/sitemap">
                            <FontAwesomeIcon
                                icon={faDirections}
                                transform="flip-v flip-h"
                            />
                            Sitemap
                        </Link>
                        <a href="http://www.interglobalmedianetwork.com/rss.xml">
                            <FontAwesomeIcon icon={faRss} />
                            RSS
                        </a>
                        <br />
                    </AnchorDiv>
                    <SiteCredsDiv>
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

export const indexQuery = graphql`
    query indexPageQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
