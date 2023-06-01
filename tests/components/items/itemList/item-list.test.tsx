
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import ItemList  from "../../../../src/components/items/itemList/item-list";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))


describe('Pruebas en <ItemList />', () => {
    
    const titleTest = 'Prueba'

    const itemList = {
        author: {
            name: 'Manuel David',
            lastname: 'Rodriguez Riveros'
        },
        items: [{
            id: '',
            price: {
                amount: 0,
                currency: '',
                decimals: 0
            },
            title: titleTest,
            picture: ''
        }]
    }

    beforeEach(() => jest.clearAllMocks() )

    test('Debe mostrar datos cuando se envia información desde <Search />', () => {


        render(
            <MemoryRouter initialEntries={['/items?search=']}>
                <ItemList itemsList={ itemList }/>
            </MemoryRouter>
        );

        expect( screen.getByText(titleTest) ).toBeTruthy()
        expect( screen.getByRole('button').innerHTML ).toContain(titleTest)
        
    })
    
    test('Debe capturar el dato cuando se da click', () => {

        render(
            <MemoryRouter initialEntries={['/items?search=']}>
                <ItemList itemsList={ itemList }/>
            </MemoryRouter>
        );
        
        const eventClick = screen.getByLabelText('titleItem')
        fireEvent.click( eventClick )
        
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/items/')
    })

})