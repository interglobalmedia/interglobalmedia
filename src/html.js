/* eslint-disable react/jsx-no-undef */
import React from 'react'
import PropTypes from 'prop-types'
// import classes from './components/Search/Search.scss'

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes} lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="fc478bdc-8e68-4068-b4c3-e810e0d7b378";(function(){d = document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <noscript key="noscript" id="gatsby-noscript">
                    This app works best with JavaScript enabled.
                </noscript>
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{
                        __html: props.body,
                    }}
                />
                <div
                    key={`footer`}
                    id="search"
                    dangerouslySetInnerHTML={{
                        __html: props.footer,
                    }}
                />
                {props.postBodyComponents}
            </body>
        </html>
    )
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
}
