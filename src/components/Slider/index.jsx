{/* INDEX DO SLIDER */}


import Cards from "../Cards"
import { ContainerSlider } from "./styles"
import { Swiper, SwiperSlide } from 'swiper/react'

function Slider({ Info, title }){

  console.log({Info, title})
    return(      
       <ContainerSlider>
         <h2>{title}</h2>
         <Swiper 
               grabCursor
               spaceBetween={20}
               slidesPerView={'auto'}
               className="swiper"
          >
            {/*Aqui mapeamos o item do array INFO posição por posição(index) e criamos uma key */}
            { Info.map((item, index) => (
              <SwiperSlide key={index}>
                <Cards item={item}/>                
              </SwiperSlide>
            ))}          
         </Swiper>
       </ContainerSlider>     
     
    )
}
export default Slider