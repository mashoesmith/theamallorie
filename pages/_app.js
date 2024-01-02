import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/homePage.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { useRef } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-body">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
