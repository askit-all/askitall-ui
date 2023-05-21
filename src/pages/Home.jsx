import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/homepagenewuserone">HomepagenewuserOne</Link>
        </li>
        <li>
          <Link to="/loginpage">Loginpage</Link>
        </li>
        <li>
          <Link to="/homepagenewuser">Homepagenewuser</Link>
        </li>
        <li>
          <Link to="/loginpageone">LoginpageOne</Link>
        </li>
        <li>
          <Link to="/superadmindashboard">Superadmindashboard</Link>
        </li>
        <li>
          <Link to="/homepagementeeone">HomepagementeeOne</Link>
        </li>
        <li>
          <Link to="/videocallapi">Videocallapi</Link>
        </li>
        <li>
          <Link to="/homepagementee">Homepagementee</Link>
        </li>
        <li>
          <Link to="/bookingpage">Bookingpage</Link>
        </li>
        <li>
          <Link to="/newprofilementpr">Newprofilementpr</Link>
        </li>
        <li>
          <Link to="/aboutus">Aboutus</Link>
        </li>
        <li>
          <Link to="/profilementee">Profilementee</Link>
        </li>
        <li>
          <Link to="/desktopone">DesktopOne</Link>
        </li>
        <li>
          <Link to="/desktoptwo">DesktopTwo</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/desktopthree">DesktopThree</Link>
        </li>
        <li>
          <Link to="/termsandcondition">Termsandcondition</Link>
        </li>
        <li>
          <Link to="/faqtwo">FAQTwo</Link>
        </li>
        <li>
          <Link to="/homepagementor">Homepagementor</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
