"use client";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaHouseUser } from "react-icons/fa";

export const MainMenu = ({ items }) => {
  console.log("MAIN MENU: ", items);

  let home1 = useRef(null);
  let home2 = useRef(null);
  let nextPage = useRef(null);

  function homeHover() {
    gsap.to(home2, { opacity: 1, duration: 0 });
    gsap.to(home1, { opacity: 0, duration: 0 });
  }

  function homeUnHover() {
    gsap.to(home2, { opacity: 0, duration: 0 });
    gsap.to(home1, { opacity: 1, duration: 0 });
  }

  function blink() {
    gsap.fromTo(nextPage, { opacity: 0 }, { opacity: 1, duration: 3 });
  }

  return (
    // function fadeOutIn() {
    //   useGSAP(() => {
    //     // use selectors...
    //     gsap.to(".box", { rotation: "+=360" });
    //   });
    // },
    <div
      id="nav"
      className="bg-white text-black px-5 h-[240px] top-0 z-20 flex flex-col justify-center items-center py-10 gap-8"
    >
      <div className="py-4 flex justify-center text-pink-600">
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
          <div
            key={item.id}
            className="hover:underline hover:decoration-4 cursor-pointer relative group"
          >
            <div>
              <a
                // onClick={() => blink()}
                href={item.destination}
                className="p-5 block"
                // onclick="fadeOutIn()"
              >
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
  );
};
