'use client'
import React, { useState } from 'react'

export default function PortafolioPage() {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }
  return (
    <div className='content_portafolio'>
      <h1>Portafolio</h1>

      <div className='tab__container'>
        <nav className='tab' id='tab'>
          <button
            className={`tab__button ${activeTab === 0 ? 'active' : ''}`}
            onClick={() => handleTabClick(0)}>
            Diseños web
          </button>
          <button
            className={`tab__button ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => handleTabClick(1)}>
            Proyectos Internacionales
          </button>
          <button
            className={`tab__button ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => handleTabClick(2)}>
            Desarrollo Fullstack
          </button>
        </nav>
      </div>
    </div>
  )
}
