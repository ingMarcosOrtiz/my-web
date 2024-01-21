'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import images from '@/app/assets/images'
import Link from 'next/link'

export default function HomePage() {
  const [isActive, setIsActive] = useState(false)

  const handleToggleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <>
      {/* <div className='flex items-center justify-center flex-col'>
        <Image
          loading='lazy'
          width={200}
          height={200}
          src={images.ImgMarcos}
          alt='logo-Valparaiso'
        />
        <h1 className='text-2xl font-bold'>Marcos Ortz</h1>
        <h2 className='text-base font-medium text-gray-500 text-center '>
          Ingeniero de Sistemas - FullStack en Javascript{' '}
        </h2>
        <Link
          target='_blank'
          className='text-sm text-dark-font-color font-bold text-primary'
          href={'https://www.linkedin.com/in/marcos-ortiz/'}>
          https://www.linkedin.com/in/marcos-ortiz/
        </Link>

        <p className='text-sm font-mono text-gray-500 text-center mt-3'>
          Próximamente www.ingmarcosortiz.com
        </p>
        <code className='text-sm font-mono text-gray-500 text-center mt-3'>
          sitio web actualmente en desarrollo...👨‍💻
        </code>
        <h1
          className={`${pt_Sans_Caption.className} text-4xl md:text-6xl font-bold text-black/80 `}>
          {`Marcos Ortiz`}
        </h1>
        <h1 className={`${pt_Sans_Caption.className} text-3xl text-gray-700`}>
          Ingeniero de Sistemas - FullStack en Javascript
        </h1>
        <p
          className={`${pt_Sans_Caption.className} text-black/75  text-center sm:text-left`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          quod accusamus accusantium voluptas autem doloribus?
        </p>
        
      </div> */}
      <section className={`banner ${isActive ? 'active' : ''}`}>
        <header>
          <a href='#' className='logo'>
            Mar<span>cos</span>
          </a>
          <div className={`toggle ${isActive ? 'active' : ''}`}>
            <button
              onClick={handleToggleClick}
              className={`hamburguer_wrapper ${isActive ? 'active' : ''}`}>
              <div className='hamburguer_icon'>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </header>
        <Image
          className='imgMarcos'
          loading='lazy'
          width={200}
          height={200}
          src={images.ImgMarcosPng}
          alt='img-marcos'
        />
      </section>
    </>
  )
}
