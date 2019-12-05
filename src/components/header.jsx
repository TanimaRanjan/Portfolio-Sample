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
            </nav>
    </header>

)

export default Header