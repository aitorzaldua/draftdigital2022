import { IoLogoTwitter } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-scroll/modules";
import Image from "next/image";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6jpfh8l",
      "template_wxm06id",
      form.current,
      "QwiFEJA8fMbHMfnSL"
    );

    e.target.reset();
  };

  return (
    <div className="flex flex-col justify-center items-center gradient-bg-welcome min-w-full pt-36" id="Contact">
      <div className="flex md:flex-row flex-col w-full justify-center items-center">
        <div className="flex mf:flex-col flex-col justify-start md:p-20">
          <h1 className="text-8xl text-gradient pt-4 px-16">Let's</h1>
          <h1 className="text-8xl text-gradient pt-4 px-16">connect</h1>
          <div className="py-12 px-4 md:p-20 pl-12">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-row gap-4 rounded-md"
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="rounded-md"
                required
              />
              <button
                type="submit"
                className="bg-[#8db9e2] py-2 px-7 mx-4  rounded-md cursor-pointer hover:bg-[#A0AECD] "
              >
                Request an audit
              </button>
            </form>
          </div>
        </div>

        <div className="flex md:flex-col justify-start md:p-20 pr-12">
          <p className="md:flex hidden text-[#a1acba] pb-1">Email Us</p>
          <p className="text-[#dce0e5] pb-3 md:pr-0 pr-8">info@draftdigital.org</p>
          <p className="md:flex hidden text-[#a1acba] pb-3">Follow us</p>
          <div className="text-[#dce0e5] flex flex-row md:pl-0 pl-8 md:gap-3 gap-16">
            <a
              href="https://twitter.com/azdraft_"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoTwitter />
            </a>
            <a
              href="https://github.com/aitorzaldua"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </div>
        </div>
        <div className="md:flex hidden flex-col justify-start py-12 px-4 md:p-20 sm:p-10">
          <p className="pb-3 text-[#a1acba]">Navigation</p>
          <ul className="flex flex-col text-[#dce0e5] md:flex list-none justify-start">
            <Link
              activeClass="active"
              to="Nav"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="Services"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="cursor-pointer"
            >
              What We Do
            </Link>
            <Link
              activeClass="active"
              to="AuditProcess"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className="cursor-pointer"
            >
              The Process
            </Link>
            <Link
              activeClass="active"
              to="Audits"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              className="cursor-pointer"
            >
              Check Audits
            </Link>
          </ul>
        </div>
      </div>
      <div className="md:flex hidden flex-row text-white">
        <small>
          Draft Digital founded in 2021. &copy; UI Designed with 🤍 by MG. Make
          the web3 a better place.
        </small>
      </div>
    </div>
  );
}
