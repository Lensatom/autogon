import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import { BrowserRouter } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import { Typography } from "./components";
import { HiOutlineCog } from "react-icons/hi";
// @ts-ignore: explanation here
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'; 

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <div className="App">
        <TawkMessengerReact
          propertyId="6404981031ebfa0fe7f0c720"
          widgetId="1gqov40cn"
        />
      </div>
      <CookieConsent
        buttonWrapperClasses="flex flex-col-reverse gap-3 w-60 py-5"
        declineButtonClasses="w-full !m-0 !border-2 !rounded-full !border-white !bg-transparent "
        buttonClasses="w-full !bg-green-400 !rounded-full !text-white !m-0 pb-0"
        containerClasses="px-10"
        buttonText="Accept all"
        enableDeclineButton
        declineButtonText="Decline All"
      >
        <Typography isDarkMode className="w-[80%]" variant="caption">
          We use cookies to give you the best possible experience and improve
          our website. If you click accept all or continue to use the site after
          you are presented this notice, you consent to this use. Read more
        </Typography>
        <div className="flex items-center gap-2 mt-2" >
          <HiOutlineCog className="h-5 w-5 text-white" />
          <Typography isDarkMode variant="caption" >Settings</Typography>
        </div>
      </CookieConsent>
    </BrowserRouter>
  </React.StrictMode>
);
