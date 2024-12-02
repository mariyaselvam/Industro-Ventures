import Icon1 from '../assets/Home/ContactUs/contact-us-card-icon-1.svg'
import Icon2 from '../assets/Home/ContactUs/contact-us-card-icon-2.svg'
import Icon3 from '../assets/Home/ContactUs/contact-us-card-icon-3.svg'
import Icon4 from '../assets/Home/ContactUs/contact-us-card-icon-4.svg'
import Instagram from "../assets/Home/ContactUs/Instagram.svg"
import Facebook from "../assets/Home/ContactUs/FaceBook.svg"
import LinkedIn from "../assets/Home/ContactUs/LinkedinLogo.svg"

const ContactUs = () => {
  return (
    <>
     <section id="ContactUs" className="contact-us-sec">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                   <div className="contact-us-form-wrap">
                     <h3 className="contact-form-main-tit">
                     Get in touch with Us
                     </h3>

                     <form className="contact-form"  target="_blank" action="https://docs.google.com/forms/d/e/1FAIpQLSfOJI0Avn7_nAgEITMo5Tb0L3JxGVo29SQAzL3LM39cN6h5XA/formResponse">
                        <div className="row">
                            <div className="col-md-6">
                                <input className='first-name' name="entry.1177435181" type="text"  id="" placeholder="First Name" required />
                            </div>
                            <div className="col-md-6">
                                <input className='last-name' name="entry.1645307439" type="text"  id="" placeholder="Last Name"  required/>
                            </div>
                            <div className="col-md-12">
                            <input className='select' placeholder="Service" name="entry.61586714" id="" required />
                            
                            </div>
                            <div className="col-md-12">
                            <textarea className='textarea' name="entry.1913049083" placeholder="Message" rows="5" id=""></textarea>
                            </div>
                           
                           <div className="col-md-12">
                            <button className="contact-form-btn">
                            Send Message
                            </button>
                            </div>
                        </div>
                     </form>
                   </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-us-cont-social-links-wrap">
                      <h3 className="contact-us-cont-tit">
                      Contact Details
                      </h3>
                      <p className="contact-us-cont-main-para">Get in touch with us to explore transformative solutions for your institution or business.
Our team is here to help you navigate the future of education, innovation, and career development.
Reach out today and start your journey towards success and growth with Industro Venture.</p>

                      <div className="contact-us-cont-card-wrap">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contact-us-cont-card">
                                    <img src={Icon1} alt="" />
                                    <div className="contact-us-cont-card-cont">
                                        <h4>Call Us</h4>
                                        <p>+91 94824 13670</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contact-us-cont-card">
                                    <img src={Icon2} alt="" />
                                    <div className="contact-us-cont-card-cont">
                                        <h4>Email Us</h4>
                                        <p>industroventure@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contact-us-cont-card">
                                    <img src={Icon3} alt="" />
                                    <div className="contact-us-cont-card-cont">
                                        <h4>LinkedIn</h4>
                                        <p>Linkedin industroventures</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contact-us-cont-card">
                                    <img src={Icon4} alt="" />
                                    <div className="contact-us-cont-card-cont">
                                        <h4>Address</h4>
                                        <p>Hosabasavanapura, Bangalore, karnataka</p>
                                    </div>
                                </div>
                            </div>

                                <h5 className="social-media-tit">
                                Social Media
                                </h5>

                                <div className="social-medias-wrap">
                                    <a href="https://www.facebook.com/people/Industro-Venture/pfbid0fb5KbAZg2M23BSLr9QDWNp8KRCgAWjKAZZtorHH9rjgMFeHdGc9J2LUYJdFni9dml/?mibextid=ZbWKwL" target='_blank'>
                                        <img src={Facebook} alt="" />
                                    </a>
                                    <a href="https://www.instagram.com/industroventure/?igsh=MW9maml0cWZvajVrdg%3D%3D#" target='_blank'>
                                        <img src={Instagram} alt="" />
                                    </a>
                                    <a href="https://linkedin.com/company/industro-venture/" target='_blank'>
                                        <img src={LinkedIn} alt="" />
                                    </a>
                                </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default ContactUs