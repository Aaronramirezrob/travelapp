import React,{useEffect, useState} from 'react';
import "./home.css";
import video from "../../Assets/ocean-65560.mp4";
import {GrLocation} from "react-icons/gr";
import {HiFilter} from "react-icons/hi";
import {FiFacebook} from "react-icons/fi";
import {AiOutlineInstagram} from "react-icons/ai";
import {FaTripadvisor} from "react-icons/fa";
import {BsListTask} from "react-icons/bs";
import {TbApps} from "react-icons/tb";

import Aos from "aos";
import "aos/dist/aos.css";

import {Slider, RangeSlider, Row, Col, InputGroup, InputNumber} from "rsuite";

const Home = () => {
  useEffect(() => {
    Aos.init({duration: 1400})
  }, [])

  function PriceSlider() {
    const [value, setValue] = React.useState(0);
    return (
      <Row>
        <Col md={10}>
          <Slider
            progress
            style={{ marginTop: 16 }}
            value={value}
            onChange={value => {
              setValue(value);
            }}
          />
        </Col>
        <Col md={4}>
          <InputNumber
            min={0}
            max={100}
            value={value}
            onChange={value => {
              setValue(value);
            }}
          />
        </Col>
      </Row>
    );
  }


  return (
    <section className='home'>
    <div className='overlay'></div>
    <video src={video} muted autoPlay loop type="video/mp4"></video>

    <div className='homeContent container'>
    <div data-aos="fade-up" className='textDiv'>
    
    <span  className='smallText'>
    Nuestros paquetes
    </span>

    <h1  className='homeTitle'>
    Ingresa tu destino
    </h1>

    </div>

    <div data-aos="fade-up" className='cardDiv grid'>
    <div className='destinationInput'>
    <label htmlFor='city'>Busca tu destino:</label>
    <div className='input flex'>
    <input type="text" placeholder='Ingresa el nombre aqui...'/>
    <GrLocation className='icon'/>
    </div>
    </div>

    <div className='dateInput'>
    <label htmlFor='date'>Selecciona una fecha:</label>
    <div className='input flex'>
    <input type="date" />
    </div>
    </div>

    <div className='priceInput'>
    <div className='label_total flex'>
    <label htmlFor='price'>Limite de precios: </label>
    </div>
    <div className='input flex'>
      {PriceSlider}
    </div>
    </div>

    <div className='searchOptions flex'>
    <HiFilter className="icon"/>
    <span>Filtros</span>
    </div>

    </div>
    <div data-aos="fade-up" className='homeFooterIcons flex'>
    <div className='rightIcons'>
    <FiFacebook className="icon"/>
    <AiOutlineInstagram className="icon"/>
    <FaTripadvisor className="icon"/>
    </div>

    <div className='leftIcons'>
    <BsListTask className="icon"/>
    <TbApps className="icon"/>
    </div>
    </div>

    </div>
    </section>
  )
}

export default Home