import React from 'react'

import './gallery-item.scss'


const GalleryItem  = (props) =>  {

            let rowspan = (Math.floor((props.height ) / (10))) + 2;

            let galleryItemStyle = {
                gridRow:`span ${rowspan}`
            }
        return (
        
            <div className='gallery-item' style={galleryItemStyle} >
            <img className='gallery-image'
                src={props.source} 
                alt='grid item' 
                onClick={() => props.handleClick(props.source)}
                />
                <div className='space'>&nbsp;</div>
            </div>   
        )    
    
}
export default GalleryItem