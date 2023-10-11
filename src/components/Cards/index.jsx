{/*INDEX DOS CARDS */}

import { getImages } from '../../utils/getImages'
import { ContainerCards } from './styles'

 function Cards({ item }){
    return(
       <ContainerCards>
          <img src={getImages(item.poster_path)} />
          <h3>{item.original_title}</h3> 
       </ContainerCards>
    )
}
export default Cards