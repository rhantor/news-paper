import React from "react";
import { motion } from "framer-motion";
import { useData } from "../Context";
import avatar from "../assets/imgs/profile.png";
import { BsArrowLeft } from "react-icons/bs";
import Header from "./container/Header";
import Native from "./container/Native";

const NewsTwo = () => {
  const {
    pageTwo,
    pageOneActive,
    pageTwoActive,
    pageThreeActive,
    deactiveSection,
    pageTwoExpand,
  } = useData();
  return (
    <motion.section
      className="app__page-two"
      ref={pageTwo}
      style={pageOneActive || pageThreeActive ? deactiveSection : null}
    >
      <div className="page__two-wrapper">
        <motion.div
          className="page__two-banner"
          onClick={pageTwoExpand}
          style={pageTwoActive ? { width: "50%" } : { width: "100%" }}
        >
          {pageTwoActive && (
            <div className="homeBtn">
              <BsArrowLeft />
              <p> Back to Home</p>
            </div>
          )}
          <div className="overlay">
            <div className="content">
              <h1>Native</h1>
              <p>“The only way to prove you are a good sport is to lose.”</p>
              <div className="profile">
                <p className="name">John Doe</p>
                <img src={avatar} alt="avatar" />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="page__two-news"
          style={
            pageTwoActive
              ? {
                  left: "50%",
                }
              : {
                  left: 0,
                  transition: "all 1s ease",
                }
          }
        >
          <Header />
          <Native />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NewsTwo;
