import React from 'react'
import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import Universities from './sections/Universities'
import HackathonInsights from './sections/HackathonInsights'
import Footer from './sections/Footer'

const App:React.FC = () => {
  return (
    <main className='relative font-proxon'>
      <NavBar/>
      <section>
        <Hero/>
      </section>
      <section>
        <Universities/>
      </section>
      <section>
      <HackathonInsights/>
      </section>
      <section>
        <Footer/>
      </section>

    </main>
  )
}

export default App