 
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'


function Layout(){
    return(
        <>
            <Header />
            <Outlet />
            <footer>Rodapé</footer>
        </>
    )
}
export default Layout