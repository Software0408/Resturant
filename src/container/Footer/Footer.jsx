import React from 'react';
import {FooterOverlay, Newsletter} from '../../components';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import {images} from '../../constants'

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding app__bg'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Lagos, MD 101212, Nigeria</p>
        <p className='p__opensans'>+234 803 417 4125</p>
        <p className='p__opensans'>+234 810 003 9303</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="footer_logo" />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{margin: 15}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>8:00 am - 04:00 pm</p>
        <p className='p__opensans'>Saturday-Sunday:</p>
        <p className='p__opensans'>11:00 am - 03:00 pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2024 Software0408. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;