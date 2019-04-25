import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const HeaderStyle = styled.header`
  padding: 1.5rem 0 0 1.5rem;
`

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <div>
      <p style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link
          to="/"
          style={{ marginRight: "1.5rem", boxShadow: "none", color: "#d8842e" }}
        >
          Home
        </Link>
        <Link
          to="/blog"
          style={{ marginRight: "1.5rem", boxShadow: "none", color: "#d8842e" }}
        >
          Blog
        </Link>
      </p>
    </div>
    <h1 style={{ fontSize: "2rem", fontWeight: "normal", marginTop: "-60px" }}>
      <Link to="/" style={{ boxShadow: "none", color: "#d8842e" }}>
        {siteTitle}
      </Link>
    </h1>
  </HeaderStyle>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Maria D. Campbell`,
}

export default Header
