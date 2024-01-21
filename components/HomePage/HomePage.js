"use client";
import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { Power1 } from "gsap";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { Footer } from "components/Footer";
// import music from "././public/creek.mp3";

export const HomePage = () => {
  let services1 = useRef(null);
  let services2 = useRef(null);
  let about1 = useRef(null);
  let about2 = useRef(null);
  let contact1 = useRef(null);
  let contact2 = useRef(null);
  let portfolio1 = useRef(null);
  let portfolio2 = useRef(null);
  let studio1 = useRef(null);
  let studio2 = useRef(null);
  let vinyl = useRef(null);
  let audio = useRef(null); // Create a reference to store the audio object
  const pauseSound = useRef(null);
  let door1 = useRef(null);
  let door2 = useRef(null);
  let frame = useRef(null);
  let room = useRef(null);
  let doors = useRef(null);

  useEffect(() => {
    pauseSound.current = new Audio(
      "http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/record_stop.mp3"
    );
  }, []);

  function playMusic() {
    if (!audio.current) {
      // Check if audio object exists
      const audioInstance = new Audio(
        "http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/jazz.mp3"
      );
      audio.current = audioInstance; // Store audio object in ref
    }

    if (!audio.current.paused) {
      audio.current.pause();
      pauseSound.current.play(); // Play the sound effect
    } else {
      audio.current.play();
    }
  }

  function stopMusic() {
    if (audio.current && !audio.current.paused) {
      audio.current.pause();
      if (pauseSound.current) {
        pauseSound.current.play(); // Play the sound effect
      }
    }
  }

  function playKnock() {
    new Audio(
      "http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/knock.mp3"
    ).play();
  }

  function playCreek() {
    new Audio(
      "http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/door_open.mp3"
    ).play();
  }

  console.log(services1, about1);

  useEffect(() => {
    console.log(door1);
  }, []);

  function animateDoors(delay) {
    gsap.to(door1, {
      scaleX: 0.02,
      ease: "Power1.out",
      duration: 1.5,
    });
    gsap.to(door2, {
      scaleX: 0.02,
      ease: "Power1.out",
      transformOrigin: "right",
      duration: 1.5,
      onComplete: animateRoom,
    });
  }

  function animateRoom() {
    gsap.to([doors, frame], {
      webkitFilter: "blur(10px)",
      opacity: 0,
      zIndex: 0,
      duration: 0.5,
      delay: 0.5,
    });
    gsap.to([room, vinyl], {
      webkitFilter: "blur(0px)",
      opacity: 1,
      duration: 0.5,
      delay: 1,
      onComplete: animateRats,
    });
  }

  function animateRats() {
    gsap.to([services1, about1, contact1, studio1, portfolio1], {
      opacity: 1,
      delay: 1,
      duration: 0.5,
      onComplete: allowHover,
    });
  }

  function allowHover() {
    gsap.to([services2, about2, contact2, studio2, portfolio2], {
      display: "block",
    });
  }

  // useEffect(() => {
  //   console.log(services1, about1);
  //   gsap.to([services1, about1], { opacity: 1, delay: 1, duration: 0.5 });
  // }, []);

  function servicesHover() {
    gsap.to(services2, { opacity: 1, duration: 0 });
    gsap.to(services1, { opacity: 0, duration: 0 });
  }

  // function servicesUnHover() {
  //   gsap.to(services2, { opacity: 0, duration: 0 });
  //   gsap.to(services1, { opacity: 1, duration: 0 });
  // }

  function aboutHover() {
    gsap.to(about2, { opacity: 1, duration: 0 });
    gsap.to(about1, { opacity: 0, duration: 0 });
  }

  // function aboutUnHover() {
  //   gsap.to(about2, { opacity: 0, duration: 0 });
  //   gsap.to(about1, { opacity: 1, duration: 0 });
  // }

  function contactHover() {
    gsap.to(contact2, { opacity: 1, duration: 0 });
    gsap.to(contact1, { opacity: 0, duration: 0 });
  }

  // function contactUnHover() {
  //   gsap.to(contact2, { opacity: 0, duration: 0 });
  //   gsap.to(contact1, { opacity: 1, duration: 0 });
  // }

  function studioHover() {
    gsap.to(studio2, { opacity: 1, duration: 0 });
    gsap.to(studio1, { opacity: 0, duration: 0 });
  }

  // function studioUnHover() {
  //   gsap.to(studio2, { opacity: 0, duration: 0 });
  //   gsap.to(studio1, { opacity: 1, duration: 0 });
  // }

  function portfolioHover() {
    gsap.to(portfolio2, { opacity: 1, duration: 0 });
    gsap.to(portfolio1, { opacity: 0, duration: 0 });
  }

  // function portfolioUnHover() {
  //   gsap.to(portfolio2, { opacity: 0, duration: 0 });
  //   gsap.to(portfolio1, { opacity: 1, duration: 0 });
  // }

  return (
    <div id="container">
      <img
        id="BGimage"
        ref={(el) => {
          room = el;
        }}
        src="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/mouse_house_v2-scaled.jpg"
      />

      <svg
        className="doors"
        ref={(el) => {
          doors = el;
        }}
        viewBox="0 0 1920 1080"
        fill="transparent"
      >
        <image
          id="frame"
          ref={(el) => {
            frame = el;
          }}
          width="1920"
          height="1080"
          xlinkHref="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/door_frame_picture_v2.png"
        />
        <image
          id="door1"
          width="1932"
          height="7740"
          ref={(el) => {
            door1 = el;
          }}
          onClick={() => {
            setTimeout(() => {
              animateDoors();
              playCreek();
            }, 700),
              playKnock();
          }}
          transform="translate(767.89 262.45) scale(.1009)"
          xlinkHref="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/door_left_v2.png"
        />
        <image
          id="door2"
          width="1979"
          height="7730"
          ref={(el) => {
            door2 = el;
          }}
          onClick={() => {
            setTimeout(() => {
              animateDoors();
              playCreek();
            }, 700),
              playKnock();
          }}
          transform="translate(958.77 262.45) scale(.1011)"
          xlinkHref="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/door_right_v2.png"
        />

        {/* <image
          width="1932"
          height="7740"
          transform="translate(745.5 132.5) scale(.11)"
          xlink:href="../../../../../../../../../Users/markshoesmith/Desktop/THEA/assets for website NEW/door_left.png"
        />
        <image
          width="1979"
          height="7730"
          transform="translate(957.5 133.5) scale(.11)"
          xlink:href="../../../../../../../../../Users/markshoesmith/Desktop/THEA/assets for website NEW/door_right.png"
        /> */}
      </svg>

      <svg className="rat" viewBox="0 0 1920 1080" fill="transparent">
        <image
          id="studio1"
          ref={(el) => {
            studio1 = el;
          }}
          width="1264"
          height="1857"
          transform="translate(1385.87 235) scale(.11)"
          xlinkHref="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/studio1.png"
        />
        <image
          id="portfolio1"
          ref={(el) => {
            portfolio1 = el;
          }}
          width="1612"
          height="1714"
          transform="translate(362 776) scale(.11)"
          xlinkHref="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/portfolio1.png"
        />
        <image
          id="about1"
          ref={(el) => {
            about1 = el;
          }}
          width="1478"
          height="956"
          transform="translate(974 844.78) scale(.11)"
          xlinkHref="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/about1-1.png"
        />
        <image
          id="services1"
          ref={(el) => {
            services1 = el;
          }}
          width="898"
          height="1142"
          transform="translate(1330.5 804) scale(.11)"
          xlinkHref="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/services1-2.png"
        />
        <image
          id="contact1"
          ref={(el) => {
            contact1 = el;
          }}
          width="1613"
          height="1030"
          transform="translate(1318.39 947) scale(.11)"
          xlinkHref="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/contact1.png"
        />

        {/* <image
          id="services1"
          width="281"
          height="357"
          ref={(el) => {
            services1 = el;
          }}
          transform="translate(1268 747) scale(.47)"
          xlinkHref="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/services1-1.png"
        />
        //{" "}
        <image
          id="about1"
          width="411"
          height="266"
          ref={(el) => {
            about1 = el;
          }}
          transform="translate(902 821) scale(.53)"
          xlinkHref="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/about1-1.png"
        /> */}
      </svg>

      <svg className="rat" viewBox="0 0 1920 1080" fill="transparent">
        <a href="studio">
          <image
            id="studio2"
            ref={(el) => {
              studio2 = el;
            }}
            onMouseOver={() => studioHover()}
            // onMouseLeave={() => studioUnHover()}
            width="1116"
            height="2012"
            transform="translate(1386.34 172.23) scale(.11)"
            xlinkHref="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/studio2.png"
          />
        </a>
        <a href="portfolio">
          <image
            id="portfolio2"
            ref={(el) => {
              portfolio2 = el;
            }}
            onMouseOver={() => portfolioHover()}
            // onMouseLeave={() => portfolioUnHover()}
            width="1974"
            height="1755"
            transform="translate(402 765) scale(.11)"
            xlinkHref="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/portfolio2.png"
          />
        </a>
        <a href="about">
          <image
            id="about2"
            ref={(el) => {
              about2 = el;
            }}
            onMouseOver={() => aboutHover()}
            // onMouseLeave={() => aboutUnHover()}
            width="1550"
            height="1499"
            transform="translate(958 791) scale(.11)"
            xlinkHref="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/about2-1.png"
          />
        </a>
        <a href="services">
          <image
            id="services2"
            ref={(el) => {
              services2 = el;
            }}
            onMouseOver={() => servicesHover()}
            // onMouseLeave={() => servicesUnHover()}
            width="1196"
            height="1209"
            transform="translate(1305.1 801) scale(.11)"
            xlinkHref="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/services2-1.png"
          />
        </a>
        <a href="contact">
          <image
            id="contact2"
            ref={(el) => {
              contact2 = el;
            }}
            onMouseOver={() => contactHover()}
            // onMouseLeave={() => contactUnHover()}
            width="1722"
            height="995"
            transform="translate(1327 916.37) scale(.11)"
            xlinkHref="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/contact2.png"
          />
        </a>
        <image
          id="vinyl"
          ref={(el) => {
            vinyl = el;
          }}
          onClick={playMusic}
          width="1194"
          height="877"
          transform="translate(1134 972) scale(.11)"
          xlinkHref="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/vinyl.png"
        />

        {/* <a href="services">
          <image
            id="services2"
            width="377"
            height="381"
            ref={(el) => {
              services2 = el;
            }}
            onMouseOver={() => servicesHover()}
            onMouseLeave={() => servicesUnHover()}
            transform="translate(1222.12 735) scale(.45)"
            xlinkHref="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/services2-1.png"
          />
        </a>
        <a href="about">
          <image
            id="about2"
            width="431"
            height="417"
            ref={(el) => {
              about2 = el;
            }}
            onMouseOver={() => aboutHover()}
            onMouseLeave={() => aboutUnHover()}
            transform="translate(880 759) scale(.49)"
            xlinkHref="http://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/about2-1.png"
          />
        </a> */}
      </svg>
    </div>
  );
};

export default HomePage;
