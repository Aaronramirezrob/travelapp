import React, {useEffect} from 'react';
import "./main.css";
import data from "../../data/index.js";
import {HiOutlineLocationMarker, HiOutlineClipboardCheck} from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    Aos.init({duration: 1300})
  }, [])


  return (
    <section className='main container section'>
    <div className='secTitle'>
    <h3 data-aos="fade-right" className='title'>Destinos más visitados</h3>
    </div>

    <div className='secContent grid'>
    {data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
      return(
        <div key={id} data-aos="fade-up" className='singleDestination'>
        <div className='imageDiv'>
        <img src={imgSrc} alt={destTitle}/>
        </div>

        <div className='cardInfo'>
        <h4 className='destTitle'>
        {destTitle}
        </h4>
        <span className='continent flex'>
        <HiOutlineLocationMarker className='icon'/>
        <span className='name'>{location}</span>
        </span>

        <div className='fees flex'>
        <div className='grade'>
        <span>{grade}<small>+1</small></span>
        </div>
        <div className='price'>
        <h5>{fees}</h5>
        </div>
        </div>

        <div className='desc'>
        <p>{description}</p>
        </div>

        <button className='btn flex'>
        Detalles <HiOutlineClipboardCheck className='icon'/>
        </button>
        </div>
        </div>
      )
    })}
    </div>

    </section>
  )
}

export default Main