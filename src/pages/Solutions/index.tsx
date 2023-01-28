import { useRoutes } from "react-router-dom"
import { Solutions } from "./pages/Solutions"
import { Roles } from './pages/Roles';

export const SolutionsRoute = () => {
  return useRoutes([
    {
      index: true,
      element: <Solutions />
    },
    {
      path: "roles",
      element: <Roles />
    }
  ])
}