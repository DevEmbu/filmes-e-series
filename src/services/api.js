import axios from 'axios'

// https://api.themoviedb.org/3/movie/popular?{movie_id} /images

const api = axios.create ({
    baseURL:'https://api.themoviedb.org/3',
    params:{ 
          api_key:'199c90afabe374492787e7801dc85d9e',
    language:'pt-BR',
    pages: 1
    }
})