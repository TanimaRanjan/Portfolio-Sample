import React from 'react'

import GalleryItem from './gallery-item'

import './gallery.scss'


class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items : [
                {
                    id:1, "source": "./images/pic1_d.jpg", 
                    "height": 522, "width": 400, "category":"design"}, 
                {
                    id:2,"source": "./images/pic1_p.jpg", 
                    "height": 214, "width": 400, "category":"photography"}, 

                {
                    id:4,"source": "./images/pic2_p.jpg", 
                    "height": 250, "width": 400, "category":"photography"}, 
                {
                    id:5,"source": "./images/pic3_d.jpg",
                     "height": 303, "width": 400, "category":"design"}, 
                {
                    id:6,"source": "./images/pic3_p.jpg", 
                    "height": 299, "width": 400, "category":"photography"}, 
                {
                    id:7,"source": "./images/pic4_d.jpg",
                     "height": 303, "width": 400, "category":"design"}, 
                {
                    id:8,"source": "./images/pic4_p.jpg", 
                    "height": 264, "width": 400, "category":"photography"}, 
                {
                    id:9, "source": "./images/pic5_d.jpg", 
                    "height": 303, "width": 400, "category":"design"}, 
                {
                    id:10, "source": "./images/pic5_p.jpg", 
                    "height": 390, "width": 400, "category":"photography"}, 
                {
                    id:11, "source": "./images/pic6_d.jpg", 
                    "height": 574, "width": 400, "category":"design"}, 
                {
                    id:12, "source": "./images/pic6_p.jpg", 
                    "height": 266, "width": 400, "category":"photography"}, 
                {
                    id:13, "source": "./images/pic7_d.jpg", 
                    "height": 679, "width": 400, "category":"design"}, 
                {
                    id:14, "source": "./images/pic8_p.jpg", 
                    "height": 279, "width": 400, "category":"photography"}, 
                {
                    id:15, "source": "./images/pic8_d.jpg", 
                    "height": 713, "width": 400, "category":"design"},    
                {
                    id:16, "source": "./images/pic7_p.jpg", 
                    "height": 220, "width": 400, "category":"photography"},    
                {
                    id:17, "source": "./images/pic9_d.jpg", 
                    "height": 479, "width": 400, "category":"design"},    
                {
                    id:18, "source": "./images/pic9_p.jpg", 
                    "height": 266, "width": 400, "category":"photography"},    
                {
                    id:19, "source": "./images/pic10_d.jpg", 
                    "height": 347, "width": 400, "category":"design"},
                {
                    id:20, "source": "./images/pic10_p.jpg", 
                    "height": 400, "width": 400, "category":"photography"},
                {
                    id:21, "source": "./images/pic11_d.jpg", 
                    "height": 347, "width": 400, "category":"design"},  
                {
                    id:22, "source": "./images/pic12_d.jpg", 
                     "height": 690, "width": 400, "category":"design"},
                    {
                        id:3,"source": "./images/pic2_d.jpg", 
                        "height": 303, "width": 400, "category":"design"}, 
            ],
             open:false,
             design_photo:'',
             classlist:'gallery__detail'
             
        }
    }
    handleClick = (src) => {
        this.setState({
            detail_image:src,
            open:!this.state.open,
            classlist:'gallery__detail zoomIn'
        })
    }


    toggleImage = () => {
        this.setState({
            classlist:'gallery__detail zoomOut'
        })

        setTimeout(() => { 
            this.setState({
                open:!this.state.open
            })
        }, 300);
        
    }

    
    render () {

        let filteredList = this.state.items.filter((item) => {
            return item.category.includes(this.props.selected)
 
        })

         let styleClass = this.state.open ? {
             overflowY:`hidden`,
        } : {  
        }
        return (
            <div>
                <div className={`gallery`}  style={styleClass}>
                {filteredList.map((item) => (
                    <GalleryItem key={item.id} {...item} handleClick={this.handleClick} />
                ))}
                </div>
                {this.state.open && 
                    <div className={this.state.classlist} 
                        onClick={this.toggleImage}
                        >
                        <figure className='gallery__item'  >
                            <img 
                                className='gallery__image' 
                                src={this.state.detail_image} 
                                alt='Cover' 
                                >
                            </img>
                        </figure>
                    </div>
                }
            </div>
        )
    }
}
export default Gallery