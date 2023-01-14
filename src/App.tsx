import { useRoutes } from "react-router-dom";
import { LandingPage, Platform } from "./pages";
import { ROUTES } from "./utils/routes";

function App() {
  return useRoutes([
    {
      path: ROUTES.index,
      element: <LandingPage />,
    },
    {
      path: `${ROUTES.platform}/*`,
      element: <Platform />
    }
  ]);
}

export default App;
