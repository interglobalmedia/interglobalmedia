import React from "react"

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
