 
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'


function Layout(){
    return(
        <>
            <Outlet />
            <Header />
            
            <footer>Rodapé</footer>
        </>
    )
}
export default Layout