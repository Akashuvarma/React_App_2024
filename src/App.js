import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import commonRoutes from "./Routes/Role/role_one";
import UserRoutes from "./Routes/Role/role_two";
import "./index.css";
import ErrorComponent from "./ErrorPage/ErrorComponent";
import Layout from "./Components/Layout/Layout";
import LayoutSidebar from "./Components/Layout/LayoutSidebar";

const role = 1; /* Static value for role user */
let commonRouting = [
  {
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: commonRoutes,
  },
];
let userRouting = [
  {
    element: <LayoutSidebar />,
    errorElement: <ErrorComponent />,
    children: UserRoutes,
  },
];
const UserAccessRoutePath = {
  0: commonRouting,
  1: [...commonRouting, ...userRouting],
};
const router = createBrowserRouter(UserAccessRoutePath[role]);
console.log("router", router);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
