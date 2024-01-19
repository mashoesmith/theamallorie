"use client";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { FaBars, FaCross, FaTimes } from "react-icons/fa";
import React from "react";

export const MainMenu = ({ items }) => {
  console.log("MAIN MENU: ", items);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function animateNav() {
    gsap.fromTo(mobileNavFull, { opacity: 0 }, { opacity: 1 });
  }

  let home1 = useRef(null);
  let home2 = useRef(null);
  let mobileNavFull = useRef(null);
  let mobileNav = useRef(null);

  React.useEffect(() => {
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY && window.scrollY > 60) {
        gsap.to(mobileNav, { y: -80, duration: 0.4 });
      } else {
        gsap.to(mobileNav, { y: 0, duration: 0.4 });
      }

      lastScrollY = window.scrollY;
    });
  });

  function homeHover() {
    gsap.to(home2, { opacity: 1, duration: 0 });
    gsap.to(home1, { opacity: 0, duration: 0 });
  }

  function homeUnHover() {
    gsap.to(home2, { opacity: 0, duration: 0 });
    gsap.to(home1, { opacity: 1, duration: 0 });
  }

  return (
    <>
      <div
        ref={(el) => {
          mobileNav = el;
        }}
        id="mobileNav"
        className="flex flex-1 justify-end md:hidden top-0 fixed h-20 w-full bg-white border-b-2 border-black"
      >
        <div className="w-full h-full flex items-center justify-center">
          <a
            href="/"
            className="absolute h-12 w-12 flex items-center justify-center"
          >
            <img
              src="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/services1-1.png"
              className="h-12 absolute z-10"
            />
          </a>
        </div>
        <FaBars
          size={30}
          className="cursor-pointer z-5 absolute top-6 right-6"
          onClick={() => {
            setIsMobileMenuOpen(true);
            animateNav();
          }}
        />
      </div>
      {!!isMobileMenuOpen && (
        <div
          ref={(el) => {
            mobileNavFull = el;
          }}
          className="w-full h-[460px] fixed overflow-auto max-h-screen bg-black text-white left-0 top-0 flex flex-col items-center justify-center"
        >
          <FaTimes
            className="cursor-pointer z-10 absolute top-6 right-6"
            size={30}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <a
            href="/"
            className="absolute h-12 w-12 flex items-center justify-center top-4"
          >
            <img
              src="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/services1-1.png"
              className="h-12 absolute z-10"
            />
          </a>
          {(items || []).map((item) => (
            <div key={item.id} className="cursor-pointer relative group">
              <div>
                <a href={item.destination} className="p-5 block">
                  {item.label}
                </a>
              </div>
              {!!item.subMenuItems?.length && (
                <div className="pl-10">
                  {item.subMenuItems.map((subMenuItem) => (
                    <a
                      key={subMenuItem.id}
                      href={subMenuItem.destination}
                      className="block whitespace-nowrap p-5 "
                    >
                      {subMenuItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <div
        id="nav"
        className="bg-white text-black px-5 h-[240px] top-0 z-20 md:flex flex-col justify-center items-center py-10 gap-8 hidden"
      >
        <div className="py-4 flex justify-center">
          <img
            ref={(el) => {
              home1 = el;
            }}
            id="home1"
            src="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/services1-1.png"
            className="h-20 absolute"
          />
          <a href="/" className="absolute">
            <img
              ref={(el) => {
                home2 = el;
              }}
              id="home2"
              onMouseOver={() => homeHover()}
              onMouseLeave={() => homeUnHover()}
              src="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/home_rat.png"
              className="h-20 absolute"
            />
          </a>
        </div>
        <div className="flex flex-1 justify-around h-8 items-center gap-20 max-w-5xl">
          {(items || []).map((item) => (
            <div key={item.id} className="cursor-pointer relative group">
              <div>
                <a href={item.destination} className="p-5 block">
                  {item.label}
                </a>
              </div>
              {!!item.subMenuItems?.length && (
                <div className="group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3">
                  {item.subMenuItems.map((subMenuItem) => (
                    <a
                      key={subMenuItem.id}
                      href={subMenuItem.destination}
                      className="block whitespace-nowrap p-5 hover:bg-slate-700"
                    >
                      {subMenuItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
