import React from 'react'
import {render} from 'react-testing-library'
import {SiteCredsDiv} from '../Footer/Footer'

describe('Footer', () => {
    it('should render a credits div', () => {
        const {container} = render(<SiteCredsDiv />)
        expect(container).toBeInTheDocument()
    })
})
