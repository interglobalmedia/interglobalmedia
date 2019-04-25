import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const HeaderStyle = styled.header`
  background: pink;
`

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
    <h1>
      <Link to="/">{siteTitle}</Link>
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
