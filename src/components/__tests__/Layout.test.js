import React from 'react'
import {render} from 'react-testing-library'
import Header from '../Header/Header'
import {SiteCredsDiv} from '../Footer/Footer'
import {LayoutContainer} from '../Layout/Layout'

describe('Layout', () => {
    it('renders a header', () => {
        const data = {
            site: {
                siteMetadata: {
                    title: `Inter 🌐 Media`,
                },
            },
        }
        const {container} = render(
            <LayoutContainer>
                <Header data={data} />
            </LayoutContainer>,
        )
        expect(container.querySelector('header')).toBeInTheDocument()
    })
    it(`renders a credits div in the footer`, () => {
        const {container} = render(<SiteCredsDiv />)
        expect(container).toBeInTheDocument()
    })
    it(`renders children`, () => {
        const text = `__Hello world__`
        const {getByText} = render(
            <LayoutContainer>
                <main>
                    <h1>{text}</h1>
                </main>
            </LayoutContainer>,
        )
        const child = getByText(text)
        expect(child).toBeInTheDocument()
    })
})
