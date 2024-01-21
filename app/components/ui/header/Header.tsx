import React from 'react'

export function Header() {
  const menuItems = [
    'Inicio',
    'Sobre mí',
    'Servicios',
    'Portafolio',
    'Blog',
    'Contacto',
  ]
  return (
    <>
      <nav className=' p-4 w-full flex flex-row justify-between items-center'>
        <span className='text-3xl font-bold'>
          Mar<span className='text-primary'>cos</span>
        </span>
        <ul className='flex space-x-4'>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href='#' className=' hover:text-primary'>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
