import FooterLogo from "../assets/Home/Footer/footer-logo.svg"
import Call from "../assets/Home/Footer/call.svg"
import Mail from "../assets/Home/Footer/mail.svg"
import Location from "../assets/Home/Footer/location.svg"

import LinkedIn from "../assets/Home/ContactUs/LinkedinLogo.svg"

import Instagram from "../assets/Home/ContactUs/Instagram.svg"
import Facebook from "../assets/Home/ContactUs/FaceBook.svg"

const Footer = () => {
  return (
    <>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-logo-nd-para-wrap">
              <div className="footer-logo">
                <img src={FooterLogo} alt="" />
              </div>

              <p className="footer-main-para">
              At Industro Venture, we are revolutionizing the future of education and industry. Through innovation,
cutting-edge technology, and dynamic learning experiences, we empower individuals and institutions
to lead and thrive in a rapidly evolving world.

              </p>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-lg-3">
            <div className="quike-links-wrap">
              <h5 className="quike-links-tit">
              Quick Link
              </h5>
              <div className="row">
                <div className="col-sm-6">
                  <ul className="f-quike-links-list">
                    <li>
                      <a href="#AboutUs">About</a>
                    </li>
                    <li>
                      <a href="#ThinkWeDo">
                      Think We Do
                      </a>
                    </li>
                    <li>
                      <a href="#WhyUs">Why Us</a>
                    </li>
                    <li>
                      <a href="#Testimonial">Testimonial</a>
                    </li>
                    <li>
                      <a href="#Career">Career</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="f-quike-links-list">
                    <li>
                      <a href="#Blog">Blog</a>
                    </li>
                    <li>
                      <a href="#ContactUs">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-lg-3">
            <div className="footer-Contact-Us-wrap">
              <h5 className="f-Contact-Us-tit">
              Contact Us
              </h5>
              
              <ul className="f-quike-links-list">
                <li><img src={Call} alt="" /> <a href="tel:9482413670">+91 94824 13670</a></li>
                <li><img src={Mail} alt="" /> <a  href="mailto:industroventure@gmail.com">industroventure@gmail.com</a></li>
                <li><img src={Location} alt="" /> <p>Hosabasavanapura, Bangalore, karnataka</p></li>
                
              </ul>

              <div className="footer-social-media">
          <p>Follow Us On</p>
          <div className="f-social-media-wrap">
            <a href="https://www.instagram.com/industroventure/?igsh=MW9maml0cWZvajVrdg%3D%3D#" target="_blank">
            <img src={Instagram} alt="" /></a>
            <a href="https://www.facebook.com/people/Industro-Venture/pfbid0fb5KbAZg2M23BSLr9QDWNp8KRCgAWjKAZZtorHH9rjgMFeHdGc9J2LUYJdFni9dml/?mibextid=ZbWKwL" target="_blank">
            <img src={Facebook} alt="" /></a>
            <a href="https://linkedin.com/company/industro-venture/" target="_blank">
            <img src={LinkedIn} alt="" /></a>
          </div>
        </div>

            </div>
          </div>
        </div>

        
      </div>
      <p className="footer-copy-rights">Copyrights 2024    All Right Reserved Design by <a target="_blank" href="http://theateliercreation.com/">ateliercreation</a> 
        
        </p>
    </footer>
    </>
  )
}

export default Footer