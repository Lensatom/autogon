import { useRoutes } from "react-router-dom";
import { LandingPage } from "./pages";
import { ROUTES } from "./utils/routes";

function App() {
  return useRoutes([
    {
      path: ROUTES.index,
      element: <LandingPage />,
    },
  ]);
}

export default App;
