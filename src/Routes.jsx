import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Homepagementor = React.lazy(() => import("pages/Homepagementor"));
const FAQTwo = React.lazy(() => import("pages/FAQTwo"));
const Termsandcondition = React.lazy(() => import("pages/Termsandcondition"));
const DesktopThree = React.lazy(() => import("pages/DesktopThree"));
const FAQ = React.lazy(() => import("pages/FAQ"));
const DesktopTwo = React.lazy(() => import("pages/DesktopTwo"));
const DesktopOne = React.lazy(() => import("pages/DesktopOne"));
const Profilementee = React.lazy(() => import("pages/Profilementee"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Newprofilementpr = React.lazy(() => import("pages/Newprofilementpr"));
const Bookingpage = React.lazy(() => import("pages/Bookingpage"));
const Homepagementee = React.lazy(() => import("pages/Homepagementee"));
const VideoCall = React.lazy(() => import("pages/videoCall"));
const HomepagementeeOne = React.lazy(() => import("pages/HomepagementeeOne"));
const Superadmindashboard = React.lazy(() =>
  import("pages/Superadmindashboard")
);
const LoginpageOne = React.lazy(() => import("pages/LoginpageOne"));
const Homepagenewuser = React.lazy(() => import("pages/Homepagenewuser"));
const Loginpage = React.lazy(() => import("pages/Loginpage"));
const HomepagenewuserOne = React.lazy(() => import("pages/HomepagenewuserOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepagenewuser />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/homepagenewuserone" element={<HomepagenewuserOne />} /> */}
          <Route path="/loginpage" element={<Loginpage />} />
          {/* <Route path="/homepagenewuser" element={<Homepagenewuser />} /> */}
          <Route path="/loginpageone" element={<LoginpageOne />} />
          <Route
            path="/superadmindashboard"
            element={<Superadmindashboard />}
          />
          <Route path="/homepagementeeone" element={<HomepagementeeOne />} />
          <Route path="/videocall" element={<VideoCall />} />
          <Route path="/homepagementee" element={<Homepagementee />} />
          <Route path="/bookingpage" element={<Bookingpage />} />
          <Route path="/newprofilementpr" element={<Newprofilementpr />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/profilementee" element={<Profilementee />} />
          <Route path="/desktopone" element={<DesktopOne />} />
          <Route path="/desktoptwo" element={<DesktopTwo />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/desktopthree" element={<DesktopThree />} />
          <Route path="/termsandcondition" element={<Termsandcondition />} />
          <Route path="/faqtwo" element={<FAQTwo />} />
          <Route path="/homepagementor" element={<Homepagementor />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
