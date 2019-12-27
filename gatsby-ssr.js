/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";
export function onRenderBody(
    { setHeadComponents }
) {
    setHeadComponents([
        <script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="fc478bdc-8e68-4068-b4c3-e810e0d7b378";(function(){d = document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>,
    ]);
}
