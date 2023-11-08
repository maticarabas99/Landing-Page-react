import React from 'react'
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa'
import {LinkContainer, List, NavBtn, NavBtnLink, NavbarContainer, NavbarList, NavbarLogo,} from './style'

export const Navbar = () => {
  return (
    <NavbarContainer>
        <div>
        <NavbarLogo src="https://yourfiles.cloud/uploads/67bb9d798b906c5b5f57d66b24d55f9d/logo.png" alt="" />
        </div>
        <LinkContainer>
                <NavbarList>
                    <li><List href="#" class="navbar-link">Inicio</List></li>
                    <li><List href="#sobre-nosotros" class="navbar-link">Sobre Nosotros</List></li>
                    <li><List href="#contacto" class="navbar-link">Contacto</List></li>
                    <li><List href="#productos" class="navbar-link">Productos</List></li>
               </NavbarList>
            <div>
                <button><NavBtn href="#"><NavBtnLink><span>Iniciar Sesión</span><FaUserCircle/></NavBtnLink></NavBtn></button>
            </div>
            <div>
                <button><NavBtn href="#"><NavBtnLink><FaShoppingCart/></NavBtnLink></NavBtn></button>
            </div>
        </LinkContainer>
    </NavbarContainer>
  )
}
