/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'
import Header from '../Header/Header'
import { SiteCredsDiv, LayoutContainer } from '../../exports/named-exports'

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
