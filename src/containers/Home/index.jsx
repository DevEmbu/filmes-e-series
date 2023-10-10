import api from '../../services/api'
import { Background, Info, Poster, Container } from './styles'
import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { ContainerButton } from '../../components/Button/styles'


function Home(){
    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getMovies(){
        const {
            data: {results }
        } = await api.get('/movie/popular')
        setMovie(results[8])
            
        }
       
        getMovies()   
                      
    }, [])

    
    return(  
        <>  
        {movie && (
         <Background 
              img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} >
            <Container>
             <Info>
               <h1>{movie.title}</h1>
               <p>{movie.overview}</p>

                 <ContainerButton>
                    <Button red={true}>Assista Agora</Button>
                    <Button red={false}>Assista o Trailler</Button>
                 </ContainerButton>
             
             </Info>
              <Poster>
                <img alt='capa-do-filme' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
              </Poster>
            </Container>
        </ Background>
        )}
        </>
    )
}

export default Home
