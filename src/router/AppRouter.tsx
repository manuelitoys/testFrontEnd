/**Archivo de rutas */
import { Route, Routes } from 'react-router-dom'

import Search from '../components/search/search'
import ItemDescription from '../components/items/itemDescription/item-description'

export const AppRouter = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={ <Search /> } />
                <Route path="/items" element={ <Search /> } />
                <Route path="/items/:id" element={ <ItemDescription /> } />
            </Routes>
        </>
    )
}