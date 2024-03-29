import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const MentorHomepage = React.lazy(() => import("pages/MentorHomepage"));
const FAQ = React.lazy(() => import("pages/FAQ"));
const Termsandcondition = React.lazy(() => import("pages/Termsandcondition"));
const MenteeProfile = React.lazy(() => import("pages/MenteeProfile"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const MentorProfile = React.lazy(() => import("pages/MentorProfile"));
const Scheduling = React.lazy(() => import("pages/Scheduling"));
const VideoCall = React.lazy(() => import("pages/VideoCall"));
const Questionnaire = React.lazy(() => import("pages/Questionnaire"));
const Signup = React.lazy(() => import("pages/Signup"));
const LandingPage2 = React.lazy(() => import("pages/LandingPage2"));
const Loginpage = React.lazy(() => import("pages/Loginpage"));
const Landingpage = React.lazy(() => import("pages/Landingpage"));
const AllNotifications = React.lazy(() => import("pages/AllNotifications"));
const Feedback = React.lazy(() => import("pages/FeedBack"));
// const LandingPageNew = React.lazy(() => import("pages/LandingPageNew"));

// const Superadmindashboard = React.lazy(() =>
//   import("pages/Superadmindashboard")
// );
// const DesktopThree = React.lazy(() => import("pages/DesktopThree"));
const BookingTab = React.lazy(() => import("pages/Bookings"));
const Profile = React.lazy(() => import("pages/Profile"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/dhiwisepage" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/landingpage2" element={<LandingPage2 />} />

          <Route path="/questionnaire" element={<Questionnaire />} />
          {/* <Route path="/mentor" element={<MentorHomepage />} /> */}
          <Route path="/call/:bookingId" element={<VideoCall />} />
          <Route path="/schedule" element={<Scheduling />} />
          <Route path="/mentor-profile" element={<MentorProfile />} />
          <Route path="/mentor-profile/:id" element={<MentorProfile />} />
          <Route
            path="/mentor-profile/:id/fromNotification/:fromNotification"
            element={<MentorProfile />}
          />
          <Route path="/mentee-profile" element={<MenteeProfile />} />
          <Route path="/mentee-profile/:id" element={<MenteeProfile />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/tc" element={<Termsandcondition />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/booking-tab" element={<BookingTab />} />
          <Route path="/notifications" element={<AllNotifications />} />

          <Route path="/feedback/:mentorId" element={<Feedback />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
