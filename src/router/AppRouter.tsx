import { Route, Routes } from 'react-router-dom'

import Search from '../components/search/search'

export const AppRouter = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={ <Search /> } />
                <Route path="/items" element={ <Search /> } />
            </Routes>
        </>
    )
}