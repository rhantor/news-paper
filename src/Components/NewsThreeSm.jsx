import React from "react";
import { motion } from "framer-motion";
import avatar from "../assets/imgs/profile.png";
import Sports from "./container/Sports";
const NewsThreeSm = () => {
  return (
    <motion.section className="app__page-three-sm">
      <div className="page__three-wrapper-sm">
        <motion.div className="page__three-news-sm">
          <Sports />
        </motion.div>
        <motion.div className="page__three-banner-sm">
         
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

export default NewsThreeSm;
