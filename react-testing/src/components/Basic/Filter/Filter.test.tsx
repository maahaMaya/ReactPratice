import { render, screen } from "@testing-library/react"
import { Filter } from "./Filter";

test.only('First renders correctly', () => {
    render(<Filter/>)
    const textElement = screen.getByText('Hello'); /// regex for ignore case of Captial
    expect(textElement).toBeInTheDocument()
})

// test.skip('First render with a name', () => {
//     render(<FirstBasic name='Sourav'/>)
//     const textElement = screen.getByText('Hello Sourav');
//     expect(textElement).toBeInTheDocument()
// })
test('First render with a name', () => {
    render(<Filter name='Sourav'/>)
    const textElement = screen.getByText('Hello Sourav');
    expect(textElement).toBeInTheDocument()
})