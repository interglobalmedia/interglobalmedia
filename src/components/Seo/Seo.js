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
        const
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
                    <Helmet title={seo.title} titleTemplate={titleTemplate}>
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
                            content="summary_larg_image"
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
        'web development',
        'react',
        'gatsbyjs',
        'google custom search',
        'mongodb',
        'postgresql',
        'nodejs',
        'npm',
        'office 365',
        'dropbox paper',
        'trello',
        'jsx',
        'css in js',
        'styled components',
        'jira',
        'atlassian',
        'git',
        'distributed version control',
        'github',
        'development',
        'production',
        'feature branches',
        'continuous deployment',
        'aws amplify',
        'git integration',
        'css3',
        'html5',
        'audio',
        'video',
        'full stack development',
        'front end development',
        'back end development',
        'automated workflows',
        'aws',
        'netlify',
        'gh pages',
        'heroku',
        'command line',
        'osx',
        'serverless stack',
        'cross browser compatibility',
        'shadow dom',
        'testing',
        'jest testing',
        'html5 canvas',
        'webgl',
        'linting',
        'eslint',
        'prettier',
        'babel',
        'webpack',
        'css modules',
        'sass',
        'node sass',
        'homebrew',
        'responsive design',
        'es6',
        'modern javascript',
        'node security',
        'npm audit fix',
        'snyk',
    ],
    author: 'interglobalmedia',
}
export default SEO
