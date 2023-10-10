import styled, { css } from 'styled-components'

const buttonStyles = css ` 
border-radius: 30px;
background: transparent;
border: 3px solid #ffffff;
padding: 5px;
cursor: pointer;
font-weight: 500;
font-size: 20px;
color: #ffffff;

&:hover {
    color: #ff0000;
    background: #ffffff;
}
`
export const ButtonWhite = styled.button` 
${ buttonStyles }
`
export const ButtonRed = styled.button` 
${ buttonStyles }

background: #ff0000;
border: 4px solid transparent;

&:hover {
    box-shadow: 0px 0px 40px 7px rgba(212,59,59,1);
    background: #ff0000;
    color: #ffffff;
    border: 4px solid #ffffff;
    
}
`
export const ContainerButton = styled.div`
display: flex;
gap: 20px;
margin-top: 30px;

`