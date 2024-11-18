import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Layout from "./layouts/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contents/create",
        element: <Create></Create>,
      },
      {
        path: "/contents/update/:id",
        element: <Update></Update>,
      },
    ],
  },
]);

export default router;
