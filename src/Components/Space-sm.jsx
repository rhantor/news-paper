import React from "react";
import { motion } from "framer-motion";
import avatar from "../assets/imgs/profile.png";
import Header from "./container/Header";
import SpaceBody from "./container/SpaceBody";
const SpaceSM = () => {
  return (
    <motion.section className="app__page-one-sm">
      <div className="page__one-wrapper-sm">
        <motion.div className="page__one-banner-sm">
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
        <motion.div className="page__one-news-sm">
          <Header />
          <SpaceBody />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SpaceSM;
