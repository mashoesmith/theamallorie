import React from "react";

export const Footer = () => {
  return (
    <footer>
      <p className="text-white">
        &copy; {new Date().getFullYear()} Thea Mallorie
      </p>
      <div className="flex flex-row gap-3">
        <a href="https://www.instagram.com/thea_mallorie/" target="blank">
          <div className="socialIcon">
            <img
              className="icon"
              src="http://thea-mallorie.local/wp-content/uploads/2023/12/instagram-white.png"
            />
          </div>
        </a>
        <a href="https://www.youtube.com" target="blank">
          <div className="socialIcon">
            <img
              className="icon"
              src="http://thea-mallorie.local/wp-content/uploads/2023/12/youtube-white.png"
            />
          </div>
        </a>
        <a href="tel:07792020714">
          <div className="socialIcon">
            <img
              className="icon"
              src="http://thea-mallorie.local/wp-content/uploads/2023/12/whatsapp-white.png"
            />
          </div>
        </a>
      </div>
    </footer>
  );
};
