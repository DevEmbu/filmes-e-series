import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        font-family: 'Manrope', sans-serif;
        color: #ffffff;

    }

    body{
        background-color: #000000;
        background-position: center;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        

    }
`