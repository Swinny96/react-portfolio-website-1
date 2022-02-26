import React from "react"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Experince from "./components/Experince/Experince"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Nav from "./components/Navigation/Nav"
import Portfolio from "./components/Portfolio/Portfolio"
import Services from "./components/Services/Services"
import Testimonials from "./components/Testimonials/Testimonials"

const App = () => {
    return (
        <>
           <Header />
           <Nav />
           <About />
           <Experince />
           <Services />
           <Portfolio />
           <Testimonials />
           <Contact />
           <Footer />
        </>
    )
}

export default App