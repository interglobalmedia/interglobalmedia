import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import styled from "@emotion/styled"

const Share = props => {
  const twitter = `https://twitter.com/intent/tweet?url=${props.url +
    props.pathname}&text=${props.title} by @letsbsocial1`
  const fb = `https://www.facebook.com/sharer/sharer.php?u=${props.url +
    props.pathname}&text=${props.title}`
  const linkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${props.url +
    props.pathname}&text=${props.title}`
  return (
    <ul>
      <li>
        <a href={fb} target="blank">
          <FontAwesomeIcon
            icon={faFacebookF}
            size="2x"
            style={{
              width: "24px",
              height: "24px",
              marginLeft: "-0.5rem",
            }}
          />
          Facebook
        </a>
      </li>
      <li>
        <a href={twitter} target="blank">
          <FontAwesomeIcon
            icon={faTwitter}
            size="2x"
            style={{
              width: "24px",
              height: "24px",
              marginRight: "0.25rem",
            }}
          />
          Twitter
        </a>
      </li>
      <li>
        <a href={linkedin} target="blank">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            size="2x"
            style={{
              width: "24px",
              height: "24px",
              marginRight: "0.25rem",
            }}
          />
          Linkedin
        </a>
      </li>
    </ul>
  )
}

export default Share
