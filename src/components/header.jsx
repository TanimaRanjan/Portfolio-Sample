import React from 'react'

import './header.scss'

const Header = (props) => (

    <header id='home' className='header' >
        {/******************
           * Header 
           * ** Nav 
           * ** ** Logo 
           * ** ** Nav span
           * ** ** ** Design
           * ** ** ** Photography
           ******************/}
           
           <nav className='nav'>
            <div className='nav__space'>&nbsp;</div>
            <div className='nav__main'>
                <span id='logo' className='nav__logo' onClick={() => props.handleSelection('')}>Jamaal Nelson</span>
                <span className='nav__span'>
                    <h1 
                        className='nav__header' 
                        onClick={() => props.handleSelection('design')}
                        >Design</h1>
                    <h1 
                        className='nav__header' 
                        onClick={() => props.handleSelection('photography')}
                        >Photography</h1>   
                </span>
            </div>
            <div className='nav__space'>&nbsp;</div>
            </nav>
    </header>

)

export default Header