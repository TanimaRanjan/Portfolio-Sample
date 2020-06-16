import React from 'react'

import LazyImage from './lazy-images'

import './gallery-item.scss'


const GalleryItem  = (props) =>  {

            let rowspan = (Math.floor((props.height ) / (10))) + 2;

            let galleryItemStyle = {
                gridRow:`span ${rowspan}`
            }
        return (
        
            <div className='gallery-item' style={galleryItemStyle} >
            <LazyImage className='gallery-image'
                src={props.source} 
                alt='grid item' 
                handleClick={props.handleClick}
                ></LazyImage>
                <div className='space'>&nbsp;</div>
            </div>   
        )    
    
}
export default GalleryItem