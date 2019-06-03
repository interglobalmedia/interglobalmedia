import React, {Component} from 'react'
import styled from '@emotion/styled'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faPlus,
    faEnvelope,
    faPhone,
    faPencilAlt,
} from '@fortawesome/free-solid-svg-icons'
import {graphql} from 'gatsby'
import get from 'lodash/get'
import Layout from '../../components/Layout/Layout'
import ContactIcons from '../../components/ContactIcons/ContactIcons'
import Email from '../../components/Email/Email'
import Phone from '../../components/Phone/Phone'
import Contribute from '../../components/Contribute/Contribute'
import SEO from '../../components/Seo/Seo'
import '../../style/style.scss'

const H2Style = styled.h2`
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
                    <H2Style className="title-social">
                        <FontAwesomeIcon
                            icon={faPlus}
                            style={{fontSize: '1.8rem'}}
                        />{' '}
                        <NumAddSpan>1</NumAddSpan>
                    </H2Style>
                    <ContactIcons />
                    <div className="follow" />
                    <div className="email">
                        <H2Style className="title-social">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                style={{
                                    fontSize: '1.8rem',
                                    marginBottom: '40px',
                                }}
                                transform="rotate-30"
                            />
                            <Email />
                        </H2Style>
                    </div>
                    <div className="phone">
                        <H2Style className="title-social">
                            <FontAwesomeIcon
                                icon={faPhone}
                                style={{
                                    fontSize: '1.8rem',
                                    marginBottom: '40px',
                                }}
                                transform="rotate-180"
                            />
                            <Phone />
                        </H2Style>
                    </div>
                    <div className="contribute">
                        <H2Style className="social">
                            <FontAwesomeIcon
                                icon={faPencilAlt}
                                style={{
                                    fontSize: '1.8rem',
                                    marginBottom: '40px',
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
