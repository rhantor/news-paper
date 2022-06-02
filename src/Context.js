import React, { createContext, useContext, useRef, useState } from "react";
const Data = createContext();
export const useData = () => {
  return useContext(Data);
};
const Context = ({ children }) => {
  //=== Assign state for active specific section
  const [pageOneActive, setPageOneActive] = useState(false);
  const [pageTwoActive, setPageTwoActive] = useState(false);
  const [pageThreeActive, setPageThreeActive] = useState(false);
  const pageOne = useRef(null);
  const pageTwo = useRef(null);
  const pageThree = useRef(null);
  const deactiveSection = {
    flexBasis: 0,
    width: 0,
  };
  // click Event for worinkg those state
  const pageOneExpand = () => {
    pageOne.current.classList.toggle("active");
    setPageOneActive(!pageOneActive);
  };
  const pageTwoExpand = () => {
    pageTwo.current.classList.toggle("active");
    setPageTwoActive(!pageTwoActive);
  };
  const pageThreeExpand = () => {
    pageThree.current.classList.toggle("active");
    setPageThreeActive(!pageThreeActive);
  };


  const value = {
    pageOne,
    pageTwo,
    pageThree,
    pageOneActive,
    pageTwoActive,
    pageThreeActive,
    deactiveSection,
    pageOneExpand,
    pageTwoExpand,
    pageThreeExpand,
  };

  return <Data.Provider value={value}>{children}</Data.Provider>;
};

export default Context;
