import React from "react";
// imports
import FiClock from "react-icons/fi";
import AiOutlinePhone from "react-icons/ai";
import HiOutlineMail from "react-icons/hi";

function ContactDetails() {
  return (
    <div className="bg-zinc-800 mt-20 py-40">
      <div className="ContactDetails flex justify-center max-w-[1440px] w-full ">
        <div className="flex flex-col justify-center  px-10 md:px-16  sm:grid sm:grid-cols-2  lg:grid-cols-4 gap-10 divide-x">
          <div className="text-center">
            <div className="p-4 ">
              <div className="flex justify-center text-40 pb-4">
              </div>
              <h5>Kenya</h5>
              <p className="p4">Moi Avenue, CBD, Nairobi</p>
            </div>
          </div>
          <div className="text-center">
            <div className="p-4 ">
              <div className="flex justify-center text-40 pb-4">
              </div>
              <h5>Business Hour</h5>
              <p className="p4">Mon - Sun 6:00 a.m - 6:00 p.m</p>
            </div>
          </div>
          <div className="text-center">
            <div className="p-4 ">
              <div className="flex justify-center text-40 pb-4">
              </div>
              <h5>Call Us</h5>
              <p className="p4">+254 757 855 088</p>
            </div>
          </div>
          <div className="text-center">
            <div className="p-4 ">
              <div className="flex justify-center text-40 pb-4">
              </div>
              <h5>Email Us</h5>
              <p className="p4">Aceyhost@contact.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
