import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../../components/Layout/Layout'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFolder} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import SEO from '../../components/Seo/Seo'

export const TagsCategoriesDiv = styled.div`
    width: 90%;
    max-width: 960px;
    margin: 3rem auto 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    & a {
        margin-bottom: 1.5rem;
        list-style-type: none;
        background: #fdf6e3;
        color: rgb(131, 70, 68);
        width: 100%;
        padding: 1rem;
        text-decoration: none;
        font-size: 1.1rem;
        letter-spacing: 0.07em;
        border-bottom: 1px solid rgb(131, 70, 68);
        & :hover {
            border-bottom: 0;
        }
    }
`

const CategoriesPage = props => {
    const data = props.data.allMarkdownRemark.group
    const title = props.data.site.siteMetadata.title
    const keywords = props.data.site.siteMetadata.keywords
    return (
        <Layout>
            <SEO location={props.location} title={title} keywords={keywords} />
            <TagsCategoriesDiv as="div">
                {data.map((category, i) => (
                    <Link to={`/categories/${category.fieldValue}`} key={i}>
                        <FontAwesomeIcon
                            icon={faFolder}
                            style={{color: '#268bd2', marginRight: '0.5rem'}}
                            transform="flip-h"
                        />
                        {category.fieldValue} {`(${category.totalCount})`}
                    </Link>
                ))}
            </TagsCategoriesDiv>
        </Layout>
    )
}

export default CategoriesPage

export const catQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                keywords
            }
        }
        allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___categories) {
                fieldValue
                totalCount
            }
        }
    }
`
