import React, { useState } from "react";
import images from "../JSON/images.json";
import InstaIcon from "@material-ui/icons/Instagram";
import Subscribe from "@material-ui/icons/Mail";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
// images
import Art1 from "../assets/art/mandala3.png";
// import Art2 from "../assets/art/mandala5.png";
// other comps
import Subscribesubscribed from "./Subscribe";

export default function Gallery() {
  const [subscribed, setSubscribed] = useState(false);
  const [sub, setSub] = useState(false);
  const toggleSubscribed = () => {
    setSubscribed(!subscribed);
  };
  const toggleS = () => {
    setSub(!sub);
  };
  const toggleSub = () => {
    if (!subscribed) {
      setSub(true);
    } else {
      setSub(false);
      toggleSubscribed();
    }
  };

  const imageDisplay = (image) => {
    return (
      <div className="imageContainer relative gallery-item  mx-8 my-5 ">
        <a
          href={image.insta_link}
          target="_blank"
          className="imageOverlay cursor-pointer  absolute w-full h-full flex  flex-col items-center justify-center "
        >
          <div>
            <InstaIcon
              style={{ fontSize: 50 }}
              className=" text-white text-9xl cursor-pointer"
            />
          </div>
          <div className="text-brand-white mt-5">
            View the post on instagram
          </div>
        </a>
        <div className=" " style={{ zIndex: "1000000000" }}>
          <img src={image.image} className="artImage h-96   bg-black  p-0 " />
        </div>
        <div>
          {/* <div className="glass rounded-2xl absolute -left-3 -bottom-3 w-full h-full flex  flex-col items-center justify-center   "></div> */}
          <div className="glass glass-card  absolute  w-full h-8 flex  flex-col items-center justify-center   ">
            <div className="text-center text-xl text-brand-dark font-bold">
              {image.data}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col   ">
      {sub && (
        <Subscribesubscribed
          toggleSubscribed={toggleSubscribed}
          toggleSub={toggleSub}
          toggleS={toggleS}
        />
      )}
      <img className=" fixed gallery-art1" src={Art1} alt="" />
      {/* <img className=" fixed gallery-art2" src={Art2} alt="" /> */}
      <div className="mandalaText  h-72   px-5  flex mx-auto items-center justify-center  text-brand-dark  font-semibold   ">
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
      <div className="socials cursor-pointer bg-brand-dark hover:bg-brand-pink1 ring-brand-dark ring-2 px-5 rounded-xl mx-3 -mt-10  flex self-end float-right">
        <a
          href="https://www.instagram.com/my_mandala_story_/"
          className="flex my-2 items-center"
        >
          <InstaIcon fontSize="large" color="secondary" />

          <div className="mx-3  text-pink-500 ">Visit My Instagram</div>
        </a>
      </div>
      <div
        onClick={toggleSub}
        className="socials cursor-pointer bg-brand-dark hover:bg-brand-pink1 ring-brand-dark ring-2 px-5 rounded-xl mx-3 mt-4  flex self-end float-right z-20"
      >
        <div className="flex my-2 items-center">
          {!subscribed ? (
            <>
              <Subscribe fontSize="large" className="text-red-500" />
              <div className="mx-3  text-red-500 ">Subscribe For Updates</div>
            </>
          ) : (
            <>
              <Subscribe fontSize="large" className="text-green-500" />
              <div className="mx-3  text-green-500 ">Unsubscribe</div>
            </>
          )}
        </div>
      </div>
      <div
        className="w-11/12 my-2 self-center rounded-2xl "
        style={{ backgroundColor: " #ece5da" }}
      >
        <div className="flex flex-wrap  justify-center  ">
          {images.map((image) => imageDisplay(image))}
        </div>
      </div>
    </div>
  );
}
