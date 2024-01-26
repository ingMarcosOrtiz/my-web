import React from 'react'
import Image from 'next/image'
import images from '@/app/assets/images'

export function Footer() {
  return (
    <>
      <ul className='sci'>
        <li>
          <a href='#'>
            <Image src={images.IconInstagram} alt='iIconInstagram' />
          </a>
        </li>
        <li>
          <a href='#'>
            <Image src={images.IconLinkedin} alt='IconLinkedin' />
          </a>
        </li>
        <li>
          <a href='#'>
            <Image src={images.IconGithub} alt='IconGithub' />
          </a>
        </li>
      </ul>
    </>
  )
}
