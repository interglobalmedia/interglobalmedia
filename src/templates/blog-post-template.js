import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'gatsby'
import {faTag, faFolder, faComment} from '@fortawesome/free-solid-svg-icons'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import {Helmet} from 'react-helmet'
import Layout from '../components/Layout/Layout'
import Bio from '../components/Bio/Bio'
import PrevNext from '../components/PrevNext/PrevNext'
import Share from '../components/Share/Share'
import '../components/Layout/Layout.css'

import {
    PostWrapperDiv,
    PostMetaDiv,
    MetaH1Title,
    MetaPDate,
    DangerousHTMLDiv,
    TagCatWrapperDiv,
    TagDiv,
    TagCatInSpan,
    CatDiv,
    DiscussTwitter,
} from '../exports/named-exports'

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
    } = props.data.markdownRemark.frontmatter
    const {prev, next} = props.pageContext
    const blogPostUrl = `${url}${props.location.pathname}`
    const timeToRead = props.data.markdownRemark.timeToRead
    return (
        <Layout>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="image" content={thumbnail} />
                <meta name="categories" content={categories} />
                <meta name="tags" content={tags} />
            </Helmet>
            <PostWrapperDiv as="div">
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
                <PostMetaDiv as="div">
                    <MetaH1Title as="h1">{title}</MetaH1Title>
                    <MetaPDate as="p">{date}</MetaPDate>
                    <MetaPDate>
                        {timeToRead} minute read{' '}
                        <span role="img" aria-label="book">
                            📗
                        </span>
                    </MetaPDate>
                    <DangerousHTMLDiv
                        as="div"
                        dangerouslySetInnerHTML={{
                            __html: props.data.markdownRemark.html,
                        }}
                    />

                    <TagCatWrapperDiv as="div">
                        <TagDiv a="div">
                            <TagCatInSpan as="span">Tagged in: </TagCatInSpan>
                            {tags.map((tag, i) => (
                                <Link
                                    to={`/tags/${tag}`}
                                    key={i}
                                    title={`visit the "${tag}" tag page listing the posts tagged in "${tag}"`}
                                >
                                    <FontAwesomeIcon
                                        icon={faTag}
                                        style={{
                                            color: 'rgb(39,74,169)',
                                            marginLeft: '0.5rem',
                                            marginRight: '0.125rem',
                                        }}
                                        transform="rotate--30"
                                    />
                                    {tag}{' '}
                                </Link>
                            ))}
                        </TagDiv>
                        <CatDiv as="div">
                            <TagCatInSpan as="span">
                                Categorized under:{' '}
                            </TagCatInSpan>
                            {categories.map((category, i) => (
                                <Link
                                    to={`/categories/${category}`}
                                    key={i}
                                    title={`visit the "${category}" category page listing the posts categorized under "${category}"`}
                                >
                                    <FontAwesomeIcon
                                        icon={faFolder}
                                        style={{
                                            color: 'rgb(39,74,169)',
                                            marginLeft: '0.5rem',
                                            marginRight: '0.25rem',
                                        }}
                                    />
                                    {category}{' '}
                                </Link>
                            ))}
                        </CatDiv>
                    </TagCatWrapperDiv>
                    <DiscussTwitter as="div">
                        <a
                            target="_new"
                            rel="noopener noreferrer"
                            /* using mobile.twitter.com because if people haven't upgraded to the new experience, the regular URL wont work for them */
                            href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
                                blogPostUrl,
                            )}`}
                            title={`visit this shared post on Twitter to discuss it there`}
                        >
                            <FontAwesomeIcon
                                icon={faComment}
                                transform="flip-v rotate--180"
                            />{' '}
                            Discuss On Twitter
                        </a>
                    </DiscussTwitter>
                    <div className="post-social-share">
                        <Share
                            title={title}
                            url={url}
                            pathname={props.location.pathname}
                        />
                    </div>
                    <Bio />
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
            timeToRead
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
