import React from "react";
("use client");

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Footerr = () => {
  useGSAP(() => {
    gsap.from("#footer", {
      y: -100,
      delay: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: "#footer",
        scroller: "body",
        // markers: true,
      },
    });
  });

  return (
    <Footer container>
      <div id="footer" className="w-full ">
        <div className="grid my-4 w-full border-t-[1px] pb-5 justify-between sm:flex sm:justify-around md:flex md:grid-cols-1 text-2xl">
          <div className="py-5 md:pb-0">
            <div className="image flex items-center">
              <div>
                <i className="ri-shopping-bag-4-line text-amber-600 text-xl"></i>
              </div>
              <div>
                <span className="style-script-regular">Shop</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  className="cursor-pointer hover:text-[#C7511F] decoration-from-font"
                  href="#"
                >
                  Home
                </Footer.Link>
                <Footer.Link
                  className="cursor-pointer hover:text-[#C7511F] decoration-from-font"
                  href="#"
                >
                  Tailwind CSS
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  className="cursor-pointer hover:text-[#C7511F] decoration-from-font"
                  href="#"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  className="cursor-pointer hover:text-[#C7511F] decoration-from-font"
                  href="#"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link
                  className="cursor-pointer hover:text-[#C7511F] decoration-from-font"
                  href="#"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  className="cursor-pointer hover:text-[#C7511F] decoration-from-font"
                  href="#"
                >
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full my-3 sm:flex sm:items-center sm:justify-around">
          <Footer.Copyright href="#" by="Miracle™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footerr;
