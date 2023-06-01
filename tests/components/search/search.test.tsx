import {describe, test} from '@jest/globals';
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Search from '../../../src/components/search/search'


describe('Pruebas en <Search />', () => {

    test('Debe mostrar el estado actual sin parametros', () => {

        render(
            <MemoryRouter initialEntries={['/items?search=balon']}>
                <Search />
            </MemoryRouter>
        );

        //screen.debug()
            
    })

})