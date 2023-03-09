import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

test('Greets renders correctly', () => {
    render(<Greet/>)
    //const textElement = screen.getByText('Hello');
    const textElement = screen.getByText(/Hello/i); /// regex for ignore case of Captial
    expect(textElement).toBeInTheDocument()
})