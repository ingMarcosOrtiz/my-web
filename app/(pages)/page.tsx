import React from 'react'
import Image from 'next/image'
import images from '@/app/assets/images'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <div className='flex items-center justify-center flex-col'>
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
          Próximamente www.ingmarcos.com
        </p>
        <code className='text-sm font-mono text-gray-500 text-center mt-3'>
          sitio web actualmente en desarrollo...👨‍💻
        </code>

        {/* <div
          className='badge-base LI-profile-badge'
          data-locale='es_ES'
          data-size='large'
          data-theme='dark'
          data-type='VERTICAL'
          data-vanity='marcos-ortiz'
          data-version='v1'>
          <a
            className='badge-base__link LI-simple-link'
            href='https://co.linkedin.com/in/marcos-ortiz?trk=profile-badge'>
            Marcos Ortiz
          </a>
        </div> */}
      </div>
    </>
  )
}
