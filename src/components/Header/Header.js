import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <p>
        <Link to="/">
          Home
        </Link>
      </p>
    </div>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Maria D. Campbell`,
}

export default Header