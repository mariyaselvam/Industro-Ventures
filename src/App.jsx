
import { BrowserRouter , Route , Routes } from "react-router-dom"
import Home from "./pages/Home"
import BlogListing from "./pages/BlogListing"
import CollaborativeSpacesFutureLeaders from "./pages/CollaborativeSpacesFutureLeaders"
import TheROIOfLearning from "./pages/TheROIOfLearning"
import MentorshipAndCareerDevelopment from "./pages/MentorshipAndCareerDevelopment"
import ReimaginingCampusLife from "./pages/ReimaginingCampusLife"
import AboutUsPage from "./pages/AboutUsPage"
function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/BlogListing" element={<BlogListing />} />
        <Route path="/CollaborativeSpacesFutureLeaders" element={<CollaborativeSpacesFutureLeaders />} />
        <Route path="/TheROIOfLearning" element={<TheROIOfLearning />} />
        <Route path="/MentorshipAndCareerDevelopment" element={<MentorshipAndCareerDevelopment />} />
        <Route path="/ReimaginingCampusLife" element={<ReimaginingCampusLife />} />
        <Route path="/AboutUsPage" element={<AboutUsPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
