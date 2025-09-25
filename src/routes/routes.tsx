import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home";
import SuccessStoy from "../page/SuccessStoy";
import Contact from "../page/Contact";
import TextNavigationSlider from "../page/Services";
import Errorpage from "../page/Errorpage";
import About from "../page/About";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <TextNavigationSlider />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/reviews",
        element: <SuccessStoy />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);