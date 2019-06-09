import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../../components/Layout/Layout'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTag} from '@fortawesome/free-solid-svg-icons'
import {Helmet} from 'react-helmet'
import {TagsCategoriesDiv} from '../categories'

function TagsPage(props) {
    const data = props.data.allMarkdownRemark.group
    return (
        <Layout>
            <Helmet>
                <meta charset="utf-8" />
                <title>Tags Page</title>
                <Link
                    rel="canonical"
                    href="https://www.docscorneronline.com/tags/tags"
                />
            </Helmet>
            <TagsCategoriesDiv>
                {data.map((tag, i) => (
                    <Link to={`/tags/${tag.fieldValue}`} key={i}>
                        <FontAwesomeIcon
                            icon={faTag}
                            style={{color: '#268bd2'}}
                            transform="rotate--30"
                        />{' '}
                        {tag.fieldValue} {`(${tag.totalCount})`}
                    </Link>
                ))}
            </TagsCategoriesDiv>
        </Layout>
    )
}

export default TagsPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`
