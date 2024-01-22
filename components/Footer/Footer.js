import React from "react";

export const Footer = () => {
  return (
    <footer>
      <p className="text-white">
        &copy; {new Date().getFullYear()} Thea Mallorie
      </p>
      <div className="flex flex-row gap-3">
        <a href="https://www.instagram.com/thea_mallorie" target="blank">
          <div className="socialIcon">
            <img
              className="icon"
              src="https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/instagram-white.png"
            />
          </div>
        </a>
        <a href="tel:07495685568">
          <div className="socialIcon">
            <img
              className="icon"
              src="https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/whatsapp-white.png"
            />
          </div>
        </a>
      </div>
    </footer>
  );
};
