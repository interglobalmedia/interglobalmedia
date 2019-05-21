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
    },
    pathPrefix: '/',
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1026,
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
                ],
            },
        },
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-sharp`,
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
                icon: `src/images/gatsby-icon.png`,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
    ],
}
