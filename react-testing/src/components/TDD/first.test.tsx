import { render, screen } from "@testing-library/react"
import { First } from "./first";

test('First renders correctly', () => {
    render(<First/>)
    const textElement = screen.getByText('Hello'); /// regex for ignore case of Captial
    expect(textElement).toBeInTheDocument()
})

test('First render with a name', () => {
    render(<First name='Sourav'/>)
    const textElement = screen.getByText('Hello Sourav');
    expect(textElement).toBeInTheDocument()
})