import React, {useEffect} from "react";
import { Fade } from "react-slideshow-image";
import "./slideshow.css";
import Fetchapi from "../components/Fetchapi";
import Myimg from "./Sample";

const fadeImages = [
  "/C1.jpg",
  "/C2.jpg",
  "/C3.jpg",
  "/loading.gif"
];

const fadeProperties = {
  duration: 1000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
};


function Slideshow () {

useEffect(() => {
  const intervalCall = setInterval(() => {
    fadeImages.unshift(<Myimg/>);
  }, 15000);
  return () => {
    // clean up
    clearInterval(intervalCall);
  };
}, []);
  
  return (
    <div className="slide-container">
        <div className="each-fade">
          <div className="image-container">
            <Myimg/>
          </div>
          {/* <h2>First Slide</h2> */}
        </div>
    </div>
  );
};

export default Slideshow;
