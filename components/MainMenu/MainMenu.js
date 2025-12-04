"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useState } from "react";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import Link from "next/link";

export const MainMenu = ({ items }) => {
  console.log("MAIN MENU: ", items);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  let home1 = useRef(null);
  let home2 = useRef(null);
  let mobileNavFull = useRef(null);
  let mobileNav = useRef(null);
  let burger = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    if (window.innerWidth < 768) {
      window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY && window.scrollY > 60) {
          gsap.to(mobileNav, { y: -80, duration: 0.4 });
        } else {
          gsap.to(mobileNav, { y: 0, duration: 0.4 });
        }

        lastScrollY = window.scrollY;
        // console.log("window ", window.scrollY);
        // console.log("last ", lastScrollY);
      });
    }
  });

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(mobileNavFull, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.in",
      });
      document.body.style.overflowY = "hidden";
    }
  });

  function animateNavOut() {
    gsap.to(mobileNavFull, { opacity: 0, duration: 0.3, ease: "power2.out" });
  }

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
        className="flex z-20 flex-1 justify-end md:hidden top-0 fixed h-20 w-full bg-white border-b-2 border-black"
      >
        <div className="w-full h-full flex items-center justify-center">
          <Link
            href="/"
            className="absolute h-12 w-12 flex items-center justify-center"
          >
            <img src="/images/services1.png" className="h-12 absolute z-10" />
          </Link>
        </div>
        <MdMenu
          id="burger"
          size={30}
          className="cursor-pointer z-5 absolute top-6 right-6"
          onClick={() => {
            setIsMobileMenuOpen(true);
          }}
        />
      </div>
      {!!isMobileMenuOpen && (
        <div
          ref={(el) => {
            mobileNavFull = el;
          }}
          id="mobileNavFull"
          className="uppercase tracking-widest text-sm w-full z-30 fixed overflow-auto bg-black text-white left-0 top-0 flex flex-col items-center justify-center"
        >
          <IoCloseSharp
            className="cursor-pointer absolute top-6 right-6"
            size={30}
            onClick={() => {
              {
                setTimeout(() => {
                  setIsMobileMenuOpen(false);
                }, 400),
                  animateNavOut();
                document.body.style.overflowY = "scroll";
              }
            }}
          />
          {(items || []).map((item) => (
            <div key={item.id} className="cursor-pointer relative group">
              <div>
                {item.destination?.startsWith("/") ? (
                  <Link href={item.destination} className="p-5 block">
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.destination}
                    target={item.target || "_blank"}
                    rel="noopener noreferrer"
                    className="p-5 block"
                  >
                    {item.label}
                  </a>
                )}
              </div>
              {!!item.subMenuItems?.length && (
                <div className="pl-10">
                  {item.subMenuItems.map((subMenuItem) => (
                    <Link
                      key={subMenuItem.id}
                      href={subMenuItem.destination}
                      className="block whitespace-nowrap p-5 "
                    >
                      {subMenuItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/"
            className="relative h-20 w-20 flex items-center justify-center"
          >
            <img src="/images/home_rat_2.png" className="h-16 absolute z-10" />
          </Link>
          <div className="flex flex-row gap-3 absolute bottom-4">
            <Link href="https://www.instagram.com/thea_mallorie" target="blank">
              <div className="socialIcon">
                <img
                  className="icon"
                  src="https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/instagram-white.png"
                />
              </div>
            </Link>
            <Link href="tel:07495685568">
              <div className="socialIcon">
                <img
                  className="icon"
                  src="https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/whatsapp-white.png"
                />
              </div>
            </Link>
          </div>
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
            src="/images/services1.png"
            className="h-20 absolute"
          />
          <Link href="/" className="absolute">
            <img
              ref={(el) => {
                home2 = el;
              }}
              id="home2"
              onMouseOver={() => homeHover()}
              onMouseLeave={() => homeUnHover()}
              src="/images/home_rat_2.png"
              className="h-20 absolute"
            />
          </Link>
        </div>
        <div className="flex flex-1 justify-around h-8 items-center gap-20 max-w-5xl">
          {(items || []).map((item) => (
            <div key={item.id} className="cursor-pointer relative group">
              <div>
                {item.destination?.startsWith("/") ? (
                  <Link href={item.destination} className="p-5 block">
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.destination}
                    target={item.target || "_blank"}
                    rel="noopener noreferrer"
                    className="p-5 block"
                  >
                    {item.label}
                  </a>
                )}
              </div>
              {!!item.subMenuItems?.length && (
                <div className="group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3">
                  {item.subMenuItems.map((subMenuItem) => (
                    <Link
                      key={subMenuItem.id}
                      href={subMenuItem.destination}
                      className="block whitespace-nowrap p-5 hover:bg-slate-700"
                    >
                      {subMenuItem.label}
                    </Link>
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
