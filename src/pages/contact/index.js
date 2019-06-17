import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faPlus,
    faEnvelope,
    faPhone,
    faPencilAlt,
} from '@fortawesome/free-solid-svg-icons'
import {graphql} from 'gatsby'
import Layout from '../../components/Layout/Layout'
import ContactIcons from '../../components/ContactIcons/ContactIcons'
import Email from '../../components/Email/Email'
import Phone from '../../components/Phone/Phone'
import Contribute from '../../components/Contribute/Contribute'
import SEO from '../../components/Seo/Seo'

export const H2Style = styled.h2`
    text-align: center;
    color: rgb(148, 75, 43);
    font-size: 1.8rem;
    cursor: pointer;
`

const NumAddSpan = styled.span`
    font-size: 2.2rem;
`
const Contact = props => {
    const {data} = props
    const title = data.site.siteMetadata.title
    const keywords = data.site.siteMetadata.keywords
    return (
        <Layout>
            <SEO location={props.location} title={title} keywords={keywords} />
            <div className="contact-content">
                <div className="contact-social">
                    <H2Style
                        as="h2"
                        className="title-social"
                        title={`connect with us on Github, Facebook, Twitter, or Linkedin`}
                    >
                        <FontAwesomeIcon
                            icon={faPlus}
                            style={{fontSize: '1.8rem'}}
                        />{' '}
                        <NumAddSpan>1</NumAddSpan>
                    </H2Style>
                    <ContactIcons />
                    <div className="follow" />
                    <div className="email">
                        <H2Style
                            as="h2"
                            className="title-social"
                            title={`email us`}
                        >
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                style={{
                                    fontSize: '1.8rem',
                                    marginBottom: '2rem',
                                    marginTop: '1rem',
                                }}
                                transform="rotate-30"
                            />
                            <Email />
                        </H2Style>
                    </div>
                    <div className="phone">
                        <H2Style
                            as="h2"
                            className="title-social"
                            title={`call us`}
                        >
                            <FontAwesomeIcon
                                icon={faPhone}
                                style={{
                                    fontSize: '1.8rem',
                                    marginBottom: '2rem',
                                    marginTop: '0.25rem',
                                }}
                                transform="rotate-180"
                            />
                            <Phone />
                        </H2Style>
                    </div>
                    <div className="contribute">
                        <H2Style
                            as="h2"
                            className="social"
                            title={`read our posts on our Developer Blog or The Practical Dev`}
                        >
                            <FontAwesomeIcon
                                icon={faPencilAlt}
                                style={{
                                    fontSize: '1.8rem',
                                    marginBottom: '2rem',
                                    marginTop: '0.25rem',
                                }}
                                transform="rotate-90"
                            />
                            <Contribute />
                        </H2Style>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact

export const query = graphql`
    query contactQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`
