import React from 'react'
import { Header } from '../../components/Header/Header'
import { Hero } from '../../components/Hero/Hero'
import { Services } from '../../components/Services/Services'
import { Experience } from '../../components/Experience/Experience'
import { Mision } from '../../components/Mision/Mision'
import { Contact } from '../../components/Contact/Contact'
import './Main.scss'

function Main () {
  return (
    <>
      <main className='main page'>
        <Header />
        <Hero />
        <Services />
        <Experience />
        <Mision />
        <Contact />
      </main>
    </>
  )
}

export { Main }
