import React from "react";
import { motion } from "framer-motion";
import { useData } from "../Context";
import avatar from "../assets/imgs/profile.png";
import Header from "./container/Header";
import { BsArrowLeft } from "react-icons/bs";
import SpaceBody from "./container/SpaceBody";
const Space = () => {
  const {
    pageOne,
    pageThreeActive,
    pageTwoActive,
    deactiveSection,
    pageOneExpand,
    pageOneActive,
  } = useData();
  

  return (
    <motion.section
      className="app__page-one"
      ref={pageOne}
      style={pageThreeActive || pageTwoActive ? deactiveSection : null}
    >
      <div className="page__one-wrapper">
        <motion.div
          className="page__one-banner"
          onClick={() => pageOneExpand()}
          style={pageOneActive ? { width: "50%" } : { width: "100%" }}
        >
          {pageOneActive && (
            <>
              <div className="homeBtn">
                <BsArrowLeft />
                <p> Back to Home</p>
              </div>
            </>
          )}

          <div className="overlay">
            <div className="content">
              <h1>Steller</h1>
              <p>“The only way to prove you are a good sport is to lose.”</p>

              <div className="profile">
                <p className="name">John Doe</p>
                <img src={avatar} alt="avatar" />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="page__one-news"
          style={
            pageOneActive
              ? {
                  left: "50%",
                }
              : {
                  left: 0,
                }
          }
        >
          <Header />
          <SpaceBody />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Space;
