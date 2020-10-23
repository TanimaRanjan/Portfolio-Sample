import React , { useState, useEffect } from 'react'

import AOS from 'aos';
import { Watch } from 'scrollmonitor-react';

import 'aos/dist/aos.css';

const placeHolder = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
const LazyImage = ({src, handleClick}) => {

    const [imgSrc, setImgSrc] = useState(placeHolder)
    const [imgRef, setImgRef] = useState()

    const onLoad = event => event.target.classList.add('loaded')
     
    AOS.init({
    duration:1000
    });
    AOS.refresh()
    useEffect(() => {
    // this.aos = AOS;
        AOS.init({
        duration:1000,
        easing:"ease-in-back",
        offset:0
        });
        AOS.refresh()
    
    }, [])

    useEffect(() => {
        let observer
        let didCancel = false

        if(imgRef && imgSrc !== src) {
            if(IntersectionObserver)  {
                observer = new IntersectionObserver(
                    entries => {
                        entries.forEach(entry => {
                            if(!didCancel && (entry.intersectionRatio > 0 ||
                                entry.isIntersecting))
                                {
                                    setImgSrc(src)
                                    observer.unobserve(imgRef)
                                }
                        })
                    },
                    {
                        threshold:0.01, 
                        rootMargin:"25%"
                    }
                )
                observer.observe(imgRef)
            } else {

                // Fallback for old browser
                setImgSrc(src)
            }
        }

        return () => {
            didCancel = true
            if(observer && observer.unobserve) { 
                observer.unobserve(imgRef)
            }
        }

    }, [src,imgRef, imgSrc])


    return (

       <figure  className="item gallery__img" data-aos='fade-zoom-in'>
            <img className='gallery-image'
            ref={setImgRef}
            src={imgSrc} 
            alt='grid item' 
            onClick={() => handleClick(imgSrc)}
            />
        </figure>
    )
  }

  export default Watch(LazyImage)


//   <img 
//   ref={setImgRef}
//   src={imgSrc} 
//   onLoad={onLoad}
//   alt={alt}></img>
//   <figcaption>{index} - {alt}</figcaption>