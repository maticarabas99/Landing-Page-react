import styled from "styled-components";

export const HeaderContainer = styled.div`
display: flex;
justify-content: top;
align-items: center;
flex-direction: column;
background-color: var(--amarillo);
height: 100vh;
@media (max-width: 425px) {
    justify-content: center;
}
`
export const HeaderTitle = styled.h1`
font-size: 10rem;
@media (max-width: 768px) {
    font-size: 5.5rem;
}
@media (max-width: 425px) {
    font-size: 3.5rem;
}
`
export const HeaderText = styled.p`
font-size: 1.8rem;
line-height: 40px;
max-width: 1300px;
margin:30px;
@media (max-width: 768px) {
    font-size: 1.5rem;
}
@media (max-width: 425px) {
    font-size: 1.2rem;
    line-height: 30px;
}
`

