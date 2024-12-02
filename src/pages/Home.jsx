import AboutUs from "../components/AboutUs"
import Banner from "../components/Banner"
import Blogs from "../components/Blogs"
import ClientFeedback from "../components/ClientFeedback"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"
import Header from "../components/Header"
import JoinUs from "../components/JoinUs"
import WhatWeDo from "../components/WhatWeDo"
import WhyChoseUs from "../components/WhyChoseUs"
import ParticlesComponent from "../js/particles"


const Home = () => {

  return (
    <>
    
    <div className="page-wraper">
    <Header />
    <div  className="banner-nd-about-wraper">
    <ParticlesComponent id="particles" />
    <Banner />
    <AboutUs />
    </div>
    <WhatWeDo />
    <WhyChoseUs />
    <ClientFeedback />
    <JoinUs />
    <Blogs  />
    <ContactUs />
    <Footer />
    </div>
    </>
  )
}

export default Home