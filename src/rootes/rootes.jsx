import { Route, Routes } from 'react-router-dom'

import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'
import Layout from '../layout/LayoutDefault.jsx'

function Rotas() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Home />}/>
                <Route path='/filmes' element={<Movies />}/>
                <Route path='/series' element={<Series />}/>                
            </Route>
        </Routes>
    )
}
export default Rotas