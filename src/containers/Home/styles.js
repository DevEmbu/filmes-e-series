import styled from 'styled-components'


export const Background = styled.div`
background-image: url(${(props) => props.img});
height: 100vh;
background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;


&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.5);
} 

`
export const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 100%;

`


export const Info = styled.div`
z-index: 2;
padding: 20px;
width: 50%;

h1 {
color: #ffffff;
font-size: 5rem;
font-weight: 500;

}

p{
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin: 30px 0px 20px 0px;
}
`
 export const Poster = styled.div`
 z-index: 2;
 img{
 width: 400px;
 border-radius: 30px;
 }
 `