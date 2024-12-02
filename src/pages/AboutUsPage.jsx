import Footer from "../components/Footer"
import Header from "../components/Header"
import { useEffect } from "react"

const AboutUsPage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
    <Header />
    <div className="about-us-page-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                     <h2 className="abt-main-tit">
                     Empowering Careers, Transforming Education, and Revolutionizing
                     Workplaces
                     </h2>

                     <p>At <b>Industro Venture</b>, we are committed to bridging the gap between education, career
development, and the corporate world. Our innovative solutions provide individuals,
businesses, and educational institutions with the tools and support they need to excel
in a fast-changing global landscape. We focus on building the future workforce through
cutting-edge Career & Placement Training, Corporate Training, Campus 360 Solutions,
and Ignite Hubs & Labs.</p>

<p>Our services are designed to empower individuals with essential skills, foster
collaboration, and enhance learning environments. Whether you’re a student entering
the workforce, a business striving to upskill your employees, or an institution looking to
modernize your campus, we are here to help you succeed. We believe in the power of
lifelong learning, innovation, and professional growth to create a positive impact on the
world.</p>

                   <h4 className="abt-small-tit">
                     Our Vision
                     </h4>

                     <p>We envision a future where individuals, businesses, and institutions are equipped with
the knowledge and skills to succeed in an increasingly digital world. By providing worldclass training and innovative solutions, we aim to empower students, foster innovation
in businesses, and help educational institutions create vibrant, eNective learning
environments.</p>

                    <h4 className="abt-small-tit">
                    Our Mission
                     </h4>
                     <p>Our mission is to revolutionize career development, corporate training, and educational
                     spaces through personalized, innovative, and technology-driven services. We aim to:</p>

                     <ul className="blog-cont-points">
                       <li>Equip individuals with the skills needed to succeed in their careers through
                       specialized training and mentorship.</li>
                       <li>Help businesses build agile, high-performing teams through tailored corporate
training programs.
</li>
                       <li>Transform educational institutions with Campus 360 solutions that improve
                       campus life and operational eNiciency.</li>
                       <li>Create collaborative Ignite Hubs & Labs that foster innovation and inspire the
                       next generation of leaders.</li>
                    </ul>

                    <h4 className="abt-main-tit">
                    Why Choose Industro Venture?
                     </h4>

                    <h4 className="abt-small-tit">
                    Industry-Leading Expertise
                     </h4>
                     <p>Our team of highly skilled, industry-certified trainers ensures every program
                     meets the highest standards, delivering impactful and eNective results.</p>

                     <h4 className="abt-small-tit">
                     Trust and Reliability
                     </h4>
                     <p>We build lasting relationships by prioritizing transparency, loyalty, and
consistency, making us a trusted partner for all your growth and development
needs.</p>

<h4 className="abt-small-tit">
Innovative and Visionary
                     </h4>
                     <p>With a mission to drive transformation, we’re committed to reimagining
education and professional development, staying ahead of the curve with
forward-thinking solutions.</p>

<h4 className="abt-small-tit">
Tailored Flexibility for All Clients
                     </h4>
                     <p>Whether you’re a startup or a leading institution, we adapt to your specific
needs, providing solutions that fit all budgets while delivering exceptional quality
and value.</p>


                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default AboutUsPage