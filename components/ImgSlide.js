import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';

function ImgSlide() {
  return (
    //max-w-screen-2xl
    <section className='relatie mt-7 shadow-2xl max-w-screen-2xl mx-auto'> 
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={3000}
        >
            {/* <div>
                <Image loading='lazy' src='/images/slider01.jpg' alt='' />
            </div> */}
            <div>
                <img loading='lazy' src='/images/slider01.jpg' alt='' />
            </div>
            <div>
                <img loading='lazy' src='/images/slider02.jpg' alt='' />
            </div>
            <div>
                <img loading='lazy' src='/images/slider03.jpg' alt='' />
            </div>
            <div>
                <img loading='lazy' src='/images/slider04.jpg' alt='' />
            </div>

        </Carousel>
    </section>
  )
}

export default ImgSlide