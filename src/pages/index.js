import React from 'react'
import {Link, graphql} from 'gatsby'
import Search from '../components/Search/Search'
import SEO from '../components/Seo/Seo'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faRss,
    faDirections,
    faEnvelope,
    faPodcast,
    faSignInAlt,
} from '@fortawesome/free-solid-svg-icons'
import ScrollUpButton from 'react-scroll-up-button'
import CookieConsent from 'react-cookie-consent'
import Header from '../components/Header/Header'
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects'
import FeaturedPosts from '../components/FeaturedPosts/FeaturedPosts'
import ServicesCarousel from '../components/ServicesCarousel/ServicesCarousel'
import TipCarousel from '../components/TipCarousel/TipCarousel'
import {useMediaQuery} from '../hooks/mediaQueryHooks'

import {
    IndexContainer,
    IndexH1Style,
    IndexBoxH3Style,
    IndexH2Style,
    AppsDiv,
    PostsDiv,
    PodDiv,
    CarouselDiv,
    IndexFooterStyle,
    IndexAnchorDiv,
    SiteCredsDiv,
    styles,
} from '../exports/named-exports'

const IndexPage = props => {
    const {data} = props
    const title = data.site.siteMetadata.title
    const keywords = data.site.siteMetadata.keywords
    const notRightMargin = useMediaQuery('(max-width: 559px)')
    const marginBottomLess = useMediaQuery('(max-width: 559px)')
    return (
        <IndexContainer as="div">
            <SEO location={props.location} title={title} keywords={keywords} />
            <div className="Site">
                <Header />
                <Search />
                <main className="Site-content">
                    <PodDiv as="div">
                        <IndexH1Style as="h1">
                            <a
                                href="https://anchor.fm/maria-campbell/episodes/Migrating-from-Gatsby-v2-to-v3-eukj32"
                                target="_new"
                                rel="noopener noreferrer"
                                title="Migrating from Gatsby v2 to v3"
                            >
                                Latest Podcast
                            </a>
                        </IndexH1Style>
                        <iframe
                            src="https://anchor.fm/maria-campbell/embed/episodes/Migrating-from-Gatsby-v2-to-v3-eukj32"
                            height="102px"
                            width="400px"
                            frameBorder="0"
                            scrolling="no"
                            title="Migrating from Gatsby v2 to v3"
                        ></iframe>
                    </PodDiv>
                    <IndexH2Style as="h2">Specialty</IndexH2Style>
                    <IndexBoxH3Style as="h3">
                        <span>
                            My specialty is to help sharpen the thinking of
                            individuals in approaching their workflows in a more
                            organized and efficient manner, thereby preparing
                            them for jobs in Web Development.
                        </span>
                    </IndexBoxH3Style>
                    <IndexH2Style as="h2">
                        <Link
                            to="/services"
                            title={`visit the main Services page to learn more about the various services offered`}
                        >
                            Services
                        </Link>
                    </IndexH2Style>
                    <ServicesCarousel />
                    <IndexH2Style as="h2">
                        <Link
                            to="/portfolio"
                            title={`visit the main Portfolio page to learn more about various apps which have been built`}
                        >
                            Portfolio
                        </Link>
                    </IndexH2Style>
                    <AppsDiv as="div">
                        <FeaturedProjects />
                    </AppsDiv>
                    <IndexH2Style as="h2">
                        <Link
                            to="/blog"
                            title={`visit the main Blog page to read the various posts which have been published`}
                        >
                            Blog
                        </Link>
                    </IndexH2Style>
                    <PostsDiv as="div">
                        <FeaturedPosts />
                    </PostsDiv>
                    <CarouselDiv as="div">
                        <IndexH2Style as="h2">Dev Tips</IndexH2Style>
                        <TipCarousel />
                    </CarouselDiv>
                </main>
                <IndexFooterStyle as="footer">
                    <IndexAnchorDiv as="div">
                        <ScrollUpButton
                            style={styles.container(
                                notRightMargin,
                                marginBottomLess,
                            )}
                            ContainerClassName="ScrollUpButton__Container"
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
                        <a
                            style={{lineHeight: '2.5'}}
                            href="https://www.interglobalmedianetwork.com/admin/#/"
                        >
                            <FontAwesomeIcon
                                icon={faSignInAlt}
                                style={{
                                    marginRight: '0.25rem',
                                }}
                            />
                            Admin Login
                        </a>
                        <br />
                        <li>Podcast</li>
                        <a
                            href="https://anchor.fm/maria-campbell"
                            target="_new"
                            rel="noopener noreferrer"
                            title="visit link to view public Plugging in the Holes public site"
                        >
                            <FontAwesomeIcon
                                icon={faPodcast}
                                style={{
                                    marginRight: '0.25rem',
                                }}
                            />
                            Plugging In The Holes
                        </a>
                        <br />
                    </IndexAnchorDiv>
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
        </IndexContainer>
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
