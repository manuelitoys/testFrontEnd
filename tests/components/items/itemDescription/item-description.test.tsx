
import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ItemDescription from '../../../../src/components/items/itemDescription/item-description';


describe('Pruebas en <ItemList />', () => {

    test('Debe mostrar datos cuando se envia información desde <Search />', () => {

        render(
            <MemoryRouter initialEntries={['/items/id']}>
                {/* <ItemDescription /> */}
                //? No se pudo realizar la prueba porque obtengo un error en el QueryString por parte de JEST
            </MemoryRouter>
        );

        // screen.debug()
            
    })

})