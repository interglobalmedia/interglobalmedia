import React, {Component} from 'react'
import {graphql} from 'gatsby'
import get from 'lodash/get'
import {Helmet} from 'react-helmet'
import Layout from '../../components/Layout/Layout'
import servicesData from '../../data/services'

import {
    ServicesWrapperDiv,
    ServicesUl,
    MoreLi
} from '../../exports/named-exports'
class ServicesIndex extends Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const siteDescription = get(
            this,
            'props.data.site.siteMetadata.description',
        )
        return (
            <Layout>
                <Helmet
                    htmlAttributes={{lang: 'en'}}
                    meta={[{name: 'description', content: siteDescription}]}
                    title={`Services | ${siteTitle}`}
                />
                <ServicesWrapperDiv as="div">
                    {servicesData.map((service, index) => (
                        <ServicesUl as="ul" key={index}>
                            <li>
                                <a
                                    href={service.path}
                                    key={service.title}
                                    title={`visit the ${
                                        service.title
                                    } Services page to learn more`}
                                >
                                    {service.icon} {service.title}
                                </a>
                            </li>
                            <p>{service.shortDescription}</p>
                            {service.tags}
                            <br />
                            <MoreLi as="li">
                                <a
                                    href={service.path}
                                    key={service.title}
                                    title={`view more about ${
                                        service.title
                                    } Services on the ${
                                        service.title
                                    } Services page`}
                                >
                                    <p>view more</p>
                                </a>
                            </MoreLi>
                        </ServicesUl>
                    ))}
                </ServicesWrapperDiv>
            </Layout>
        )
    }
}

export default ServicesIndex

export const servicesQuery = graphql`
    query servicesQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`
