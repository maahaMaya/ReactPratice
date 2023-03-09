import { render, screen } from "@testing-library/react"
import { Group } from "./Group";

describe('Group', () => {
    test('First renders correctly', () => {
        render(<Group />)
        const textElement = screen.getByText('Hello'); /// regex for ignore case of Captial
        expect(textElement).toBeInTheDocument()
    })
    test('First render with a name', () => {
        render(<Group name='Sourav' />)
        const textElement = screen.getByText('Hello Sourav');
        expect(textElement).toBeInTheDocument()
    })
})

//Nested describe
describe('Group', () => {
    test('First renders correctly', () => {
        render(<Group />)
        const textElement = screen.getByText('Hello'); /// regex for ignore case of Captial
        expect(textElement).toBeInTheDocument()
    })

    //Nested example
    describe('Nested', () => {
        test('First render with a name', () => {
            render(<Group name='Sourav' />)
            const textElement = screen.getByText('Hello Sourav');
            expect(textElement).toBeInTheDocument()
        })
    })
})
