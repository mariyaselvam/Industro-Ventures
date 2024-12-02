import Footer from "../components/Footer"
import Header from "../components/Header"
import BlogDetailContent from "../components/BlogPages/BlogDetailContent"
import BlogDetailSideBar from "../components/BlogPages/BlogDetailSideBar"
import { useEffect } from "react"

const BlogListing = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
      
  return (
    <>
    <Header />
    <section className="Blog-content-wrap">
        <div className="container">
            <div className="row">
                <div className="col-xl-9">
                    <BlogDetailContent />
                </div>
                <div className="col-xl-3">
                    <BlogDetailSideBar />
                </div>
            </div>
        </div>
    </section>

    <Footer />
    </>
  )
}

export default BlogListing