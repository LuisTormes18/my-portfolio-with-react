import React from 'react'
import { animateScroll as scroll } from 'react-scroll';

import logo from './../../assets/img/logo.png';


export default function Logo() {
	return (
		 <div id="logo" className='pointer' onClick={()=>{
            	scroll.scrollToTop()
            }}>
                <img src={logo} alt='logo'/>
            </div>
	)
}