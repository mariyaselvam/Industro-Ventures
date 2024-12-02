import CardImg1 from "../assets/Home/BlogCardHomeListing/blog-listing-card1.png"
import CardImg2 from "../assets/Home/BlogCardHomeListing/blog-listing-card2.png"
import CardImg3 from "../assets/Home/BlogCardHomeListing/blog-listing-card3.png"
import CardImg4 from "../assets/Home/BlogCardHomeListing/blog-listing-card4.png"
import { Link } from "react-router-dom"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

// import required modules
// import { Pagination } from 'swiper/modules';

const Blogs = () => {
  return (
    <>
    <section id="Blog" className="blog-listing-card-home-sec">
        <div className="conatiner-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <h3 className="blog-listing-card-sec-main-tit">
                    Our Latest Blogs
                    </h3>
                    <div className="blog-listing-cars-wrap">
                <Swiper
                      slidesPerView={'auto'}
                      centeredSlides={true}
                      spaceBetween={30}
                      pagination={{
                        clickable: true,
                      }}
                    //   modules={[Pagination]}
                      className="mySwiper"
                    >
                    <SwiperSlide>
                        <div className="blog-listing-card">
                            <div className="blog-listing-card-img">
                                <img src={CardImg1} alt="" />
                            </div>
                            <div className="blog-listing-card-cont-wrap">
                                <h4 className="blog-listing-card-tit">Reimagining Campus Life: How Campus 360 Solutions Are Transforming
                                College Ecosystems</h4>

                                <p>Colleges and universities are the heartbeat of innovation and learning, but managing
                                these vibrant ecosystems comes with its own set of challenges.</p>

                                <Link className="blog-listing-card-btn" to="/ReimaginingCampusLife">Read Blog</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blog-listing-card">
                            <div className="blog-listing-card-img">
                                <img src={CardImg2} alt="" />
                            </div>
                            <div className="blog-listing-card-cont-wrap">
                                <h4 className="blog-listing-card-tit">Mentorship & Career Development: Unlocking the Path from Student to
                                Professional Success</h4>

                                <p>In today’s fast-paced world, having a degree is no longer a guaranteed ticket to
                                career success. </p>

                                <Link className="blog-listing-card-btn" to="/MentorshipAndCareerDevelopment">Read Blog</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blog-listing-card">
                            <div className="blog-listing-card-img">
                                <img src={CardImg3} alt="" />
                            </div>
                            <div className="blog-listing-card-cont-wrap">
                                <h4 className="blog-listing-card-tit">The ROI of Learning: How Corporate Training Delivers Long-Term Gains</h4>

                                <p>In today’s fast-paced business world, organizations are facing constant pressure to
                                 stay ahead of the competition, innovate, and adapt to ever-changing market
                                 demands.</p>

                                <Link className="blog-listing-card-btn" to="/TheROIOfLearning">Read Blog</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blog-listing-card">
                            <div className="blog-listing-card-img">
                                <img src={CardImg4} alt="" />
                            </div>
                            <div className="blog-listing-card-cont-wrap">
                                <h4 className="blog-listing-card-tit">Collaborative Spaces for Future Leaders: The Power of Ignite Hubs in Building
                                Communities</h4>

                                <p>In a world where innovation thrives on collaboration, the role of community-driven
                                spaces has never been more vital.</p>

                                <Link className="blog-listing-card-btn" to="/CollaborativeSpacesFutureLeaders">Read Blog</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Blogs