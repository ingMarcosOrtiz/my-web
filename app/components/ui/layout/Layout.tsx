'use client'
import React from 'react'
import Image from 'next/image'
import images from '@/app/assets/images'
import { Footer, Header, Menu } from '@/app/components'
import { useUIStore } from '@/app/store-zustand'
import { usePathname } from 'next/navigation'

export function Layout({ children }: { children: React.ReactNode }) {
  const isActiveUIStore = useUIStore((state) => state.isActive)

  const pathName = usePathname()

  return (
    <>
      <section className={`banner ${isActiveUIStore ? 'active' : ''}`}>
        <Header />
        <div
          className={`circle_yellow ${
            pathName === '/portafolio' ? 'opacity-5' : 'opacity-100'
          }`}></div>
        <Header />
        <Image
          className={`imgMarcos ${
            pathName === '/portafolio' && !isActiveUIStore
              ? 'opacity-0'
              : 'opacity-100'
          }`}
          width={200}
          height={200}
          src={images.ImgMarcosPng}
          alt='img-marcos'
          priority={true}
        />
        {/* <div className={`circle_yellow `}></div>
        <Image
          className={`imgMarcos`}
          width={200}
          height={200}
          src={images.ImgMarcosPng}
          alt='img-marcos'
          priority={true}
        /> */}
        <div className='content'>{children}</div>

        <Menu />
        <Footer />
      </section>
    </>
  )
}
