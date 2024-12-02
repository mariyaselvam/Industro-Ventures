import MainImg from "../assets/Home/why-chose-us/why-chose-us-main.png"
import PointsIcon1 from '../assets/Home/why-chose-us/points-icon-1.svg'
import PointsIcon2 from '../assets/Home/why-chose-us/points-icon-2.svg'
import PointsIcon3 from '../assets/Home/why-chose-us/points-icon-3.svg'
import PointsIcon4 from '../assets/Home/why-chose-us/points-icon-4.svg'

const WhyChoseUs = () => {
  return (
    <>
    <section id="WhyUs" className="why-chose-us-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="why-chose-us-main-img">
                        <img src={MainImg} alt="" />
                    </div>
                </div>

                <div className="col-lg-6">
                <div className="why-chose-us-cont-wrap">
                    <h3 className="why-chose-us-main-tit">
                    Why Industro Ventures?
                    </h3>

                    <p>Because the future of education demands more than promises — it demands action.</p>

                    <div className="why-chose-us-cont-points-card">
                      <div className="why-chose-us-cont-points-img">
                        <img src={PointsIcon1} alt="" />
                      </div>
                      <div className="why-chose-us-cont-points-tit-ng-cont">
                        <h5>Unmatched Expertise</h5>
                        <p>A team of visionaries transforming education.</p>
                      </div>
                    </div>

                    <div className="why-chose-us-cont-points-card">
                      <div className="why-chose-us-cont-points-img">
                        <img src={PointsIcon2} alt="" />
                      </div>
                      <div className="why-chose-us-cont-points-tit-ng-cont">
                        <h5>End-to-End Solutions</h5>
                        <p>From labs to leadership, we cover every facet.</p>
                      </div>
                    </div>

                    <div className="why-chose-us-cont-points-card">
                      <div className="why-chose-us-cont-points-img">
                        <img src={PointsIcon3} alt="" />
                      </div>
                      <div className="why-chose-us-cont-points-tit-ng-cont">
                        <h5>Real Results</h5>
                        <p>Proven strategies that create measurable impacts.</p>
                      </div>
                    </div>

                    <div className="why-chose-us-cont-points-card">
                      <div className="why-chose-us-cont-points-img">
                        <img src={PointsIcon4} alt="" />
                      </div>
                      <div className="why-chose-us-cont-points-tit-ng-cont">
                        <h5>Scalable & Inclusive</h5>
                        <p>Tailored for institutions of every size and need.</p>
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

export default WhyChoseUs