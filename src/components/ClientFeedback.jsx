import ProfilePic1 from '../assets/Home/ClientFeedback/profile-pic.svg'
import ProfilePic2 from '../assets/Home/ClientFeedback/profile2.svg'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar } from 'swiper/modules';

const ClientFeedback = () => {
  return (
    <>
    <section id="Testimonial" className="client-feedback-sec">
        <div className="container">
            <div className="row">
              <div className="col-lg-3">
    <div className="client-feedback-tit-wrap">
      <h3 className="client-feedback-main-tit">What Our Partners Say? </h3>

      <p>We reached out to our partners to hear their thoughts on our services. Here’s what they had to share about their experience with us.</p>
    </div>
              </div>

                <div className="col-lg-9">
                    <div className="client-feedback-swiper-wrap">
        <Swiper
          direction={'vertical'}
          scrollbar={{
          hide: false,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
          >
         <SwiperSlide>
          <div className="client-feedback-swiper-inner-card">
           <div className="row">
             <div className="col-6">
             <div className="client-feedback-swiper-inner-card-first-half">
                 <div className="row">
                    <div className="col-12">
                       <div className="client-feedback-swiper-card-1">
                       <p>"The teaching at IndustroVenture is excellent. I truly appreciated the effort and dedication in
delivering the sessions. Great work!"
</p>
                       <span>– Sandhya</span>
                       <span>(KLE society degree college)</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic1} alt="" />
                      </div>
                       
                       </div>

                       
                    </div>
                    <div className="col-12">
                     <div className="client-feedback-swiper-card-2">
                     <p>"IndustroVenture sessions were very good! The instructors explained everything clearly and kept
the learning engaging."
</p>
                       <span>– Likitha</span>
                       <span>(KLE society degree college)</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic2} alt="" />
                      </div>        
                     </div>
                    </div>
                 </div>
             </div>
             </div>
               <div className="col-6">
               <div className="col-12">
                       <div className="client-feedback-swiper-card-3">
                       <p>"I had a great learning experience with IndustroVenture. It would be even better if we had more
                       classes to dive deeper into the topics!"</p>
                       <span>— Tejas,</span>
                       <span>(MVJ college of engineering)</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic2} alt="" />
                      </div>
                       
                       </div>

                       
                    </div>
                    <div className="col-12">
                     <div className="client-feedback-swiper-card-4">
                     <p>"The sessions were very well conducted and informative. It was a great opportunity to enhance
                     our skills!"</p>
                       <span>— Hariprasad,</span>
                       <span>(MVJ college of engineering)
                       </span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic1} alt="" />
                      </div>        
                     </div>
                    </div>
               </div>
           </div>
          </div>
         </SwiperSlide>
        <SwiperSlide><div className="client-feedback-swiper-inner-card">
           <div className="row">
             <div className="col-6">
             <div className="client-feedback-swiper-inner-card-first-half">
                 <div className="row">
                    <div className="col-12">
                       <div className="client-feedback-swiper-card-1">
                       <p>"IndustroVenture exceeded my expectations. Nothing needs improvement—just please come back
for more sessions!"
</p>
                       <span>— – Sohan Bole
                       ,</span>
                       <span>(KNS institute of technology) </span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic1} alt="" />
                      </div>
                       
                       </div>

                       
                    </div>
                    <div className="col-12">
                     <div className="client-feedback-swiper-card-2">
                     <p>"The training exceeded my expectations and was truly impactful. I hope IndustroVenture conducts
                     more sessions like this!"</p>
                       <span>-Fathima A</span>
                       <span>(KNS institute of technology)</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic2} alt="" />
                      </div>        
                     </div>
                    </div>
                 </div>
             </div>
             </div>
               <div className="col-6">
               <div className="col-12">
                       <div className="client-feedback-swiper-card-3">
                       <p>A very insightful and practical learning experience. The training was easy to follow and highly
