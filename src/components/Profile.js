import React from "react";
import InstaIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
export default function Profile() {
  return (
    <div className="flex flex-row pb-0 p-10">
      <div className="w-1/2 flex justify-center ">
        <div class="badge">
          <div class="text">’Hello!</div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <div
          className=" absolute   glass rounded-2xl  w-1/2 h-80 -ml-14 -mb-20 flex  flex-col items-center justify-center "
          style={{ transform: "rotate(5deg)" }}
        ></div>

        <div className="" style={{ zIndex: "100000" }}>
          <div className="  h-10 my-5 w-min px-5 py-1 flex items-center text-2xl text-brand-dark  font-semibold  rounded ring-pink-600 ring-2">
            <div>Haripriya</div>
          </div>
          <div className="text-lighter mt-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit similique voluptatum accusantium eligendi, accusamus
            ad.
          </div>
          <a
            href="https://www.instagram.com/my_mandala_story_/"
            className="flex my-2 items-center"
          >
            <InstaIcon fontSize="large" color="secondary" />

            <div className="mx-3  text-pink-500">Visit my instagram.</div>
          </a>
          <a
            href="mailto:haripriya@gmail.com"
            className="flex my-2 items-center"
          >
            <MailIcon fontSize="large" color="black" />

            <div className="mx-3  text-gray-600">Mail me for commissions.</div>
          </a>
        </div>
      </div>
    </div>
  );
}
