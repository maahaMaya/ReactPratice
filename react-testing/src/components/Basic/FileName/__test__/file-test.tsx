import { render, screen } from "@testing-library/react"
import { Group } from "../../Grouping/Group";

describe('Group', () => {
    test('First renders correctly', () => {
        render(<Group />)
        const textElement = screen.getByText('Hello'); /// regex for ignore case of Captial
        expect(textElement).toBeInTheDocument()
    })
})

describe('Group', () => {
    test('First render with a name', () => {
        render(<Group name='Sourav' />)
        const textElement = screen.getByText('Hello Sourav');
        expect(textElement).toBeInTheDocument()
    })
})
