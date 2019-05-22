/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

const SEO = ({
    title,
    description,
    image,
    pathname,
    post,
    keywords,
    author,
    lang,
}) => (
    <StaticQuery
        query={query}
        render={({
            site: {
                siteMetadata: {
                    defaultTitle,
                    titleTemplate,
                    defaultDescription,
                    siteUrl,
                    defaultImage,
                    defaultAuthor,
                    defaultKeywords,
                    twitterUsername,
                },
            },
        }) => {
            const seo = {
                title: title || defaultTitle,
                description: description || defaultDescription,
                image: `${image || defaultImage}`,
                author: author,
                keywords: keywords || defaultKeywords,
                siteUrl: `${siteUrl}${pathname || '/'}`,
            }
            return (
                <>
                    <Helmet
                        htmlAttributes={{
                            lang,
                        }}
                        title={seo.title}
                        titleTemplate={titleTemplate}
                    >
                        <meta name="keywords" content={seo.keywords} />
                        <meta name="author" content={seo.author} />
                        <meta name="description" content={seo.description} />
                        <meta name="image" content={seo.image} />
                        {seo.siteUrl && (
                            <meta property="og:siteUrl" content={seo.siteUrl} />
                        )}
                        {(post ? true : null) && (
                            <meta property="og:type" content="post" />
                        )}
                        {seo.title && (
                            <meta property="og:title" content={seo.title} />
                        )}
                        {seo.author && (
                            <meta property="og:author" content={seo.author} />
                        )}
                        {seo.description && (
                            <meta
                                property="og:description"
                                content={seo.description}
                            />
                        )}
                        {seo.image && (
                            <meta property="og:image" content={seo.image} />
                        )}
                        <meta
                            name="twitter:card"
                            content="summary_large_image"
                        />
                        {twitterUsername && (
                            <meta
                                name="twitter:creator"
                                content={twitterUsername}
                            />
                        )}
                        {seo.title && (
                            <meta name="twitter:title" content={seo.title} />
                        )}
                        {seo.description && (
                            <meta
                                name="twitter:description"
                                content={seo.description}
                            />
                        )}
                        {seo.image && (
                            <meta name="twitter:image" content={seo.image} />
                        )}
                    </Helmet>
                </>
            )
        }}
    />
)

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    pathname: PropTypes.string,
    post: PropTypes.bool,
    keywords: PropTypes.array,
    author: PropTypes.string,
    twitterUsername: PropTypes.string,
    lang: PropTypes.string,
}

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    pathname: null,
    post: false,
    keywords: [
        'atlassian',
        'audio',
        'automated workflows',
        'aws',
        'aws amplify',
        'babel',
        'back end development',
        'cat whisperer app',
        'chattrbox',
        'client canvas art',
        'command line',
        'command line services',
        'continuous deployment',
        'continuous integration',
        'cross browser compatibility',
        'css3',
        'css in js',
        'css modules',
        'development',
        'distributed version control',
        'development workflows services',
        'dropbox paper',
        'es6',
        'eslint',
        'evolution in design and development',
        'feature branches',
        'front end development',
        'full stack development',
        'full stack javascript',
        'gatsbyjs',
        'gh pages',
        'git',
        'git for developers services',
        'git for non-developers services',
        'git integration',
        'github jira integration',
        'github',
        'google custom search',
        'heroku',
        'homebrew',
        'html5',
        'html5 canvas',
        'jest testing',
        'jira',
        'jsx',
        'linting',
        'modern javascript',
        'mongodb',
        'netlify',
        'node chat app',
        'node collaborative drawing app',
        'nodejs',
        'node security',
        'node sass',
        'npm',
        'npm audit fix',
        'office 365',
        'osx',
        'postgresql',
        'prettier',
        'production',
        'react',
        'react workflow',
        'responsive design',
        'rockin synth',
        'sass',
        'serverless stack',
        'shadow dom',
        'snyk',
        'speech to text',
        'styled components',
        'testing',
        'trello',
        'trump talks trash',
        'video',
        'web development',
        'webgl',
        'webpack',
        'welcome to the groove',
    ],
    author: `Maria D. Campbell`,
    lang: `en`,
}
export default SEO

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                title: title
                titleTemplate
                defaultDescription: description
                siteUrl: siteUrl
                defaultImage: image
                author
                twitterUsername
                defaulteywords: keywords
            }
        }
    }
`
