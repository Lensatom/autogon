import { useRoutes } from "react-router-dom";
import { PlatformPage } from './pages/Platform';

export const Platform = () => {
  return useRoutes([
    {
      index: true,
      element: <PlatformPage />
    }
  ])
}