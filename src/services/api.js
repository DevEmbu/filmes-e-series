import axios from 'axios'


// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg

const api = axios.create ({
    baseURL:'https://api.themoviedb.org/3',
    params:{ 
          api_key:'199c90afabe374492787e7801dc85d9e',
          language:'pt-BR',
          page: 1
    }
})

export default api