import { useRoutes } from "react-router-dom";
import {
  LandingPage,
  Platform,
  Company,
  Blog,
  Whitepapers,
  CaseStudies,
  Pricing,
  SolutionsRoute,
  BlogDetails
} from "./pages";
import { ROUTES } from "./utils/routes";
import React, { useEffect } from 'react'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'

ReactGA.initialize('356663250')
const browserHistory = createBrowserHistory()
// @ts-ignore: explanation here
browserHistory.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search)
})

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

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
      path: "blog/:blogId",
      element: <BlogDetails />
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
