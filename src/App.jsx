
import './App.css'


import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Products from "./components/Products"
import Banner from "./components/Banner"
import Roadmap from "./components/Roadmap"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import Navbar from './components/Navbar/Navbar'
import Features from './components/Features/Features'
import JoinSection from './components/JoinSection/JoinSection'

function App() {
  return (
    <>
      <Navbar />
      
      <Hero />
      <Features />
      <JoinSection/>
      <Intro />
      <Products />
      <Banner />
      <Roadmap />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App