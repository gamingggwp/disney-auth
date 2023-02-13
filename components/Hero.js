import React from 'react'
import Image from 'next/image';
import Head from 'next/head';

function Hero() {
  return (
    <section>
      <Head>
        <title>Log in | Disney</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='relative min-h-[calc(100vh-72px)]'>
        <Image
          src="/images/login-background.jpg"
          fill
          style={{objectFit: "cover"}}
        />
      </div>
      <div className='flex justify-center items-center'>
        <div className=' absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auto p-8 -mt-16'>
          <Image src="/images/cta-logo-one.svg"
            width="600"
            height="150"
            style={{objectFit: "contain"}}
          />
          <button className='bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded hover:bg-[#0485ee]'>Get all there</button>
          <p className='text-xs text-center'>
            {" "}
            Get Premier Access to latest movies and series for an additional fee with a Disney+ subscription.
          </p>
          <Image src="/images/cta-logo-two.png"
            width="600"
            height="70"
            style={{objectFit: "contain"}}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero