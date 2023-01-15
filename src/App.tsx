import { useRoutes } from "react-router-dom";
import { LandingPage, Platform, ProfessionalService, Company } from "./pages";
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
      path: "professional-services",
      element: <ProfessionalService />,
    },
    {
      path: "company/*",
      element: <Company />
    }
  ]);
}

export default App;
