import Image from 'next/legacy/image'
import React from 'react'

function Brands() {
  return (
    <section className='flex flex-col cusmd:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto'>
        <div className='brand group'>
            <Image src="/images/viewers-disney.png" layout='fill' objectFit='cover'/>
            <video autoPlay loop playsInline muted={true} className='hidden group-hover:inline rounded-lg object-cover'>
                <source src="/videos/disney-vid.mp4" type='video/mp4' />
            </video>
        </div>
        <div className='brand group'>
            <Image src="/images/viewers-marvel.png" layout='fill' objectFit='cover'/>
            <video autoPlay loop playsInline muted={true} className='hidden group-hover:inline rounded-lg object-cover'>
                <source src="/videos/marvel-vid.mp4" type='video/mp4' />
            </video>
        </div>
        <div className='brand group'>
            <Image src="/images/viewers-national.png" layout='fill' objectFit='cover'/>
            <video autoPlay loop playsInline muted={true} className='hidden group-hover:inline rounded-lg object-cover'>
                <source src="/videos/ngeo-vid.mp4" type='video/mp4' />
            </video>
        </div>
        <div className='brand group'>
            <Image src="/images/viewers-pixar.png" layout='fill' objectFit='cover'/>
            <video autoPlay loop playsInline muted={true} className='hidden group-hover:inline rounded-lg object-cover'>
                <source src="/videos/pixar-vid.mp4" type='video/mp4' />
            </video>
        </div>
        <div className='brand group'>
            <Image src="/images/viewers-starwars.png" layout='fill' objectFit='cover'/>
            <video autoPlay loop playsInline muted={true} className='hidden group-hover:inline rounded-lg object-cover'>
                <source src="/videos/star-wars-vid.mp4" type='video/mp4' />
            </video>
        </div>

    </section>
  )
}

export default Brands