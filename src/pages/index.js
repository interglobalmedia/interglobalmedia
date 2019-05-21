import React from 'react'
import {Link, graphql} from 'gatsby'
import styled from '@emotion/styled'
import Bio from '../components/Bio/Bio'
import Search from '../components/Search/Search'
import SEO from '../components/Seo/Seo'
import {rhythm} from '../utils/typography'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faRss,
    faDirections,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faLinkedinIn,
    faTwitter,
    faFacebookF,
} from '@fortawesome/free-brands-svg-icons'
import ScrollUpButton from 'react-scroll-up-button'
import IndexHeader from '../components/IndexHeader/IndexHeader'
import servicesData from '../data/services'
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects'
import FeaturedPosts from '../components/FeaturedPosts/FeaturedPosts'

const Container = styled.div`
    background: rgb(255, 227, 159);
    width: 100%;
`

const IndexFooterStyle = styled.footer`
    text-align: center;
    padding-bottom: 0.5rem;
    letter-spacing: 0.07em;
    color: rgb(47, 0, 0);
    left: 0;
    right: 0;
    bottom: 3rem;
    height: 30px;
    width: 100%;
    background: rgb(255, 227, 159);
`

const AnchorDiv = styled.div`
    text-align: center;
    margin-bottom: 1rem;
    color: rgb(216, 132, 46);
    font-size: 0.9rem;
    & a {
        box-shadow: none;
        color: rgb(47, 0, 0);
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
    color: rgb(235, 140, 0);
    &:first-of-type {
        margin: 3rem auto;
    }
    &:nth-of-type(2) {
        margin: 1.5rem auto;
    }
    &:nth-of-type(3) {
        margin: 0 auto;
        width: 97.5%;
        @media (min-width: 990px) {
            width: 90%;
        }
    }
`

const ServicesDiv = styled.div`
    margin: 1.5rem auto;
    @media (min-width: 990px) {
        display: grid;
        width: 90%;
        grid-template-columns: repeat(3, 1fr);
        padding; 0;
    }
`

const AppsDiv = styled.div`
    margin: 3rem auto 1.5rem;
    @media (min-width: 990px) {
        display: grid;
        width: 90%;
        grid-template-columns: repeat(3, 1fr);
        padding; 0;
    }
`

const PostsDiv = styled.div`
    margin: 3rem auto 4.5rem;
    @media (min-width: 990px) {
        display: grid;
        width: 90%;
        padding; 0;
    }
`

const ServicesUl = styled.ul`
    width: 97.5%;
    margin: 0 auto;
    display: grid;
    list-style-type: none;
    & > li {
        padding: 5px 10px;
        border: 1px solid gainsboro;
        box-shadow: 0 -1px 4px #ede7e7;
        cursor: pointer;
    }
    & h3 {
        font-weight: 400;
    }
    & a {
        box-shadow: none;
    }
    & li:hover {
        background-color: rgba(255, 153, 0, 0.5);
    }
`

const AnchorStyle = styled.a`
    box-shadow: none;
    margin-right: 1rem;
`

export const SiteCredsDiv = styled.div`
    color: rgb(216, 132, 46);
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
                    <H1Style>Services</H1Style>
                    <ServicesDiv>
                        {servicesData.map((service, index) => (
                            <ServicesUl key={index}>
                                <li>
                                    <h3>
                                        <a href={service.path} target="_new">
                                            {service.title} Services
                                        </a>
                                    </h3>
                                    <p>{service.shortDescription}</p>
                                    <a href={service.path} target="_new">
                                        learn more
                                    </a>
                                </li>{' '}
                            </ServicesUl>
                        ))}
                    </ServicesDiv>
                    <H1Style>Apps</H1Style>
                    <AppsDiv>
                        <FeaturedProjects />
                    </AppsDiv>
                    <H1Style>Posts</H1Style>
                    <PostsDiv>
                        <FeaturedPosts />
                    </PostsDiv>
                </div>
                <IndexFooterStyle>
                    <AnchorDiv>
                        <ScrollUpButton
                            style={{background: 'transparent', outline: 'none'}}
                        />
                        <AnchorStyle href="mailto:interglobalmedia@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                            Contact
                        </AnchorStyle>
                        <Link to="/sitemap">
                            <FontAwesomeIcon icon={faDirections} />
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
