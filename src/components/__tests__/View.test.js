import React from 'react'
import {render} from 'react-testing-library'
import {
    ViewDiv,
    TitleH2Style,
    ShortDescDiv,
    AnchorsDiv,
} from '../../pages/portfolio/view'

describe('portfolio/view', () => {
    it(`should render a ViewDiv emotion styled component`, () => {
        const {container} = render(<ViewDiv />)
        expect(container).toBeInTheDocument()
    })
    it('should render a TitleH2Style emotion styled component', () => {
        const {container} = render(<TitleH2Style />)
        expect(container).toBeInTheDocument()
    })
    it(`should render a ShortDescDiv emotion styled component`, () => {
        const {container} = render(<ShortDescDiv />)
        expect(container).toBeInTheDocument()
    })
    it(`should render an AnchorsDiv emotion styled component`, () => {
        const {container} = render(<AnchorsDiv />)
        expect(container).toBeInTheDocument()
    })
    it(`should render a project title`, () => {
        const {getByTestId} = render(
            <h2 data-testid="project-title">Speech By Text</h2>,
        )
        expect(getByTestId('project-title')).toHaveTextContent('Speech By Text')
    })
    it(`should render a project image alt text`, () => {
        const {queryByTestId, queryByAltText} = render(
            <img alt="Speech To Text" data-testid="project-image" />,
        )
        expect(queryByTestId('project-image')).toBeInTheDocument()
        expect(queryByAltText('Speech To Text')).toBeInTheDocument()
    })
    it(`should render a project shortDesc text`, () => {
        const {getByTestId} = render(
            <div data-testid="project-shortDesc">
                A voice controlled notes app using the Speech Recognition Api
                and React.
            </div>,
        )
        expect(getByTestId('project-shortDesc')).toHaveTextContent(
            'A voice controlled notes app using the Speech Recognition Api and React.',
        )
    })
    it(`should render a more anchor tag text`, () => {
        const {getByTestId} = render(
            <a
                href="https://interglobalmedia.github.io/portfolio/#/work/speech-to-text-app"
                data-testid="project-more"
            >
                Read More About Speech To Text
            </a>,
        )
        expect(getByTestId('project-more')).toHaveTextContent(
            'Read More About Speech To Text',
        )
    })
    it(`should render a an anchor tag project repository text`, () => {
        const {getByTestId} = render(
            <a
                href="https://github.com/interglobalmedia/speech-to-text-app"
                data-testid="project-repository"
            >
                Speech To Text Source Code
            </a>,
        )
        expect(getByTestId('project-repository')).toHaveTextContent(
            'Speech To Text Source Code',
        )
        expect(document.querySelector('a').getAttribute('href')).toBe(
            'https://github.com/interglobalmedia/speech-to-text-app',
        )
    })
    it(`should render an anchor tag project website text`, () => {
        const {getByTestId} = render(
            <a
                href="https://interglobalmedia.github.io/speech-to-text-app/"
                data-testid="project-website"
            >
                Speech To Text Website
            </a>,
        )
        expect(getByTestId('project-website')).toHaveTextContent(
            'Speech To Text Website',
        )
        expect(document.querySelector('a').getAttribute('href')).toBe(
            'https://interglobalmedia.github.io/speech-to-text-app/',
        )
    })
})
