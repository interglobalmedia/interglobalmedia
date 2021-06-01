/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'
import { SiteCredsDiv } from '../../exports/named-exports'

describe('Footer', () => {
    it('should render a credits div', () => {
        const {container} = render(<SiteCredsDiv />)
        expect(container).toBeInTheDocument()
    })
})
