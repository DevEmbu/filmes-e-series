import api from '../../services/api'
import { Background } from './styles'

function Home(){

    async function getMovies(){
        const data = await api.get(movie/11)
        console.log(data)
    }
    getMovies()

    return(    
        <Background img="https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg">
            
            <h1>Home</h1>
            <p>Esta é uma Pagina Home</p>
            
        </ Background>
    )
}
export default Home
