import React, { useState, useRef, useEffect, useCallback } from "react";
import "../components/Navbar.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import empty from "../assets/empty.svg";
import { deleteItemsCart, deleteall } from "../redux/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [cartClosed, setcartClosed] = useState(false);
  const [handleNav, sethandleNav] = useState(false);

  const dispatch = useDispatch();
  const items = useSelector((state) => state.counter.cart);
  console.log(items);

  const containerRef = useRef(null);
  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setcartClosed(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCart = useCallback(() => {
    setcartClosed(!cartClosed);
  });

  const handlekill = () => {
    setcartClosed(!cartClosed);
  };

  // const navbarRef = useRef();

  // useGSAP(
  //   () => {
  //     gsap.to(navbarRef.current, {
  //       x: 30,
  //       delay: 0.2,
  //     });
  //   },
  //   { scope: navbarRef }
  // );

  // For store

  const newstore = useRef();
  useEffect(() => {
    if (cartClosed) {
      gsap.from(newstore.current, {
        x: 120,
        ease: "power1.inOut",
      });
    }
  }, [cartClosed]);

  // Passing two refs in a single element
  const mergeRefs = (...refs) => {
    return (element) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(element);
        } else if (ref) {
          ref.current = element;
        }
      });
    };
  };

  const handleNavbar = () => {
    sethandleNav(!handleNav);
  };

  const handleCross = () => {
    sethandleNav(!handleNav);
    if (reponsiveNav.current) {
      if (!handleNav) {
        reponsiveNav.current.classList.add("overflow-noscroll");
      } else {
        reponsiveNav.current.classList.remove("overflow-noscroll");
      }
    }
  };

  // Animation for responsive navbar
  const reponsiveNav = useRef();
  useEffect(() => {
    if (handleNav) {
      gsap.to(reponsiveNav.current, {
        x: 288,
        ease: "power1.inOut",
      });
    }
  }, [handleNav]);

  useGSAP(() => {
    gsap.from("#navbarr", {
      opacity: 0,
      duration: 1,
      y: -40,
      delay: 0.2,
      stagger: 0.2,
    });
  });

  return (
    <div id="topp" className="navbar h-14 bg-[#ffffff] text-black ">
      <div className="container h-14 flex justify-around items-center bg-[#ffffff] pt-2  fixed top-0 border-b-[1px] border-gray-200 z-50">
        {/* shop logo!! */}

        <div id="navbarr" className="nav flex justify-center items-center">
          <div className="ml-1">
            <i className="ri-shopping-bag-4-line text-amber-600 text-xl"></i>
          </div>
          <div>
            <span className="style-script-regular text-[#2A55E5] font-medium md:font-semibold">
              Shop
            </span>
          </div>
        </div>
        {/* end */}

        <div className="items-center">
          <ul className="flex gap-4 hover:cursor-pointer items-center">
            <div
              id="navbarr"
              className="nav hidden md:flex gap-4 hover:cursor-pointer"
            >
              <li className="border-b-2 border-white hover:border-b-2 hover:border-slate-900">
                Home
              </li>
              <li className="border-b-2 border-white hover:border-b-2 hover:border-slate-900">
                About
              </li>
              <li className="border-b-2  border-white hover:border-b-2 hover:border-slate-900">
                Contact Us
              </li>
            </div>

            {/* For Cart */}
            <li id="navbarr">
              <span className="storeLogo z-20" onClick={handleCart}>
                <i className="ri-shopping-cart-line text-xl text-amber-600  active:text-red-700"></i>{" "}
                Cart
              </span>
            </li>

            {/* For responsive navbar  */}
            <i
              id="navbarr"
              className="ri-menu-3-line text-lg block md:hidden "
              onClick={handleNavbar}
            ></i>

            {cartClosed && (
              <>
                <div
                  ref={mergeRefs(containerRef, newstore)}
                  className="newstore z-20 w-[83%] h-[87vh] md:w-1/3 md:h-[87vh] top-[8%] fixed md:top-[11%] left-[16%] md:left-[66%] border border-[#dcdbdb] text-slate-950 bg-slate-100 rounded-md overflow-y-scroll md:overflow-y-scroll "
                >
                  <div className="flex justify-between mx-4 items-center">
                    <button type="button" className="">
                      <span className="style-script-regular text-slate-500 font-semibold">
                        Store
                      </span>
                    </button>

                    <h1 className=" text-2xl ">
                      <i className="ri-shopping-bag-4-fill"></i>
                    </h1>

                    <button
                      type="button"
                      className=" text-2xl text-slate-400 "
                      onClick={handlekill}
                    >
                      <i className="ri-close-fill"></i>
                    </button>
                  </div>

                  {/* For initial condition */}
                  {items.length === 0 && (
                    <div className="namo">
                      <div className="contents">
                        <img src={empty} alt="" />
                        <h2 className="font-semibold text-xl text-center">
                          Your cart is empty
                        </h2>
                        <h4 className="text-[#427185] text-center">
                          Shop today’s deals
                        </h4>
                      </div>
                    </div>
                  )}

                  {/* Items added to cart  */}
                  {items.map((cart) => (
                    <>
                      <div
                        key={cart.id}
                        className="text mt-2 mx-5 flex justify-center gap-2 flex-row"
                      >
                        <li
                          key={cart.id}
                          className="border-[0.5px] border-orange-600 bg-[#ffffff81] rounded-xl p-2 flex flex-col md:flex-row gap-2 items-center"
                        >
                          <img className="m-auto" width={45} src={cart.logo} />{" "}
                          {cart.text}{" "}
                          <span className="text-red-700 flex flex-row md:flex-col items-center">
                            {cart.price}

                            <button
                              className="text-xl text-blue-700 "
                              type="button"
                              onClick={() => dispatch(deleteItemsCart(cart.id))}
                            >
                              <i className="ri-delete-bin-2-line"></i>
                            </button>
                          </span>
                        </li>
                      </div>
                    </>
                  ))}

                  {/* For deleting all cart items */}
                  {items.length > 2 ? (
                    <button
                      className="mt-3 p-1 bg-amber-500 rounded-sm text-black  block m-auto border border-amber-600"
                      type="button"
                      onClick={() => dispatch(deleteall())}
                    >
                      Delete all
                    </button>
                  ) : (
                    <button
                      className="mt-3 p-1 bg-amber-500 rounded-sm text-black hidden m-auto border border-amber-600"
                      type="button"
                      onClick={() => dispatch(deleteall())}
                    >
                      Delete all
                    </button>
                  )}

                  {/* For concluding total price  */}
                  {items.length > 0 &&
                    (() => {
                      const totalPrice = items.reduce(
                        (acc, cart) =>
                          acc + Number(cart.price.replace(/[₹,]/g, "")),
                        0
                      );
                      return (
                        <div className="relative">
                          <div className="text-center mt-5 mb-2">
                            Total Price: ₹{totalPrice.toLocaleString()}
                          </div>
                        </div>
                      );
                    })()}
                </div>
              </>
            )}
          </ul>

          {handleNav && (
            <>
              <div
                ref={reponsiveNav}
                className="downNav absolute pt-4 top-0  -left-72 w-screen h-screen  border border-white bg-white z-50"
              >
                {/* top-[3.5rem] */}
                <div className="flex justify-between mx-6 items-center border-b-[1px] border-zinc-400">
                  <div className="image flex justify-center items-center">
                    <div>
                      <i className="ri-shopping-bag-4-line text-amber-600 text-xl"></i>
                    </div>
                    <div>
                      <span className="style-script-regular text-[#2A55E5] font-bold">
                        Shop
                      </span>
                    </div>
                  </div>
                  <i
                    className="ri-close-line text-xl border border-slate-100 bg-slate-100 px-1  rounded-md"
                    onClick={handleCross}
                  ></i>
                </div>
                <div className="dropdown">
                  <ul className="mx-6 mt-6 flex flex-col gap-5 text-lg font-semibold justify-center items-start z-40">
                    <li className="border-b-2 border-white hover:border-b-2 hover:border-slate-900">
                      Home
                    </li>
                    <li className="border-b-2 border-white hover:border-b-2 hover:border-slate-900">
                      About Us
                    </li>
                    <li className="border-b-2 border-white hover:border-b-2 hover:border-slate-900">
                      Events
                    </li>
                    <li className="border-b-2 border-white hover:border-b-2 hover:border-slate-900">
                      GitHub
                    </li>
                    <li className="border-b-2 border-white hover:border-b-2 hover:border-slate-900">
                      Contact Us
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
