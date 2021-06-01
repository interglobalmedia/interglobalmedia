/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'

import Header from '../Header/Header'

describe('Header', () => {
    it('renders Header component', () => {
        render(<Header />)

        screen.debug()
    })
})
