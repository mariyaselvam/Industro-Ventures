
import TopImg from "../assets/Home/about-us/about-us-top.svg"
import CenterImg from "../assets/Home/about-us/about-us-center.png"
import BottomImg from "../assets/Home/about-us/about-us-bottom.png"
import { Link } from "react-router-dom"

const AboutUs = () => {
  return (
    <>
    <section id="AboutUs" className="about-us-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                   <div className="about-us-hole-content">
                    <span data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" className="about-us-mini-tit">
                    ABOUT US
                    </span>
                    <h2 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300" className="about-us-main-tit">
                    At Industro Ventures, we believe
                    education isn’t just about learning
                    </h2>

                    <p data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500"  className="about-us-para">
                    At Industro Venture, we are leading the transformation of education by blending cutting-edge
                    technology with community-driven passion. Our focus is on redefining how education meets
                    industry, creating pathways where students excel, institutions grow, and innovation thrives.
                    </p>

                    <div className="about-visition-nd-misition">
                        <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="700"  className="about-visition-nd-misition-card">
                            <h4  className="about-visition-tit">
                            Our Vision
                            </h4>
                            <p className="about-visition-nd-misition-para">To inspire and empower the next generation with the skills, resources, and environments needed to
                            lead in a rapidly evolving world.</p>
                        </div>
                        <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="800"  className="about-visition-nd-misition-card">
                            <h4 className="about-mistion-tit">
                            Our Mission
                            </h4>
                            <p className="about-visition-nd-misition-para">To equip learners with the tools and opportunities that foster success, creativity, and lasting impact,
                            driving innovation across industries and communities.</p>
                        </div>
                    </div>

                    <Link data-aos="fade-in" data-aos-duration="1000" data-aos-delay="800" className="about-us-btn" to="/AboutUsPage">
                    Read More
                    </Link>
                </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-us-main-imgs-wrap">
                        <div className="about-us-main-imgs-cont">
                            <img width="67" height="67" src={TopImg} alt="" />

                            <span>Innovative
                            Ecosystems</span>
                        </div>

                        <div className="about-us-main-center-img">
                           <img src={CenterImg} alt="" />
                        </div>
                        
                        <div className="about-us-main-buttom-img">
                             <img width="388" height="222" src={BottomImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutUs