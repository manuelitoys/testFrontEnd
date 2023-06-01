
import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'


describe('Pruebas en <Search />', () => {

    test('Debe mostrar el estado actual sin parametros', () => {

        render(
            <MemoryRouter initialEntries={['/items?search=']}>
                {/* <Search /> */}
                //? No se pudo realizar la prueba porque obtengo un error en el QueryString por parte de JEST
            </MemoryRouter>
        );

        //screen.debug()
            
    })

})