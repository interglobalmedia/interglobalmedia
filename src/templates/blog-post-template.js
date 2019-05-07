import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'gatsby'
import {faTag, faFolder} from '@fortawesome/free-solid-svg-icons'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import {Helmet} from 'react-helmet'
import Layout from '../components/Layout/Layout'
import Bio from '../components/Bio/Bio'
import PrevNext from '../components/PrevNext/PrevNext'
import Share from '../components/Share/Share'
import SEO from '../components/Seo/Seo'
import '../components/Layout/Layout.scss'

const OuterWrapperDiv = styled.div`
  margin; 0 auto;
  color: rgb(47,0,0);
  text-align: left;
`

const OuterMetaDiv = styled.div`
    width: 90%;
    max-width: 1026px;
    margin: 3rem auto;
`

const MetaH1Title = styled.h1`
    text-align: center;
`

const MetaPDate = styled.div`
    text-align: center;
    margin-bottom: 1rem;
`

const DangerousHTMLDiv = styled.div`
    & h1,
    &h2,
    &h3,
    &h4,
    & h5,
    & h6 {
        color: rgb(47, 0, 0);
        max-width: 1026px;
        margin: 0 auto;
    }
    & p {
        color: rgba(88, 86, 86, 0.7);
    }
    & blockquote p {
        color: rebeccapurple;
    }
    & ul {
        list-style-type: none;
    }
    & ul li::before {
        content: '▪ ';
        color: rgb(47, 0, 0);
        display: inline-block;
        width: 1em;
        margin-left: -1em;
    }
    & ol li {
        counter-increment: list;
        list-style-type: none;
        position: relative;
    }
    & ol li:before {
        color: rgb(47, 0, 0);
        content: counter(list) '.';
        left: -32px;
        position: absolute;
        text-align: right;
        width: 26px;
    }
    & li {
        color: rgba(88, 86, 86, 0.7);
    }
    & a {
        box-shadow: none;
    }
`

const TagCatWrapperDiv = styled.div`
    margin: 0 auto;
    max-width: 1026px;
    display: flex;
    flex-direction: column;
`

const TagDiv = styled.div`
    margin-bottom: 0.25rem;
`

const CatDiv = styled.div`
  margin-bottom 2rem;
`

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
        postdescription,
        author,
    } = props.data.markdownRemark.frontmatter
    const {prev, next} = props.pageContext
    return (
        <>
            <SEO
                title={title}
                description={postdescription}
                image={thumbnail}
                post
                author={author}
            />
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Layout>
                <OuterWrapperDiv>
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
                    <OuterMetaDiv>
                        <MetaH1Title>{title}</MetaH1Title>
                        <MetaPDate>{date}</MetaPDate>
                        <DangerousHTMLDiv
                            dangerouslySetInnerHTML={{
                                __html: props.data.markdownRemark.html,
                            }}
                        />

                        <TagCatWrapperDiv>
                            <TagDiv>
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
                            </TagDiv>
                            <CatDiv>
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
                            </CatDiv>
                            <Bio />
                        </TagCatWrapperDiv>
                        <div className="prev-next-div">
                            <PrevNext
                                prev={prev && prev.node}
                                next={next && next.node}
                            />
                        </div>
                    </OuterMetaDiv>
                </OuterWrapperDiv>
            </Layout>
        </>
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
                postdescription
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
