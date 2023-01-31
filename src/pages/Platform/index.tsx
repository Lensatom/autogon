import { useRoutes } from "react-router-dom";
import { PlatformPage } from "./pages/Platform";
// import { LabelAnnotation } from "./pages/LabelAutomate";
import { KeyCapabilities } from "./pages/ExploreFix";
// import { IntegrateAutomate } from "./pages/integrateAutomate";

export const Platform = () => {
  return useRoutes([
    {
      index: true,
      element: <PlatformPage />,
    },
    // {
    //   path: "label-annotate/*",
    //   element: <LabelAnnotation />,
    // },
    {
      path: "key-capabilities",
      element: <KeyCapabilities />,
    },
    // {
    //   path: "integrate-automate",
    //   element: <IntegrateAutomate />,
    // },
  ]);
};
