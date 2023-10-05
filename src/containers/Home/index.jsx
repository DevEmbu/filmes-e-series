import api from '../../services/api'
import { Background } from './styles'
import { useState } from 'react'
import { useEffect } from 'react'
import Header from '../../components/Header'


function Home(){
    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getMovies(){
        const data = await api.get('/movie/popular')
        setMovie(data.data)
            
        }
        getMovies()
    

    })

    
    return(  
        <>  
        {movie && (
        <Background img="https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg">
            
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>           
            
        </ Background>
        )}
        </>
    )
}

export default Home