effective.
</p>
                       <span>— -Sherin Mariya,</span>
                       <span>(st.joseph’s university)</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic2} alt="" />
                      </div>
                       
                       </div>

                       
                    </div>
                    <div className="col-12">
                     <div className="client-feedback-swiper-card-4">
                     <p> "IndustroVenture’s sessions were a perfect blend of theory and practical knowledge. The training truly
                     boosted my confidence."</p>
                       <span>— Reema A,</span>
                       <span>(Jamal Mohamed College)</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic1} alt="" />
                      </div>        
                     </div>
                    </div>
               </div>
           </div>
          </div></SwiperSlide>
        {/* <SwiperSlide><div className="client-feedback-swiper-inner-card">
           <div className="row">
             <div className="col-6">
             <div className="client-feedback-swiper-inner-card-first-half">
                 <div className="row">
                    <div className="col-12">
                       <div className="client-feedback-swiper-card-1">
                       <p>"Industro Ventures didn’t just upgrade our labs; they transformed our entire campus  ecosystem. Our students now have access to opportunities once unimaginable.”</p>
                       <span>— Principal,</span>
                       <span>Institution Name</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic1} alt="" />
                      </div>
                       
                       </div>

                       
                    </div>
                    <div className="col-12">
                     <div className="client-feedback-swiper-card-2">
                     <p>"From Ignite Labs to placement training, Industro Ventures equipped me with skills 
                     that  landed me a top-tier role in cybersecurity. Their mentorship is unmatched."</p>
                       <span>— Student Name,</span>
                       <span>Cybersecurity Specialist</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic2} alt="" />
                      </div>        
                     </div>
                    </div>
                 </div>
             </div>
             </div>
               <div className="col-6">
               <div className="col-12">
                       <div className="client-feedback-swiper-card-3">
                       <p>"Industro Ventures didn’t just upgrade our labs; they transformed our entire campus  ecosystem. Our students now have access to opportunities once unimaginable.”</p>
                       <span>— Principal,</span>
                       <span>Institution Name</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic2} alt="" />
                      </div>
                       
                       </div>

                       
                    </div>
                    <div className="col-12">
                     <div className="client-feedback-swiper-card-4">
                     <p>"Industro Ventures didn’t just upgrade our labs; they transformed our entire campus  ecosystem. Our students now have access to opportunities once unimaginable.”</p>
                       <span>— Principal,</span>
                       <span>Institution Name</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic1} alt="" />
                      </div>        
                     </div>
                    </div>
               </div>
           </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="client-feedback-swiper-inner-card">
           <div className="row">
             <div className="col-6">
             <div className="client-feedback-swiper-inner-card-first-half">
                 <div className="row">
                    <div className="col-12">
                       <div className="client-feedback-swiper-card-1">
                       <p>"Industro Ventures didn’t just upgrade our labs; they transformed our entire campus  ecosystem. Our students now have access to opportunities once unimaginable.”</p>
                       <span>— Principal,</span>
                       <span>Institution Name</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic1} alt="" />
                      </div>
                       
                       </div>

                       
                    </div>
                    <div className="col-12">
                     <div className="client-feedback-swiper-card-2">
                     <p>"From Ignite Labs to placement training, Industro Ventures equipped me with skills 
                     that  landed me a top-tier role in cybersecurity. Their mentorship is unmatched."</p>
                       <span>— Student Name,</span>
                       <span>Cybersecurity Specialist</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic2} alt="" />
                      </div>        
                     </div>
                    </div>
                 </div>
             </div>
             </div>
               <div className="col-6">
               <div className="col-12">
                       <div className="client-feedback-swiper-card-3">
                       <p>"Industro Ventures didn’t just upgrade our labs; they transformed our entire campus  ecosystem. Our students now have access to opportunities once unimaginable.”</p>
                       <span>— Principal,</span>
                       <span>Institution Name</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic2} alt="" />
                      </div>
                       
                       </div>

                       
                    </div>
                    <div className="col-12">
                     <div className="client-feedback-swiper-card-4">
                     <p>"Industro Ventures didn’t just upgrade our labs; they transformed our entire campus  ecosystem. Our students now have access to opportunities once unimaginable.”</p>
                       <span>— Principal,</span>
                       <span>Institution Name</span>
 
                      <div className="C-profile">
                      <img  width="85" height="89" src={ProfilePic1} alt="" />
                      </div>        
                     </div>
                    </div>
               </div>
           </div>
          </div></SwiperSlide> */}
        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ClientFeedback