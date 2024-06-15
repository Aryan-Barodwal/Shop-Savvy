import React from "react";
import product1 from "../assets/productsImage.png";
import product2 from "../assets/ProductImage2.webp";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Products = () => {
  useGSAP(() => {
    gsap.from("#Products",{
      opacity:0,
      // scale:0,
      delay:0.6,
      duration:1
    })

  });

  return (
    <div className="overall w-screen md:hidden ">
      <div className="name ">
        <ul className="Allitems flex justify-around items-center">
          <div id="Products" className="1">
            <li>
              <a href="#electronics">
                <img
                  width={80}
                  src="https://rukminim2.flixcart.com/flap/96/96/image/69c6589653afdb9a.png?q=100"
                  alt=""
                />
                <p className="text-center text-sm font-normal">Electronics </p>
              </a>
            </li>
          </div>

          <div id="Products" className="2">
            <li>
              <a href="#food">
                <img width={80} src={product1} alt="" />
                <p className="text-center text-sm font-normal">Food & Fun</p>
              </a>
            </li>
          </div>

          <div id="Products" className="3">
            <li>
              <a href="#TopDeals">
                <img width={80} src={product2} alt="" />
                <p className="text-center text-sm font-normal ">Top Deals</p>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Products;
