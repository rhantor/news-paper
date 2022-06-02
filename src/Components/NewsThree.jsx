import React from "react";
import { motion } from "framer-motion";
import { useData } from "../Context";
import avatar from "../assets/imgs/profile.png";
import { BsArrowLeft } from "react-icons/bs";
import Header from "./container/Header";
import Sports from "./container/Sports";
const NewsThree = () => {
  const {
    pageThree,
    pageOneActive,
    pageTwoActive,
    pageThreeActive,
    deactiveSection,
    pageThreeExpand,
  } = useData();
  return (
    <motion.section
      className="app__page-three"
      ref={pageThree}
      style={pageOneActive || pageTwoActive ? deactiveSection : null}
    >
      <div className="page__three-wrapper">
        <motion.div
          className="page__three-news"
          style={
            pageThreeActive
              ? {
                  right: "50%",
                }
              : {
                  right: 0,
                }
          }
        >
          <Header />
          <Sports />
        </motion.div>
        <motion.div
          className="page__three-banner"
          onClick={pageThreeExpand}
          style={pageThreeActive ? { width: "50%" } : { width: "100%" }}
        >
          {pageThreeActive && (
            <div className="homeBtn">
              <BsArrowLeft />
              <p>Back to Home</p>
            </div>
          )}
          <div className="overlay">
            <div className="content">
              <h1>Sports</h1>
              <p>“The only way to prove you are a good sport is to lose.”</p>
              <div className="profile">
                <p className="name">John Doe</p>
                <img src={avatar} alt="avatar" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NewsThree;
