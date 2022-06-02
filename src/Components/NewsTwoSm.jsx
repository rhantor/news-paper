import React from "react";
import { motion } from "framer-motion";
import avatar from "../assets/imgs/profile.png";
import Native from "./container/Native";

const NewsTwoSm = () => {
  return (
    <motion.section className="app__page-two-sm">
      <div className="page__two-wrapper-sm">
        <motion.div className="page__two-banner-sm">
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
        <motion.div className="page__two-news-sm">
          <Native />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NewsTwoSm;
