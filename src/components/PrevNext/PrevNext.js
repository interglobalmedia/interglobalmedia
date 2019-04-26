import React from "react"
import styled from "@emotion/styled"

const PrevNext = props => {
  const { prev, next } = props
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "space-between",
        listStyleType: "none",
        marginRight: "1rem",
      }}
    >
      {prev && (
        <li>
          <a
            href={prev.fields.slug}
            style={{ color: "rgba(216,132,46, 1)", boxShadow: "none" }}
          >
            ← Newer <br />
          </a>
        </li>
      )}
      {next && (
        <li>
          <a
            href={next.fields.slug}
            style={{ color: "rgba(216,132,46, 1)", boxShadow: "none" }}
          >
            Older → <br />
          </a>
        </li>
      )}
    </ul>
  )
}

export default PrevNext
