import React from "react"
import { render } from "react-testing-library"

import Header from "../Header/Header"

describe("Header", () => {
  it("renders siteTitle", () => {
    const siteTitle = `Inter-Global Media`
    const { getByText } = render(<Header siteTitle={siteTitle} />)
    const title = getByText(siteTitle)
    expect(title).toBeInTheDocument()
  })
})
