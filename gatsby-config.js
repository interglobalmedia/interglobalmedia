const netlifyCmsPaths = {
    resolve: `gatsby-plugin-netlify-cms-paths`,
    options: {
        cmsConfig: `/static/admin/config.yml`,
    },
}

module.exports = {
    siteMetadata: {
        title: `Inter 🌐 Media`,
        titleTemplate: `Inter-Global Media Network, Inc. is where we design, develop, and teach experiences that make people's lives simpler.`,
        description: `The Business Website for Inter-Global Media Network, Inc.`,
        siteUrl: `https://www.interglobalmedianetwork.com/`,
        image: '/images/profileSmall.png',
        author: `Maria D. Campbell`,
        social: {
            twitter: `letsbsocial1`,
            github: `interglobalmedia`,
            facebook: `mariador62`,
            linkedin: `mariacampbell`,
        },
        twitterUsername: `@letbsoscial1`,
        keywords: [
            'anchorfm',
            'atlassian',
            'audio',
            'automated workflows',
            'development workflows services',
            'react workflow',
            'aws',
            'aws amplify',
            'babel',
            'back end development',
            'cat whisperer app',
            'chattrbox',
            'client canvas art',
            'command line',
            'command line services',
            'community',
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
            'leadership',
            'linting',
            'modern javascript',
            'mojave',
            'mongodb',
            'netlify',
            'node chat app',
            'node collaborative drawing app',
            'nodejs',
            'node security',
            'node sass',
            'non-alpha-characters',
            'npm',
            'npm audit fix',
            'office 365',
            'official aws meetup',
            'owasp',
            'osx',
            'osx-dictation',
            'podcasting',
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
            'text-editors',
            'trello',
            'trump talks trash',
            'video',
            'vscode',
            'web development',
            'webgl',
            'webpack',
            'web security',
            'welcome to the groove',
            'women in technology',
        ],
    },
    pathPrefix: '/',
    plugins: [
        // Add static assets before markdown files
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static/img`,
                name: 'images',
            },
        },
        netlifyCmsPaths, // Including in your Gatsby plugins will transform any paths in your frontmatter
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content`,
                name: 'blog',
            },
        },
        `gatsby-plugin-twitter`,
        `gatsby-plugin-sitemap`,
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                indentedSyntax: true
            },
        }, 
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                pure: true,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images/`,
                name: `images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-embed-video',
                        options: {
                            maxWidth: 800,
                            ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                            height: 400,
                            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
                            noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
                        },
                    },
                    netlifyCmsPaths, // Including in your Gatsby plugins will transform any paths in your frontmatter
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1026,
                            linkImagesToOriginal: true,
                        },
                    },
                    {
                        resolve: `gatsby-plugin-netlify-cms`,
                        options: {
                            enableIdentityWidget: true,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            noInlineHighlight: false,
                        },
                    },
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                    `gatsby-remark-reading-time`,
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/posts`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/presentations`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/projects`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/services`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/sites`,
            },
        },
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                // your google analytics tracking id
                trackingId: `UA-32260397-3`,
                // Puts tracking script in the head instead of the body if true
                head: false,
                // enable ip anonymization
                anonymize: true,
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
                feeds: [
                    {
                        serialize: ({query: {site, allMarkdownRemark}}) => {
                            return allMarkdownRemark.edges.map(edge => {
                                return Object.assign(
                                    {},
                                    edge.node.frontmatter,
                                    {
                                        description: edge.node.excerpt,
                                        date: edge.node.frontmatter.date,
                                        url:
                                            site.siteMetadata.siteUrl +
                                            edge.node.fields.slug,
                                        guid:
                                            site.siteMetadata.siteUrl +
                                            edge.node.fields.slug,
                                        custom_elements: [
                                            {'content:encoded': edge.node.html},
                                        ],
                                    },
                                )
                            })
                        },
                        query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
                        output: '/rss.xml',
                        title: 'Inter-Global Media Network, Inc. RSS Feed',
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Gatsby Starter Blog`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/interglobalmedia-brand.png`,
            },
        },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
    ],
}
