import CardImg1 from '../assets/Home/Think-we-do/what-we-do-icon-1.svg'
import CardImg2 from '../assets/Home/Think-we-do/what-we-do-icon-2.svg'
import CardImg3 from '../assets/Home/Think-we-do/what-we-do-icon-3.svg'
import CardImg4 from '../assets/Home/Think-we-do/what-we-do-icon-4.svg'
import CardImg5 from '../assets/Home/Think-we-do/what-we-do-icon-5.svg'

const WhatWeDo = () => {
  return (
    <>
    <section id="ThinkWeDo" className="what-we-do-sec">
        <div className="container">
            <div className="row">
               <div className="col-xl-4 col-lg-6">
                    <div className="what-we-do-tit-wrap">
                        <h3 className="what-we-main-do">
                        Think we do
                        </h3>

                        <p className="what-we-main-para">
                        Transforming Learning into Leadership Through Career, Corporate, and Industry Opportunities.
                        </p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="what-we-do-card">
                        <div className="what-we-do-card-tit-nd-icon">
                            <img src={CardImg1} alt="" />
                            <h4 className="what-we-do-card-tit">
                            Career Development & Placement Training
                            </h4>
                        </div>
                        <p className="what-we-do-card-para">Unlock your full potential with our comprehensive career development programs across a wide
                         range of domains. From cutting-edge fields like AI/ML, Cybersecurity, Data Analytics, and IoT, to
                         essential soft skills and professional development, we offer training that equips you for the demands
                         of tomorrow’s workforce. Designed and delivered by industry experts, our curriculum ensures that
                         students are not only prepared to meet the ever-changing market demands but are also empowered
                         to shape the future of their industries. Through hands-on learning, mentorship, and real-world
                         experiences, we guide individuals on their path to success, providing the skills and confidence to
                         excel in their careers. </p>

                        <span className="what-we-do-card-span" >Explore Career Training </span>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="what-we-do-card">
                        <div className="what-we-do-card-tit-nd-icon">
                            <img src={CardImg2} alt="" />
                            <h4 className="what-we-do-card-tit">
                            Corporate Training
                            </h4>
                        </div>
                        <p className="what-we-do-card-para">Stay ahead in today’s dynamic business environment with our comprehensive corporate training
solutions, designed for professionals and enterprises across various industries. From core
technologies like Python and Kubernetes to emerging fields such as AI, cybersecurity, and blockchain,
we offer expert-led training in nearly every domain. Our programs are flexible, catering to both
online and offline formats, ensuring that businesses can access the best learning experiences
regardless of location. We take a forward-thinking approach, continuously adopting the latest, highdemand technologies to help organizations stay ahead of the curve. Whether it’s upskilling teams,
implementing new technologies, or driving organizational growth, our corporate training programs
are designed to deliver tangible results and maintain competitiveness in an ever-evolving landscape.</p>

                        <span className="what-we-do-card-span" >Upskill Your Workforce </span>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="what-we-do-card">
                        <div className="what-we-do-card-tit-nd-icon">
                            <img src={CardImg3} alt="" />
                            <h4 className="what-we-do-card-tit">
                            Ignite Hubs & Ignite Labs
                            </h4>
                        </div>
                        <p className="what-we-do-card-para">Transforming education through industry-specific communities and state-of-the-art labs, Ignite Hubs
& Ignite Labs serve as innovation hubs where students, educators, and professionals come together
to solve real-world challenges. These spaces are designed to encourage collaboration, foster
creativity, and drive hands-on learning, bridging the gap between academia and industry. By
integrating cutting-edge technology and providing access to advanced tools, our labs equip students
with practical experience, enabling them to apply classroom knowledge to solve complex problems.
Whether it's AI, cybersecurity, or other tech-driven fields, these labs provide the environment for
students to experiment, innovate, and prepare to lead in their chosen careers. In our Ignite Hubs,
students join vibrant communities focused on entrepreneurship, skill-building, and industry-driven
projects, fostering a culture of collaboration that prepares the leaders of tomorrow.
</p>

                        <span className="what-we-do-card-span" >Discover Ignite Labs </span>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="what-we-do-card">
                        <div className="what-we-do-card-tit-nd-icon">
                            <img src={CardImg4} alt="" />
                            <h4 className="what-we-do-card-tit">
                            Campus 360 Solutions
                            </h4>
                        </div>
                        <p className="what-we-do-card-para">Reimagine the future of education with our comprehensive Campus 360 Solutions, designed to
                        transform your institution into a cutting-edge hub of learning and innovation. From state-of-the-art
                        ERP systems that streamline administration to digital classrooms equipped with the latest
                        technology, we help elevate every aspect of campus life. Our innovative curriculum designs are
                        crafted to meet global standards, ensuring your institution provides a world-class educational
                        experience. Whether you are a Tier 2 or Tier 3 institution, we specialize in enhancing your
                        capabilities to match international benchmarks, empowering your students and faculty with the
                        tools they need to thrive in today’s digital-first world. With Campus 360 Solutions, we don’t just
                        improve education—we reshape it for a smarter, more connected future.</p>

                        <span className="what-we-do-card-span">Transform Your Campus</span>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="what-we-do-card">
                        <div className="what-we-do-card-tit-nd-icon">
                            <img src={CardImg5} alt="" />
                            <h4 className="what-we-do-card-tit">
                            Internship Opportunities
                            </h4>
                        </div>
                        <p className="what-we-do-card-para">Bridge the gap between academics and industry with our exclusive internship programs, designed
                         to provide students with hands-on experience in top companies across a range of industries. We
                         recruit and connect talented individuals with leading organizations, offering career-defining
                         opportunities that enable students to work on real-world projects, gain expert mentorship, and
                         develop skills that are highly sought after by employers. From technology and engineering to
                         business and marketing, our internships span various domains, ensuring that every participant
                         gains valuable exposure and insights into their chosen field. With our support, students not only
                         enhance their resumes but also build the connections and experience necessary to thrive in the
                         competitive job market.</p>

                        <span className="what-we-do-card-span" >Kickstart Your Career </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default WhatWeDo