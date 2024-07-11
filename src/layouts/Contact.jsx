import { faFacebook, faGoogle, faInstagram, faPinterest, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function contact() {
  return (
    <div className="h-[200px] w-[94%] border-2 m-10  relative mt-[100px] ">
      <div className="h-full w-full absolute   " >
        <img
          className="h-full w-full object-cover   "
          src="https://plus.unsplash.com/premium_photo-1661963646937-1566cbb38d34?q=80&w=1387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="absolute h-full w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center bg-[rgba(0,0,0,0.6)]">
        <h1 className="text-2xl mt-10 font-medium">Connect With Us</h1>
        <div className="flex gap-4 justify-center text-xl p-5 ">
        <FontAwesomeIcon className="bg-gray-800 p-2 cursor-pointer" icon={faFacebook} />
        <FontAwesomeIcon  className="bg-gray-800 p-2 cursor-pointer" icon={faInstagram} />
        <FontAwesomeIcon  className="bg-gray-800 p-2 cursor-pointer"  icon={faGoogle} />
        <FontAwesomeIcon  className="bg-gray-800 p-2 cursor-pointer"  icon={faXTwitter} />
        <FontAwesomeIcon  className="bg-gray-800 p-2 cursor-pointer"  icon={faPinterest} />
        </div>
      </div>
    </div>
  );
}

export default contact;
