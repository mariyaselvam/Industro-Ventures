import { Link } from "react-router-dom"


const BlogDetailSideBar = () => {
  return (
    <>
    
    <div className="blog-side-bar-wrap">
    <h3 className="side-bar-tit">Blogs</h3>

    <ul className="blog-side-bar-links">
        <li>
            <Link to="/CollaborativeSpacesFutureLeaders">
            Collaborative Spaces for Future Leaders
            </Link>
        </li>
        <li>
            <Link to="/TheROIOfLearning">
            The ROI of Learning
            </Link>
        </li>
        <li>
            <Link to="/MentorshipAndCareerDevelopment">
            Mentorship & Career Development
            </Link>
        </li>
        <li>
            <Link to="/ReimaginingCampusLife">
            Reimagining Campus Life
            </Link>
        </li>
    </ul>
    </div>
    </>
  )
}

export default BlogDetailSideBar