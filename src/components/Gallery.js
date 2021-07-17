import React from "react";
import images from "../JSON/images.json";
import InstaIcon from "@material-ui/icons/Instagram";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
export default function Gallery() {
  const imageDisplay = (image) => {
    return (
      <div className="imageContainer relative gallery-item  mx-8 my-5 ">
        <div className="imageOverlay  absolute w-full h-full flex  flex-col items-center justify-center ">
          <a href={image.insta_link} target="_blank">
            {" "}
            <InstaIcon
              style={{ fontSize: 50 }}
              className=" text-white text-9xl cursor-pointer"
            />
          </a>
          <div className="text-brand-white mt-5">
            View the post on instagram
          </div>
        </div>
        <div className=" " style={{ zIndex: "1000000000" }}>
          <img src={image.image} className="artImage h-96   bg-black  p-0 " />
        </div>
        <div>
          {/* <div className="glass rounded-2xl absolute -left-3 -bottom-3 w-full h-full flex  flex-col items-center justify-center   "></div> */}
          <div className="glass glass-card  absolute  w-full h-full flex  flex-col items-center justify-center   "></div>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col items-center ">
      <div className="mandalaText  pt-32 h-96 px-5 py-2 flex mx-auto items-center justify-center  text-brand-dark  font-semibold   ">
        <ParallaxProvider>
          <Parallax y={[-20, 20]}>M</Parallax>
          <Parallax y={[20, 20]}>Y</Parallax>
          <span className="w-14">{"  "}</span>
          <Parallax y={[-20, 20]}>M</Parallax>
          <Parallax y={[20, 20]}>A</Parallax>
          <Parallax y={[-20, 20]}>N</Parallax>
          <Parallax y={[20, 20]}>D</Parallax>
          <Parallax y={[-20, 20]}>A</Parallax>
          <Parallax y={[20, 20]}>L</Parallax>
          <Parallax y={[-20, 20]}>A</Parallax>
          <span className="w-14">{"  "}</span>
          <Parallax y={[20, 20]}>S</Parallax>
          <Parallax y={[-20, 20]}>T</Parallax>
          <Parallax y={[20, 20]}>O</Parallax>
          <Parallax y={[-20, 20]}>R</Parallax>
          <Parallax y={[20, 20]}>Y</Parallax>
        </ParallaxProvider>
      </div>
      <div
        className="w-11/12  rounded-2xl "
        style={{ backgroundColor: " #ece5da", zIndex: "99999" }}
      >
        <div className="flex flex-wrap  justify-center  ">
          {images.map((image) => imageDisplay(image))}
        </div>
      </div>
    </div>
  );
}
