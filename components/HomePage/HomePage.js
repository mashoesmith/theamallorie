"use client";
import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const imageUrls = [
    "/images/whittles_mouse_house.jpg",
    "/images/whittles_mobile_mouse_house.jpg",
    "/images/whittles_mysterious_mouse_house.jpg",
    "/images/door_left.png",
    "/images/door_right.png",
  ];
  let services1 = useRef(null);
  let services2 = useRef(null);
  let services2Mob = useRef(null);
  let about1 = useRef(null);
  let about2 = useRef(null);
  let about2Mob = useRef(null);
  let contact1 = useRef(null);
  let contact2 = useRef(null);
  let contact2Mob = useRef(null);
  let portfolio1 = useRef(null);
  let portfolio2 = useRef(null);
  let portfolio2Mob = useRef(null);
  let studio1 = useRef(null);
  let studio2 = useRef(null);
  let studio2Mob = useRef(null);
  let vinyl = useRef(null);
  let vinylMob = useRef(null);
  let audio = useRef(null);
  const pauseSound = useRef(null);
  let door1 = useRef(null);
  let door2 = useRef(null);
  let frame = useRef(null);
  let room = useRef(null);
  let roomMobile = useRef(null);
  let doors = useRef(null);
  let preloader = useRef(null); // Ref for the preloader element

  useEffect(() => {
    const imagePromises = imageUrls.map((url) => fetch(url));
    Promise.all(imagePromises)
      .then(() =>
        gsap.to(preloader, {
          opacity: 0,
          duration: 0.2,
          delay: 1,
        })
      )
      .then(() => setIsLoading(false)) // Set loading to false after all images load
      .catch((error) => console.error("Error loading images:", error));

    // Preload background images (optional)
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });

    pauseSound.current = new Audio(
      "https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/record_stop.mp3"
    );
  }, []);

  useLayoutEffect(() => {
    if (!isLoading) {
      gsap.to(doors, {
        opacity: 1,
        duration: 1,
        delay: 1,
      });
    }
  }, [isLoading]);

  function playMusic() {
    if (!audio.current) {
      // Check if audio object exists
      const audioInstance = new Audio(
        "https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/jazz.mp3"
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
      "https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/knock.mp3"
    ).play();
  }

  function playCreek() {
    new Audio(
      "https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/door_open.mp3"
    ).play();
  }

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
    gsap.to([room, roomMobile, vinyl, vinylMob], {
      webkitFilter: "blur(0px)",
      opacity: 1,
      duration: 0.5,
      delay: 1,
      onComplete: animateRats,
    });
  }

  function animateRats() {
    gsap.to(
      [
        services1,
        about1,
        contact1,
        studio1,
        portfolio1,
        services2Mob,
        about2Mob,
        contact2Mob,
        studio2Mob,
        portfolio2Mob,
      ],
      {
        opacity: 1,
        delay: 1,
        duration: 0.5,
        onComplete: allowHover,
      }
    );
  }

  function allowHover() {
    gsap.to([services2, about2, contact2, studio2, portfolio2], {
      display: "block",
    });
  }

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
      {isLoading ? (
        // <div
        //   className="preloader"
        //   ref={(el) => {
        //     preloader = el;
        //   }}
        // ></div>
        // <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
        //   <circle
        //     ref={(el) => {
        //       preloader = el;
        //     }}
        //     className="spin"
        //     cx="400"
        //     cy="400"
        //     fill="none"
        //     r="20"
        //     stroke-width="2"
        //     stroke="#cccccc"
        //     stroke-dasharray="90 140"
        //     stroke-linecap="round"
        //     // width="40px"
        //     // height="40px"
        //   />
        // </svg>
        <div id="spinnerContainer">
          <svg
            ref={(el) => {
              preloader = el;
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 179.44 179.44"
          >
            <path
              className="spinner spin"
              d="M165.26,46.11c7.43,12.83,11.68,27.72,11.68,43.61,0,48.18-39.05,87.23-87.22,87.23S2.5,137.9,2.5,89.72,41.55,2.5,89.72,2.5"
            />
          </svg>
        </div>
      ) : (
        <>
          <img
            id="BGimage"
            ref={(el) => {
              room = el;
            }}
            src="/images/whittles_mouse_house.jpg"
            className="hiddenMobile"
          />
          <img
            id="BGimageMobile"
            ref={(el) => {
              roomMobile = el;
            }}
            src="/images/whittles_mobile_mouse_house.jpg"
            className="md:hidden"
          />
          <svg
            className="doors"
            ref={(el) => {
              doors = el;
            }}
            viewBox="0 0 1920 1080"
            fill="transparent"
            loading="eager"
            priority="true"
          >
            <image
              id="frame"
              ref={(el) => {
                frame = el;
              }}
              width="1920"
              height="1080"
              xlinkHref="/images/whittles_mysterious_mouse_house.jpg"
              loading="eager"
              priority="true"
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
              xlinkHref="/images/door_left.png"
              loading="eager"
              priority="true"
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
              xlinkHref="/images/door_right.png"
              loading="eager"
              priority="true"
            />
          </svg>
          <svg
            className="rat hiddenMobile"
            viewBox="0 0 1920 1080"
            fill="transparent"
          >
            <image
              id="studio1"
              ref={(el) => {
                studio1 = el;
              }}
              width="1264"
              height="1857"
              transform="translate(1378.87 227) scale(.1)"
              xlinkHref="https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/studio1.png"
            />
            <image
              id="portfolio1"
              ref={(el) => {
                portfolio1 = el;
              }}
              width="1612"
              height="1714"
              transform="translate(351 769) scale(.11)"
              xlinkHref="https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/portfolio1.png"
            />
            <image
              id="about1"
              ref={(el) => {
                about1 = el;
              }}
              width="1478"
              height="956"
              transform="translate(964 843.78) scale(.11)"
              xlinkHref="https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/about1-1.png"
            />
            <image
              id="services1"
              ref={(el) => {
                services1 = el;
              }}
              width="898"
              height="1142"
              transform="translate(1328.5 804) scale(.11)"
              xlinkHref="https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/services1-2.png"
            />
            <image
              id="contact1"
              ref={(el) => {
                contact1 = el;
              }}
              width="1613"
              height="1030"
              transform="translate(1318.39 946) scale(.11)"
              xlinkHref="https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/contact1.png"
            />
          </svg>
          <svg
            className="rat hiddenMobile"
            viewBox="0 0 1920 1080"
            fill="transparent"
          >
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
                transform="translate(1378.34 164.23) scale(.11)"
                xlinkHref="https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/studio2.png"
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
                transform="translate(390 760) scale(.11)"
                xlinkHref="https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/portfolio2.png"
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
                transform="translate(947 791) scale(.11)"
                xlinkHref="https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/about2-1.png"
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
                transform="translate(1298.1 793) scale(.11)"
                xlinkHref="https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/services2-1.png"
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
                transform="translate(1338 904.37) scale(.11)"
                xlinkHref="https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/contact2.png"
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
              xlinkHref="https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/vinyl.png"
              className="hiddenMobile"
            />
          </svg>
          <svg
            className="ratMobile md:hidden"
            viewBox="0 0 1080 1920"
            fill="transparent"
          >
            <image
              id="vinylMobile"
              ref={(el) => {
                vinylMob = el;
              }}
              onClick={playMusic}
              width="1194"
              height="877"
              transform="translate(904 941) scale(.13)"
              xlinkHref="https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/vinyl.png"
            />
            <a href="studio">
              <image
                id="studio2Mobile"
                ref={(el) => {
                  studio2Mob = el;
                }}
                onMouseOver={() => studioHover()}
                // onMouseLeave={() => studioUnHover()}
                width="1669"
                height="1652"
                transform="translate(690.19 857) scale(.15)"
                xlinkHref="https://theamallorie.flywheelsites.com/wp-content/uploads/2024/03/studio_mobile_2.png"
              />
            </a>
            <a href="portfolio">
              <image
                id="portfolio2Mobile"
                ref={(el) => {
                  portfolio2Mob = el;
                }}
                onMouseOver={() => portfolioHover()}
                // onMouseLeave={() => portfolioUnHover()}
                width="1974"
                height="1755"
                transform="translate(125 1166) scale(.215)"
                xlinkHref="https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/portfolio2.png"
              />
            </a>
            <a href="about">
              <image
                id="about2Mobile"
                ref={(el) => {
                  about2Mob = el;
                }}
                onMouseOver={() => aboutHover()}
                // onMouseLeave={() => aboutUnHover()}
                width="1550"
                height="1499"
                transform="translate(193.08 778.83) rotate(2.04) scale(.2)"
                xlinkHref="https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/about2-1.png"
              />
            </a>
            <a href="services">
              <image
                id="services2Mobile"
                ref={(el) => {
                  services2Mob = el;
                }}
                onMouseOver={() => servicesHover()}
                // onMouseLeave={() => servicesUnHover()}
                width="1196"
                height="1209"
                transform="translate(579 1129) scale(.26)"
                xlinkHref="https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/services2-1.png"
              />
            </a>
            <a href="contact">
              <image
                id="contact2Mobile"
                ref={(el) => {
                  contact2Mob = el;
                }}
                onMouseOver={() => contactHover()}
                // onMouseLeave={() => contactUnHover()}
                width="1722"
                height="995"
                transform="translate(491 1495) scale(.28)"
                xlinkHref="https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/contact2.png"
              />
            </a>
          </svg>
        </>
      )}
    </div>
  );
};

export default HomePage;
