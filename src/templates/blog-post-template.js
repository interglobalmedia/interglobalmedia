import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'gatsby'
import {faTag, faFolder, faComment} from '@fortawesome/free-solid-svg-icons'
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

const PostWrapperDiv = styled.div`
  margin; 0 auto;
  color: rgb(47,0,0);
  text-align: left;
`

const PostMetaDiv = styled.div`
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
        color: rgba(88,86,86,1);
    }
    & blockquote p {
        color: rebeccapurple;
    }
    & ul {
        list-style-type: none;
    }
    & ul li:before {
        color: rgb(47, 0, 0);
        content: content: '▪ ';
        left: -32px;
        position: absolute;
        text-align: right;
        width: 26px;
    }
    & ul li {
        counter-increment: list;
        list-style-type: none;
        position: relative;
    }
    & ul li:before  {
        content: '▪ ';
        color: rgb(47, 0, 0);
        display: inline-block;
        width: 1em;
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
    & a:hover {
        text-decoration: underline;
    }
`

const TagCatWrapperDiv = styled.div`
    margin: 0 auto;
    max-width: 1026px;
    display: flex;
    flex-direction: column;
`

export const TaggedInSpan = styled.span`
    letter-spacing: 0.07em;
    font-weight: bold;
`

const TagDiv = styled.div`
    margin-bottom: 0.25rem;
    & a {
        box-shadow: none;
    }
    & a:hover {
        text-decoration: underline;
    }
`

export const CagtegorizedInSpan = styled.span`
    letter-spacing: 0.07em;
    font-weight: bold;
`

const CatDiv = styled.div`
  margin-bottom 2rem;
  & a {
      box-shadow: none;
  }
  & a:hover {
      text-decoration: underline;
  }
`

export const DiscussTwitter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem auto;
    & a {
        box-shadow: none;
    }
    & :hover {
        text-decoration: underline;
    }
`

const BlogPostTemplate = props => {
    const url = props.data.site.siteMetadata.siteUrl
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
    const blogPostUrl = `${url}${props.location.pathname}`
    return (
        <Layout>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="image" content={thumbnail} />
                <meta name="categories" content={categories} />
                <meta name="tags" content={tags} />
            </Helmet>
            <PostWrapperDiv>
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
                <PostMetaDiv>
                    <MetaH1Title>{title}</MetaH1Title>
                    <MetaPDate>{date}</MetaPDate>
                    <DangerousHTMLDiv
                        dangerouslySetInnerHTML={{
                            __html: props.data.markdownRemark.html,
                        }}
                    />

                    <TagCatWrapperDiv>
                        <TagDiv>
                            <TaggedInSpan>Tagged in: </TaggedInSpan>
                            {tags.map((tag, i) => (
                                <Link to={`/tags/${tag}`} key={i}>
                                    <FontAwesomeIcon
                                        icon={faTag}
                                        style={{color: '#268bd2'}}
                                    />{' '}
                                    {tag}{' '}
                                </Link>
                            ))}
                        </TagDiv>
                        <CatDiv>
                            <CagtegorizedInSpan>
                                Categorized under:{' '}
                            </CagtegorizedInSpan>
                            {categories.map((category, i) => (
                                <Link to={`/categories/${category}`} key={i}>
                                    <FontAwesomeIcon
                                        icon={faFolder}
                                        style={{
                                            color: '#268bd2',
                                            marginRight: '0.25rem',
                                        }}
                                    />
                                    {category}{' '}
                                </Link>
                            ))}
                        </CatDiv>
                        <Bio />
                    </TagCatWrapperDiv>
                    <DiscussTwitter>
                        <a
                            target="_new"
                            rel="noopener noreferrer"
                            /* using mobile.twitter.com because if people haven't upgraded to the new experience, the regular URL wont work for them */
                            href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
                                blogPostUrl,
                            )}`}
                        >
                            <FontAwesomeIcon icon={faComment} /> Discuss On
                            Twitter
                        </a>
                    </DiscussTwitter>
                    <div className="prev-next-div">
                        <PrevNext
                            prev={prev && prev.node}
                            next={next && next.node}
                        />
                    </div>
                </PostMetaDiv>
            </PostWrapperDiv>
        </Layout>
    )
}

export default BlogPostTemplate

export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            html
            excerpt
            frontmatter {
                title
                date(formatString: "MMMM Do, YYYY")
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
        site {
            siteMetadata {
                siteUrl
            }
        }
    }
`
