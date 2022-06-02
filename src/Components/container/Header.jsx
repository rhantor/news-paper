import React, { useRef } from "react";
import avatar from "../../assets/imgs/profile.png";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillSkype,
} from "react-icons/ai";
import "../../assets/styles/Header.scss";
const Header = () => {
  const profile = useRef(null);
  const showProfile = () => {
    profile.current.style.bottom = "-13rem";
    profile.current.style.opacity = "1";
  };
  const hideProfile = () => {
    profile.current.style.bottom = "5rem";
    profile.current.style.opacity = "0";
  };
  return (
    <header>
      <div className="header-conainer">
        Developed by <span onMouseEnter={showProfile}> RH Antor</span> with
        React.
        <div
          className="pop-up-profile"
          ref={profile}
          onMouseLeave={hideProfile}
        >
          <div className="profile-header">
            <img src={avatar} alt="" />
            <h2>RH Antor</h2>
            <h6>Front-End Developer</h6>
          </div>
          <div className="profile-body">
            <ul className="links">
              <li className="link">
                <a href="https://github.com/rhantor">
                  <AiFillGithub />
                </a>
              </li>
              <li className="link">
                <a href="https://www.facebook.com/rhantorr">
                  <AiFillFacebook />
                </a>
              </li>
              <li className="link">
                <a href="#twitter">
                  <AiFillTwitterCircle />
                </a>
              </li>
              <li className="link">
                <a href="#skype">
                  <AiFillSkype />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
