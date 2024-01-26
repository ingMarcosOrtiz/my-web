'use client'
import React from 'react'
import { useUIStore } from '@/app/store-zustand'
import Link from 'next/link'

export function Header() {
  const handleToggleClickUIStore = useUIStore(
    (state) => state.handleToggleClick
  )
  const isActiveUIStore = useUIStore((state) => state.isActive)

  return (
    <>
      <header>
        <Link href='/' className='logo'>
          Mar<span>cos</span>
        </Link>
        <div className={`toggle ${isActiveUIStore ? 'active' : ''}`}>
          <button
            onClick={handleToggleClickUIStore}
            className={`hamburguer_wrapper ${isActiveUIStore ? 'active' : ''}`}>
            <div className='hamburguer_icon'>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </header>
    </>
  )
}
