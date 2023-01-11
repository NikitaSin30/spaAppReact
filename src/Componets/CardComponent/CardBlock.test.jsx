import { render,screen } from "@testing-library/react";
import CardBlock from "./CardBlock.jsx";
import CardItem from "./CardItem";

const value = ['html','jsx','jsx','css']

describe('Card Block', () => {
    test('Card render',() => {
        render(<CardBlock item ={value} />)
        expect(screen.getByRole('button')).toBeInTheDocument()
        // expect(screen.getByText('html')).toBeInTheDocument()
    })
})
