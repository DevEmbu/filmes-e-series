import { ButtonWhite, ButtonRed } from "./styles"

function Button({ children, red }){
    return(
       <>
        { red ? (<ButtonWhite>{ children }</ButtonWhite>) : (<ButtonRed>{ children }</ButtonRed>)}
                   
      </>
    )
}
export default Button