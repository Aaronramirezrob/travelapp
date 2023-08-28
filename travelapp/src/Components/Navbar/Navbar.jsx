import React, {useState} from 'react';
import "./navbar.css";
import {SiYourtraveldottv} from "react-icons/si";
import {AiFillCloseCircle} from "react-icons/ai";
import {TbGridDots} from "react-icons/tb";
import logo from "../../Assets/logo.jpg";

const Navbar = () => {
  const [active, setActive] = useState("navbar");

  /* Open Navbar */
  const toggleNavbar = () => {
    setActive("navbar activeNavbar")
  }

  /* Hide Navbar */
  const hideNavbar = () => {
    setActive("navbar")
  }

  return (
    <section className='navbarSection'>
    <header className='header flex'>
    <div className='logoDiv'>
    <a href='#' className='logo flex'>
    <h1>
    <SiYourtraveldottv className="icon"/>Travel.
    </h1>
    </a>
    </div>

    <div className={active}>
    <ul className='navLists flex'>
    <li className='navItem'>
    <a href='#' className='navLink'>Inicio</a>
    </li>

    <li className='navItem'>
    <a href='#' className='navLink'>Paquetes</a>
    </li>

    <li className='navItem'>
    <a href='#' className='navLink'>Nosotros</a>
    </li>

    <li className='navItem'>
    <a href='#' className='navLink'>Novedades</a>
    </li>

    <button className='btn'>
    <a href='#'>Reserva Ahora</a>
    </button>
    </ul>


    <div onClick={hideNavbar} className='closeNavbar'>
    <AiFillCloseCircle className='icon'/>
    </div>
    </div>
  
    <div onClick={toggleNavbar} className='toggleNavbar'>
    <TbGridDots className='icon'/>
    </div>

    </header>
    </section>
  )
}

export default Navbar