import React from "react";
import Link from "next/link";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  //   const location = useLocation();
  const MainMenu = ({ items }) => {
    console.log("MAIN MENU: ", items);
    return (
      <AnimatePresence>
        <div
          // location={location}
          // key={location.pathname}
          id="nav"
          className="bg-white text-black px-5 h-[240px] top-0 z-20 flex flex-col justify-center items-center py-10 gap-8"
        >
          <div className="py-4 flex justify-center">
            <a href="/">
              <img
                src="http://thea-mallorie.local/wp-content/uploads/2023/12/home_rat.png"
                className="h-20"
              />
            </a>
          </div>
          <div className="flex flex-1 justify-around h-8 items-center gap-20 max-w-5xl">
            {(items || []).map((item) => (
              <div
                key={item.id}
                className="hover:underline cursor-pointer relative group"
              >
                <div>
                  <Link href={item.destination} className="p-5 block">
                    {item.label}
                  </Link>
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
      </AnimatePresence>
    );
  };
}

export default AnimatedRoutes;
