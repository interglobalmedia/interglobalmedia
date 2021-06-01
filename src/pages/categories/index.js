import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../../components/Layout/Layout'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFolder} from '@fortawesome/free-solid-svg-icons'
import SEO from '../../components/Seo/Seo'
import {TagsCategoriesDiv} from '../../exports/named-exports'

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
