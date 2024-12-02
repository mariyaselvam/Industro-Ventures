
import { useEffect } from "react";
import Logo from "../assets/Home/Header/light-bg-logo.png"
import HamburgerMenuImg from "../assets/Home/Header/hamburger.png"
import {Link} from "react-router-dom";
import ParticlesComponent from "../js/particles"

const Header = () => {
    useEffect(() => {
        const nav = document.getElementById('nav');
        let top = window.scrollY;
        window.addEventListener("scroll", () => {
        
            if(top < window.scrollY){
              nav.classList.add("hide-nav");
            }else{
              nav.classList.remove("hide-nav");
            }
      
          top = window.scrollY;
              
          })
      }, []);
  return (
   <>
   
   <ParticlesComponent id="particles" />
   <header id="nav">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="header-logo--nav-wrap">
                    <div className="main-logo">
                        <Link to="/">
                        <img src={Logo} alt="" />
                        </Link>
                    </div>

                    <ul className="nav-options">
                        <li> 
                            <a href="#AboutUs">About US</a>
                        </li>
                        <li>
                            <a href="#ThinkWeDo">Think We Do</a>
                        </li>
                        <li>
                            <a href="#WhyUs">Why Us</a>
                        </li>
                        <li><a href="#Testimonial">Testimonial</a></li>
                        <li>
                            <a href="#Career">Career</a>
                        </li>
                        <li>
                            <a href="#Blog">Blog</a>
                        </li>
                        <li>
                            <a href="#ContactUs">Contact Us</a>
                        </li>
                    </ul>

                    <button className="hamburger-menu">
                        <img src={HamburgerMenuImg} alt="" />
                    </button>
                </div>
            </div>
        </div>
    </div>
   </header>
   </>
  )
}

export default Header