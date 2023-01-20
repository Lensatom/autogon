import { useRoutes } from "react-router-dom";
import { LabelAnnotationPage } from './pages/LabelAnnotation';
import { NplTextAnnotationTool } from './pages/NplTextAnnotationTool';

export const LabelAnnotation = () => {
  return useRoutes([
    {
      index: true,
      element: <LabelAnnotationPage />,
    },
    {
      path: "/nlp-text-annotation-tool",
      element: <NplTextAnnotationTool />,
    },
  ]);
}