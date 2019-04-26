import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faRss,
  faDirections,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <footer
      style={{
        minHeight: "90px",
        paddingTop: "50px",
        textAlign: "center",
        color: "#717171",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <a
          href="mailto:interglobalmedia@gmail.com"
          style={{ boxShadow: "none", marginRight: "1rem" }}
        >
          <FontAwesomeIcon icon={faEnvelope} />
          Contact
        </a>
        <Link to="/rss.xml" style={{ boxShadow: "none", marginRight: "1rem" }}>
          <FontAwesomeIcon icon={faDirections} />
          Sitemap
        </Link>
        <Link to="/rss.xml" style={{ boxShadow: "none" }}>
          <FontAwesomeIcon icon={faRss} />
          RSS
        </Link>
      </div>
      © {new Date().getFullYear()}
      {` `}
      <a
        href="https://www.interglobalmedianetwork.com"
        style={{ boxShadow: "none" }}
      >
        Inter-Global Media Network, Inc.
      </a>
    </footer>
  )
}

export default Footer
