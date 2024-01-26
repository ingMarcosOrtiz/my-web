import React from 'react'
import Link from 'next/link'
import { useUIStore } from '@/app/store-zustand'

export function Menu() {
  const handleToggleClickUIStore = useUIStore(
    (state) => state.handleToggleClick
  )
  return (
    <>
      <ul className='menu'>
        <li>
          <Link href='/' onClick={handleToggleClickUIStore}>
            Inicio{' '}
          </Link>
        </li>
        <li>
          <a href='#' onClick={handleToggleClickUIStore}>
            Acerca de mi
          </a>
        </li>
        <li>
          <Link href='/portafolio' onClick={handleToggleClickUIStore}>
            Portafolio{' '}
          </Link>
        </li>
        <li>
          <a href='#' onClick={handleToggleClickUIStore}>
            Galerias
          </a>
        </li>
        <li>
          <a href='#' onClick={handleToggleClickUIStore}>
            Contactame
          </a>
        </li>
      </ul>
    </>
  )
}
