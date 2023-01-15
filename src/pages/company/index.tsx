import { useRoutes } from "react-router-dom";
import { Company as AboutUs } from './pages/AboutUs';
import { Event } from './pages/Events';


export const Company = () => {
  return useRoutes([
    {
      index: true,
      element: <AboutUs />,
    },
    {
      path: "events-list",
      element: <Event />,
    },
    // {
    //   path: "explore-and-fix",
    //   element: <ExploreFix />,
    // },
    // {
    //   path: "integrate-automate",
    //   element: <IntegrateAutomate />,
    // },
  ]);
};
