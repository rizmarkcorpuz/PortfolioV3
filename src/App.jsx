import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Process from './components/Process'
import Skills from './components/Skills'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="hero-bg" />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Process />
      <Skills />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
