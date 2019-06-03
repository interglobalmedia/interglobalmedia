import React, {Component} from 'react'
import {Link, graphql} from 'gatsby'
import styled from '@emotion/styled'
import get from 'lodash/get'
import {Helmet} from 'react-helmet'
import Layout from '../../components/Layout/Layout'
import servicesData from '../../data/services'

const ServicesWrapperDiv = styled.div`
    width: 90%;
    max-width: 1026px;
    margin: 3rem auto;
    @media (min-width: 800px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: fit-content(40%);
        grid-column-gap: 1rem;
    }
`
const ServicesH1 = styled.h1`
    text-align: center;
    margin-top: 1.5rem;
    font-weight: normal;
`

const ServicesUl = styled.ul`
    list-style-type: none;
    width: 100%;
    max-width: 1026px;
    margin: 0 auto 1rem;
    border: 1px solid gainsboro;
    box-shadow: 0 -1px 4px #ede7e7;
    padding: 1.5rem 1rem 0;
    & a {
        box-shadow: none;
        color: rgb(39, 74, 169);
        @media (min-width: 400px) {
            font-size: 1.2rem;
        }
    }
    & :hover,
    & :focus {
        background: rgba(255, 153, 0, 0.5);
        cursor: pointer;
    }
    @media (min-width: 800px) {
        display: grid;
    }
`

const MoreLi = styled.li`
    margin-top: 1.5rem;
    width: 100%;
    margin-bottom: 1.5rem;
`

const MoreSpan = styled.span`
    font-style: italic;
    color: rgb(216, 132, 46);
`

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
                <ServicesWrapperDiv>
                    {servicesData.map((service, index) => (
                        <ServicesUl key={index}>
                            <li>
                                <a href={service.path} key={service.title}>
                                    {service.icon} {service.title}
                                </a>
                            </li>
                            <p>{service.shortDescription}</p>
                            {service.tags}
                            <br />
                            <MoreLi>
                                <a href={service.path} key={service.title}>
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
