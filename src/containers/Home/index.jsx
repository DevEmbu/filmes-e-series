import api from '../../services/api'
import { Background, Info, Poster, Container } from './styles'
import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { ContainerButton } from '../../components/Button/styles'
import Slider from '../../components/Slider'
import { getImages } from '../../utils/getImages'


function Home(){
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()

    useEffect(() => {
        async function getMovies(){
        const {
            data: {results }
        } = await api.get('/movie/popular')
        setMovie(results[9])
            
        }

     {/* Função para Buscar Dados de Filmes na API */}

        async function getTopMovies(){
          const {
            data: {results}
          } = await api.get('/movie/top_rated')

          console.log(results)
          setTopMovies(results)
        }
     {/* Função para Buscar Dados de Series na API */}

        async function getTopSeries(){
          const {
              data: {results }
          } = await api.get('/tv/top_rated')

          console.log(results)
          setTopSeries(results)
              
          }
              
        getMovies()  
        getTopMovies()  
        getTopSeries()
                      
    }, [])

    
    return(  
        <>  
        {movie && (
         <Background img={getImages(movie.backdrop_path)}>
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
                <img alt="capa-do-filme" src={getImages(movie.poster_path)}/>
              </Poster>
            </Container>
        </ Background>
        )}
         {topMovies && <Slider Info={topMovies} title={'Top Filmes'} />}
         {topSeries && <Slider Info={topSeries} title={'Top Series'} />}
        </>
    )
}

export default Home
