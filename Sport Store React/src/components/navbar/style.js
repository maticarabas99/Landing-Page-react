import styled from "styled-components";

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 50px;
background-color: black;
padding: 10px;
  
`
export const LinkContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
`
export const NavbarList = styled.a`
display: flex;
gap: 40px;
align-items: center;
list-style-type: none;
font-family: 'REM', sans-serif;
margin: 10px;
@media (max-width: 425px) {
    display: none;
}
`
export const List = styled.a`
color: white;`

export const NavbarLogo = styled.img`
height: 50px;
width: 50px;
`
export const NavBtn = styled.a`
padding: 5px;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 425px) {
    font-size: 1rem;
}
`
export const NavBtnLink = styled.div`
color: black;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
`