import { useRoutes } from "react-router-dom";
import { PlatformPage } from "./pages/Platform";
import { LabelAnnotationPage } from "./pages/LabelAnnotation";
import { ExploreFix } from "./pages/ExploreFix";
import { IntegrateAutomate } from "./pages/integrateAutomate";

export const Platform = () => {
  return useRoutes([
    {
      index: true,
      element: <PlatformPage />,
    },
    {
      path: "label-annotate",
      element: <LabelAnnotationPage />,
    },
    {
      path: "explore-and-fix",
      element: <ExploreFix />,
    },
    {
      path: "integrate-automate",
      element: <IntegrateAutomate />,
    },
  ]);
};
