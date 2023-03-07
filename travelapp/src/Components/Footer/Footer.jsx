import React, {useEffect} from 'react';
import "./footer.css";
import video1 from "../../Assets/video1.mp4";
import {FiSend, FiChevronRight} from "react-icons/fi";
import {SiYourtraveldottv} from "react-icons/si";
import {AiOutlineTwitter, AiFillYoutube, AiFillInstagram} from "react-icons/ai";
import {FaTripadvisor} from "react-icons/fa";


import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
  <section className='footer'>
  <div className='videoDiv'>
  <video src={video1} loop autoPlay muted type='video/mp4'></video>
  </div>

  <div className='secContent container'>
  <div className='contactDiv flex'>
  <div data-aos="fade-up" className='text'>
  <small>Contáctanos</small>
  <h2>Viaja con nosotros</h2>
  </div>

  <div data-aos="fade-up"  className='inputDiv flex'>
  <input type="text" placeholder='Ingresa tu correo'/>
  <button className='btn flex' type='submit'>
   Enviar <FiSend className="icon"/>
  </button>
  </div>
  </div>

  <div className='footerCard flex'>
  <div data-aos="fade-up" className='footerIntro flex'>
  <div className='logoDiv'>
 
  <a href='#' className='logo flex'>
  <SiYourtraveldottv className='icon'/>
  Travel.</a>
  </div>

  <div className='footerParagraph'>
   Etiam erat velit scelerisque in dictum. Nunc non blandit massa enim nec dui. Accumsan sit amet nulla facilisi. Sapien pellentesque habitant morbi tristique. Cursus risus at ultrices mi tempus imperdiet. Ultrices vitae auctor eu augue ut lectus. Nam aliquam sem et tortor consequat id porta nibh venenatis. Molestie at elementum eu facilisis.
  </div>

  <div data-aos="fade-right" className='footerSocials flex'>
  <AiOutlineTwitter className="icon"/>
  <AiFillYoutube className="icon"/>
  <AiFillInstagram className="icon"/>
  <FaTripadvisor className="icon"/>
  </div>
  </div>


  <div className='footerLinks grid'>
{/* NUESTRA AGENCIA */}
  <div data-aos="fade-up" data-aos-duration="3000"  className='linkGroup'>
  <span className='groupTitle'>
  Nuestra Agencia
  </span>

  <li className='footerList flex'>
  <FiChevronRight className='icon'/>
  Servicios
  </li>

  <li className='footerList flex'>
  <FiChevronRight className='icon'/>
  Seguros
  </li>

  <li className='footerList flex'>
  <FiChevronRight className='icon'/>
  Agencia
  </li>

  <li className='footerList flex'>
  <FiChevronRight className='icon'/>
  Turismo
  </li>

  <li className='footerList flex'>
  <FiChevronRight className='icon'/>
  Pagos
  </li>

  </div>
{/* TRABAJAMOS CON */}
  <div data-aos="fade-up" data-aos-duration="4000" className='linkGroup'>
  <span className='groupTitle'>
  Trabajamos con
  </span>

  <li className='footerList flex'>
  <FiChevronRight className='icon'/>
  Booking
  </li>

  <li className='footerList flex'>
  <FiChevronRight className='icon'/>
  Renta de Autos
  </li>

  <li className='footerList flex'>
  <FiChevronRight className='icon'/>
  Trivago
  </li>

  <li className='footerList flex'>
  <FiChevronRight className='icon'/>
  HostelWorld
  </li>

  <li className='footerList flex'>
  <FiChevronRight className='icon'/>
  TripAdvisor
  </li>

  </div>
{/* POLITICAS */}
  <div data-aos="fade-up" data-aos-duration="5000"  className='linkGroup'>
  <span className='groupTitle'>
  Políticas
  </span>

  <li className='footerList flex'>
  <FiChevronRight className='icon'/>
  Privacidad
  </li>

  <li className='footerList flex'>
  <FiChevronRight className='icon'/>
  Términos de uso
  </li>

  <li className='footerList flex'>
  <FiChevronRight className='icon'/>
  Accesibilidad
  </li>

  <li className='footerList flex'>
  <FiChevronRight className='icon'/>
    FAQ
  </li>

  <li className='footerList flex'>
  <FiChevronRight className='icon'/>
  Condiciones
  </li>

  </div>
  
  </div>

  <div className='footerDiv'>
  <small>Arash Travel Company</small>
  <small>© Copyright reserved</small>
  <small>created by A.</small>
  </div>

  </div>
  </div>

  </section>
  )
}

export default Footer