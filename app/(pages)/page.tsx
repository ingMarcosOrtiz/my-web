import React from 'react'

export default function HomePage() {
  return (
    <>
      <div className='contentBx'>
        <h4>Hello,</h4>
        <h2>
          {`I'm`} <span>Marcos Ortiz</span>
        </h2>
        <h3>Frontend Developer (Ui)</h3>
        <p>
          Ingeniero de Sistemas - FullStack en Javascript. Especializado en el
          desarrollo de interfaces de usuario (UI) y frontend. Experiencia en
          tecnologia como React.js, Next.js, React Native, laravel - Blade,
          Figma, Sass, y CSS, Aunque he trabajado en proyectos que utilizan
          bibliotecas UI como Material UI, Tailwind, Bootstrap, IU semántica,
          etc.., Me inclino hacia la creación de interfaces de usuario mediante
          código nativo, dando especial importancia a CSS. Mi página web
          personal es un testimonio de esta preferencia, ya que todas las
          interfaces están diseñadas y desarrolladas exclusivamente con CSS.
        </p>
        <a href='#'>Hire Me</a>
        <a href='#'>Download CV</a>
      </div>
    </>
  )
}
