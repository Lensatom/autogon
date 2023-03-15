import { useRoutes } from "react-router-dom";
import { Company as AboutUs } from './pages/AboutUs';
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import { Event } from './pages/Events';


export const Company = () => {
  return useRoutes([
    {
      index: true,
      element: <AboutUs />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "events-list",
      element: <Event />,
    },
    {
      path: "careers",
      element: <Careers />,
    },
  ]);
};
