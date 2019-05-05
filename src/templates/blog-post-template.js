import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'gatsby'
import {faTag, faFolder} from '@fortawesome/free-solid-svg-icons'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import Layout from '../components/Layout/Layout'
import SEO from '../components/Seo/Seo'
import Bio from '../components/Bio/Bio'
import PrevNext from '../components/PrevNext/PrevNext'
import Share from '../components/Share/Share'
import '../components/Layout/Layout.scss'

const BlogPostTemplate = props => {
    const thumbnail =
        props.data.markdownRemark.frontmatter.image &&
        props.data.markdownRemark.frontmatter.image.childImageSharp.resize.src
    const {
        title,
        date,
        image,
        tags,
        categories,
        description,
        author,
    } = props.data.markdownRemark.frontmatter
    const {prev, next} = props.pageContext
    return (
        <Layout>
            <SEO
                title={title}
                description={description}
                image={thumbnail}
                post
                author={author}
            />
            <div
                style={{
                    margin: '0 auto',
                    color: 'rgb(47,0,0)',
                }}
            >
                <div>
                    {image && (
                        <Img
                            fluid={image.childImageSharp.fluid}
                            style={{
                                width: '100%',
                                height: '400px',
                                marginTop: '0',
                            }}
                        />
                    )}
                </div>
                <div
                    style={{
                        width: '100%',
                        maxWidth: '1026px',
                        margin: '3rem auto',
                        textAlign: 'left',
                    }}
                >
                    <h1 style={{textAlign: 'center'}}>{title}</h1>
                    <p style={{textAlign: 'center'}}>{date}</p>

                    <div
                        dangerouslySetInnerHTML={{
                            __html: props.data.markdownRemark.html,
                        }}
                        style={{
                            width: '90%',
                            maxWidth: '1026px',
                            margin: '0 auto',
                        }}
                    />

                    <div
                        style={{
                            width: '90%',
                            margin: '0 auto',
                            maxWidth: '1026px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <div style={{marginBottom: '1rem'}}>
                            <span>Tagged in: </span>
                            {tags.map((tag, i) => (
                                <Link
                                    to={`/tags/${tag}`}
                                    key={i}
                                    style={{boxShadow: 'none'}}
                                >
                                    <FontAwesomeIcon
                                        icon={faTag}
                                        style={{color: '#268bd2'}}
                                    />{' '}
                                    {tag}{' '}
                                </Link>
                            ))}
                        </div>
                        <div style={{marginBottom: '2rem'}}>
                            <span>Categorized under: </span>
                            {categories.map((category, i) => (
                                <Link
                                    to={`/categories/${category}`}
                                    key={i}
                                    style={{boxShadow: 'none'}}
                                >
                                    <FontAwesomeIcon
                                        icon={faFolder}
                                        style={{
                                            color: '#268bd2',
                                            marginRight: '0.25rem',
                                        }}
                                    />
                                    {category}
                                </Link>
                            ))}
                        </div>
                        <Bio />
                    </div>
                    <div className="prev-next-div">
                        <PrevNext
                            prev={prev && prev.node}
                            next={next && next.node}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query pageQuery($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            html
            excerpt
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                tags
                categories
                description
                image {
                    childImageSharp {
                        resize(width: 1500, height: 1500) {
                            src
                        }
                        fluid(maxWidth: 786) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
