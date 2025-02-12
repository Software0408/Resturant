import React from 'react';
import {images} from '../../constants';
import { SubHeading } from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'> 
    <div className='app__wrapper_info'>
      <SubHeading title='contact' />
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className='p__cormorant' style={{color: '#DCCA*&', margin: '2rem 0'}}>Open Hours</p>
        <p className='p__opensans'>Mon - Fri: 8:00 am - 04:00 pm</p>
        <p className='p__opensans'>Sat - Sun: 11:00 am - 03:00 pm</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
