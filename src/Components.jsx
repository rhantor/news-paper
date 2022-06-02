import React from "react";
import "./assets/styles/pageone.scss";
import "./assets/styles/pageTwo.scss";
import "./assets/styles/pageThree.scss";
import Space from "./Components/Space";
import NewsTwo from "./Components/NewsTwo";
import NewsThree from "./Components/NewsThree";
import SpaceSM from "./Components/Space-sm";
import NewsTwoSm from "./Components/NewsTwoSm";
import NewsThreeSm from "./Components/NewsThreeSm";
const Components = () => {
  return (
    <>
      <div className="app__wrapper">
        <Space />
        <NewsTwo />
        <NewsThree />
      </div>
      <div className="app__wrapper-sm">
        <SpaceSM />
       
        <NewsTwoSm />
        <NewsThreeSm />
      </div>
    </>
  );
};

export default Components;
