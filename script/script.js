import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// import { gsap } from "gsap";
// import { CSSRulePlugin } from "gsap/CSSRulePlugin";

// gsap.registerPlugin(CSSRulePlugin);

// var header = document.getElementById("header");
var door1 = document.getElementById("door1");
var door2 = document.getElementById("door2");
var room = document.getElementById("BGimage");
var creek = document.getElementById("creek");
var creek2 = document.getElementById("creek2");
var services = document.getElementById("services1");
var services2 = document.getElementById("services2");
var about = document.getElementById("about1");
var about2 = document.getElementById("about2");
var wall1 = document.getElementById("wall1");
var wall2 = document.getElementById("wall2");

// CSSPlugin.defaultSkewType = "simple";

var door1ClickCounter = 0;
var door2ClickCounter = 0;
window.onload = function () {
  gsap.set(room, { opacity: 0 });
  gsap.set(services, { opacity: 0 });
  gsap.set(services2, { opacity: 0 });
  gsap.set(about, { opacity: 0 });
  gsap.set(about2, { opacity: 0 });

  door1.onclick = function () {
    door1ClickCounter++;
    if (door1ClickCounter == 1 && door2ClickCounter == 0) {
      gsap.to(door1, 5, {
        scaleX: 0.2,
        // skewY: 10,
        // skewType: "simple",
        // transformStyle: "preserve-3d",
        // force3D: true,
        // transformPerspective: 100,
        transformOrigin: "left",
        ease: "back.out(1)",
        cursor: "default",
      });
      gsap.to(door2, 3, {
        scaleX: 0.5,
        transformOrigin: "right",
        ease: "power1.out",
      });
      creek.play();
    }
  };
  door2.onclick = function () {
    door2ClickCounter++;
    if (door2ClickCounter == 1 && door1ClickCounter == 0) {
      gsap.to(door1, 5, {
        scaleX: 0.2,
        transformOrigin: "left",
        ease: "power1.out",
        cursor: "default",
      });
      gsap.to(door2, 3, {
        scaleX: 0.5,
        transformOrigin: "right",
        ease: "power1.out",
      });
      creek.play();
    }
    if (door2ClickCounter == 2 && door1ClickCounter == 0) {
      gsap.to(door2, 4, {
        scaleX: 0.2,
        transformOrigin: "right",
        ease: "power4.out",
        cursor: "default",
        onComplete: animateRoom,
      });
      creek2.play();
    }
    if (door2ClickCounter !== 0 && door1ClickCounter !== 0) {
      gsap.to(door2, 4, {
        scaleX: 0.2,
        transformOrigin: "right",
        ease: "power4.out",
        cursor: "default",
        onComplete: animateRoom,
      });
      creek2.play();
    }
  };
};

function animateRoom() {
  gsap.to(doors, 0.5, {
    opacity: 0,
    ease: "power1.out",
  });
  gsap.to(doors, 0.1, { zIndex: 0, delay: 1 });
  // gsap.to(room, 0.1, { scale: 1, delay: 1.3 });
  gsap.to(room, 0.5, {
    opacity: 1,
    ease: "power1.out",
    delay: 1,
    onComplete: animateRats,
  });
  // gsap.to(door1, 2, { scale: 1.5, x: -300, ease: "power1.out" });
  // gsap.to(wall1, 2, { scale: 1.5, x: -380, ease: "power1.out" });
  // gsap.to(door2, 2, { scale: 1.5, x: 300, ease: "power1.out" });
  // gsap.to(wall2, 2, { scale: 1.5, x: 380, ease: "power1.out" });
}

function animateRats() {
  gsap.to(services, 1, { opacity: 1 });
  gsap.to(about, 1, { opacity: 1 });
  ratHover();
}

function ratHover() {
  services.onmouseover = function () {
    useGSAP(() => {
      gsap.to(services, 0, { opacity: 0 });
      gsap.to(services2, 0, { opacity: 1 });
    });
  };

  services2.onmouseover = function () {
    useGSAP(() => {
      gsap.to(services, 0, { opacity: 0 });
      gsap.to(services2, 0, { opacity: 1 });
    });
  };

  services2.onmouseout = function () {
    useGSAP(() => {
      gsap.to(services, 0, { opacity: 1 });
      gsap.to(services2, 0, { opacity: 0 });
    });
  };

  about.onmouseover = function () {
    useGSAP(() => {
      gsap.to(about, 0, { opacity: 0 });
      gsap.to(about2, 0, { opacity: 1 });
    });
  };

  about2.onmouseover = function () {
    useGSAP(() => {
      gsap.to(about, 0, { opacity: 0 });
      gsap.to(about2, 0, { opacity: 1 });
    });
  };

  about2.onmouseout = function () {
    useGSAP(() => {
      gsap.to(about, 0, { opacity: 1 });
      gsap.to(about2, 0, { opacity: 0 });
    });
  };
}
