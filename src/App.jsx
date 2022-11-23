import React from 'react'
import styles from './style'

import { Navbar, About, Features, LearnMore, Testimonials, Clients, CTA, Footer, Hero } from './components'

const App = () => (
    <div className="bg-secondary text-secondary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-secondary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-secondary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Features />
          <LearnMore /> 
          <Testimonials />
          <Clients />
          <CTA /> 
          <Footer />
        </div>
      </div>

    </div>
)

export default App
