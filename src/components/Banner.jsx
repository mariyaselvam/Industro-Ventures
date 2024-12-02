import BannerMainImg from "../assets/Home/Banner/banner2.svg"

const Banner = () => {
  return (
    <>
    <section className="banner-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                   <div className="banner-content">
                   <h1 className="banner-main-tit">
                   “Igniting Minds, Empowering Institutions, and Shaping the Future of Education”
                   </h1>
                   <p className="banner-main-cont">Welcome to Industro Ventures, the driving force behind the future of education. We don’t just adapt to change we create it. With innovative solutions and unmatched  expertise, we empower institutions, inspire students, and shape professionals to lead in  an ever-evolving world.</p>

                   <a className="banner-btn" href="#">
                   Shape Your Tomorrow Today
                   </a>
                   </div>
                </div>
                <div className="col-lg-6">
                   <div className="banner-main-img">
                    {/* <div className="img">
                    <img src={BannerMainImg} alt="" />
                    </div> */}
                   </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner