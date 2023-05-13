import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex justify-center px-[5rem] py-[2rem] pb-16 text-white bg-[#00286B] sm:flex-col sm:px-2 sm:py-[1rem] sm:pb-8">
      <div className="w-1/2 text-justify sm:w-full">
        <p className="text-3xl font-extrabold my-4 sm:text-lg">About Us</p>
        <p className="text-sm font-bold sm:text-[12px]">
          Meet the dynamic duo behind ISHA Wellness Centre, Dr. Minjan Patel and
          Dr. Hitesh Purohit. As co-founders of Aarogyam Knowledge to Action
          Society (AKAS) and Healthprizm Pvt. Ltd. (HPL), they bring a wealth of
          knowledge and expertise to the table.
        </p>
        <p className="text-sm font-bold sm:text-[12px]">
          Together, these two visionaries have a shared goal of bringing
          evidence-based, patient-centered therapy services to everyone. With
          their combined knowledge, experience, and commitment to community
          health, they are leading the way in making holistic wellness
          accessible and achievable for all.
        </p>
      </div>
      <div className="w-1/4 mx-16 sm:w-full sm:mx-0">
        <p className="text-3xl font-extrabold my-4 sm:text-lg">Our Services</p>
        <ul className="text-sm font-bold sm:text-[12px]">
          <li className="my-2">Employee Wellness Program</li>
          <li className="my-2">Hormone Balance Therapy</li>
          <li className="my-2">Wellness Therapy</li>
          <li className="my-2">Pregnancy Care</li>
          <li className="my-2">Counseling</li>
          <li className="my-2">Yoga</li>
        </ul>
      </div>
      <div className="w-1/4  sm:w-full">
        <p className="text-3xl font-extrabold my-4 sm:text-lg">Contact Us</p>
        <div className="text-sm font-bold sm:text-[12px]">
          <p className="flex items-center my-2">
            <span className="mr-2">
              <FiPhoneCall />
            </span>
            +91 73836 77661
          </p>
          <p className="flex items-center my-2">
            <span className="mr-2">
              <FiMail />
            </span>
            ishawellnesscentre@gmail.com
          </p>
        </div>
        <div className="flex justify-between my-4 text-4xl sm:justify-around">
          <p className="text-white hover:text-[#4867aa]">
            <a href="https://m.facebook.com/ishawellnesscentre" target="_blank">
              <AiFillFacebook />
            </a>
          </p>
          <p className="text-white hover:text-[#fe0000]">
            <a
              href="https://www.youtube.com/@ishawellnesscentre5130"
              target="_blank"
            >
              <AiFillYoutube />
            </a>
          </p>
          <p className="text-white hover:text-[#0077b5]">
            <a
              href="https://www.linkedin.com/in/isha-wellness-centre-b375a4204"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
