import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import commonRoutes from "./Routes/Role/role_one";
import UserRoutes from "./Routes/Role/role_two";

const role = 0; /* Static value for role user */
const UserAccessRoutePath = {
  0: commonRoutes,
  1: [...commonRoutes, ...UserRoutes],
};
const router = createBrowserRouter(UserAccessRoutePath[role]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
