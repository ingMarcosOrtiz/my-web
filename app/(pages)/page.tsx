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
          Ingenierio de Sistemas - FullStack en Javascript{' '}
        </h2>
        <Link
          target='_blank'
          className='text-sm text-primary font-bold'
          href={'https://www.linkedin.com/in/marcos-ortiz/'}>
          https://www.linkedin.com/in/marcos-ortiz/
        </Link>

        <p className='text-sm font-mono text-gray-500 text-center mt-3'>
          Próximamente www.ingmarcos.com
        </p>
        <code className='text-sm font-mono text-gray-500 text-center mt-3'>
          sitio web actualmente en desarrollo...👨‍💻
        </code>
      </div>
    </>
  )
}
