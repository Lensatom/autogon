import { useRoutes } from "react-router-dom";
import {
  LandingPage,
  Platform,
  Company,
  Blog,
  Whitepapers,
  CaseStudies,
  Pricing,
  SolutionsRoute
} from "./pages";
import { ROUTES } from "./utils/routes";

function App() {
  return useRoutes([
    {
      path: ROUTES.index,
      element: <LandingPage />,
    },
    {
      path: `${ROUTES.platform}/*`,
      element: <Platform />,
    },
    {
      path: "solutions/*",
      element: <SolutionsRoute />,
    },
    {
      path: "company/*",
      element: <Company />,
    },
    {
      path: "blog",
      element: <Blog />,
    },
    {
      path: "whitepaper",
      element: <Whitepapers />,
    },
    {
      path: "case-studies",
      element: <CaseStudies />,
    },
    {
      path: "pricing",
      element: <Pricing />,
    },
  ]);
}

export default App;
