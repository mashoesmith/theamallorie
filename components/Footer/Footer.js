import React from "react";

export const Footer = () => {
  return (
    <footer>
      <p className="text-white">
        &copy; {new Date().getFullYear()} Thea Mallorie
      </p>
      <div className="flex flex-row gap-3">
        <a
          href="https://www.instagram.com/the_keepsake_press_shop/"
          target="_blank"
        >
          <div className="socialIcon">
            <img
              className="icon"
              src="https://theamallorie.flywheelsites.com/wp-content/uploads/2023/12/instagram-white.png"
            />
          </div>
        </a>
        <a
          href="https://wa.me/447495685568"
          target="_blank"
          rel="noopener noreferrer"
        >
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
